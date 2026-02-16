'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookie from 'js-cookie';
import { apiClient } from '@/lib/api';
import { useAuthStore } from '@/store/auth';
import { motion } from 'framer-motion';
import { BiEdit, BiSave, BiX, BiTrash, BiCamera, BiCheck } from 'react-icons/bi';
import Image from 'next/image';
import DeleteModal from '@/components/DeleteModal';

const ProfilePage = () => {
  const router = useRouter();
  const { user, setUser } = useAuthStore();

  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');
  const [imageError, setImageError] = useState(false);
  const [success, setSuccess] = useState('');

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const [formData, setFormData] = useState({
    username: '',
    fullName: '',
    bio: '',
    avatar: '',
  });

  useEffect(() => {
    const token = Cookie.get('authToken');
    if (!token) {
      router.push('/login');
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await apiClient.getProfile();
        if (response.data.user) {
          setUser(response.data.user);
          setFormData({
            username: response.data.user.username || '',
            fullName: response.data.user.fullName || '',
            bio: response.data.user.bio || '',
            avatar: response.data.user.avatar || '',
          });
        }
      } catch (err: any) {
        setError('Failed to load profile');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [router, setUser]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsSaving(true);

    try {
      const response = await apiClient.updateProfile(formData);
      if (response.data.user) {
        setUser(response.data.user);
        setSuccess('Profile updated successfully!');
        setIsEditing(false);
        setTimeout(() => setSuccess(''), 3000);
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to update profile');
      console.log(error)
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteAccount = async () => {
    setIsDeleting(true);
    try {
      setError('');
      await apiClient.deleteProfile();
      apiClient.removeToken();
      useAuthStore.getState().logout();
      router.push('/');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to delete account');
      setShowDeleteModal(false);
    } finally {
      setIsDeleting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen gradient-light-bg flex-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-green-light border-t-green-primary rounded-full animate-spin mx-auto mb-6"></div>
          <p className="text-gray-dark font-semibold">Loading your profile...</p>
        </motion.div>
      </div>
    );
  }

  const isValidUrl = (string: string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };
  return (
    <div className="min-h-screen gradient-light-bg py-12 px-4 sm:py-20">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Header Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-light p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-darker mb-2">My Profile</h1>
                <p className="text-gray-dark">Manage your Everything Green account</p>
              </div>
              {!isEditing && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsEditing(true)}
                  className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <BiEdit size={18} />
                  Edit Profile
                </motion.button>
              )}
            </div>
          </div>

          {/* Alert Messages */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-4 bg-red-50 border-l-4 border-red-500 rounded-lg"
            >
              <p className="text-red-700 font-semibold flex items-center gap-2">
                <span className="text-xl">⚠️</span> {error}
              </p>
            </motion.div>
          )}

          {success && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-4 bg-green-50 border-l-4 border-green-primary rounded-lg"
            >
              <p className="text-green-primary font-semibold flex items-center gap-2">
                <BiCheck size={20} /> {success}
              </p>
            </motion.div>
          )}

          {/* Main Profile Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-light overflow-hidden">
            {/* Avatar Section */}
            <div className="bg-gradient-light-bg p-8 sm:p-12">
              <div className="flex flex-col items-center text-center">
                <motion.div
                  whileHover={isEditing ? { scale: 1.05 } : {}}
                  className="relative mb-6"
                >
                  <div className="w-32 h-32 rounded-full bg-green-primary flex-center text-white text-5xl font-bold shadow-lg ring-4 ring-green-light">
                    {formData.avatar && isValidUrl(formData.avatar) && !imageError ? (
                      <Image
                        src={formData.avatar}
                        alt={formData.fullName}
                        className="w-full h-full rounded-full object-cover"
                        width={128}
                        height={128}
                        onError={() => setImageError(true)}
                      />
                    ) : (
                      formData.fullName.charAt(0).toUpperCase() || user?.username.charAt(0).toUpperCase() || 'U'
                    )}
                  </div>
                  {isEditing && (
                    <div className="absolute bottom-0 right-0 bg-green-primary text-white p-3 rounded-full shadow-lg">
                      <BiCamera size={20} />
                    </div>
                  )}
                </motion.div>

                <h2 className="text-3xl font-bold text-gray-darker mb-1">
                  {formData.fullName || 'User'}
                </h2>
                <p className="text-green-primary font-semibold mb-2">@{formData.username || user?.username}</p>
                <p className="text-gray-dark text-sm">{user?.email}</p>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 sm:p-12">
              {isEditing ? (
                <form onSubmit={handleSaveProfile} className="space-y-6">
                  {/* Full Name */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <label htmlFor="fullName" className="block text-sm font-bold text-gray-darker mb-3">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="input-field w-full"
                    />
                  </motion.div>

                  {/* Username */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label htmlFor="username" className="block text-sm font-bold text-gray-darker mb-3">
                      Username
                    </label>
                    <input
                      id="username"
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      placeholder="Choose your username"
                      className="input-field w-full"
                    />
                  </motion.div>

                  {/* Bio */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label htmlFor="bio" className="block text-sm font-bold text-gray-darker mb-3">
                      Bio
                    </label>
                    <textarea
                      id="bio"
                      name="bio"
                      value={formData.bio}
                      onChange={handleChange}
                      placeholder="Tell us about yourself... (max 500 characters)"
                      maxLength={500}
                      rows={4}
                      className="w-full px-4 py-3 bg-white border-2 border-green-light rounded-xl focus:outline-none focus:border-green-primary transition-colors duration-200 resize-none font-sans"
                    />
                    <p className="text-xs text-gray-dark mt-2">
                      {formData.bio.length}/500 characters
                    </p>
                  </motion.div>

                  {/* Avatar URL */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label htmlFor="avatar" className="block text-sm font-bold text-gray-darker mb-3">
                      Avatar URL
                    </label>
                    <input
                      id="avatar"
                      type="url"
                      name="avatar"
                      value={formData.avatar}
                      onChange={handleChange}
                      placeholder="https://example.com/avatar.jpg"
                      className="input-field w-full"
                    />
                    <p className="text-xs text-gray-dark mt-2">
                      Upload your profile picture (provide a direct image URL)
                    </p>
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 pt-6"
                  >
                    <button
                      type="submit"
                      disabled={isSaving}
                      className="btn-primary flex items-center justify-center gap-2 disabled:opacity-50 flex-1"
                    >
                      <BiSave size={18} />
                      {isSaving ? 'Saving...' : 'Save Changes'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="btn-secondary flex items-center justify-center gap-2 flex-1"
                    >
                      <BiX size={18} />
                      Cancel
                    </button>
                  </motion.div>
                </form>
              ) : (
                <div className="space-y-8">
                  {/* Info Grid */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Email */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="p-6 bg-gray-light rounded-xl"
                    >
                      <p className="text-xs font-bold text-green-primary uppercase tracking-wide mb-2">
                        Email Address
                      </p>
                      <p className="text-lg font-semibold text-gray-darker break-all">
                        {user?.email}
                      </p>
                    </motion.div>

                    {/* Member Since */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="p-6 bg-gray-light rounded-xl"
                    >
                      <p className="text-xs font-bold text-green-primary uppercase tracking-wide mb-2">
                        Member Since
                      </p>
                      <p className="text-lg font-semibold text-gray-darker">
                        {user?.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        }) : 'N/A'}
                      </p>
                    </motion.div>
                  </div>

                  {/* Bio Section */}
                  {formData.bio && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="p-6 bg-gradient-light-bg rounded-xl border border-green-light"
                    >
                      <p className="text-xs font-bold text-green-primary uppercase tracking-wide mb-2">
                        Bio
                      </p>
                      <p className="text-gray-darker leading-relaxed">
                        {formData.bio}
                      </p>
                    </motion.div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Danger Zone */}
          {!isEditing && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-2xl shadow-sm border border-red-200 p-8 sm:p-12"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="text-3xl">⚠️</div>
                <div>
                  <h3 className="text-xl font-bold text-red-600 mb-1">Danger Zone</h3>
                  <p className="text-gray-dark text-sm">
                    Permanently delete your account and all associated data. This action cannot be undone.
                  </p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowDeleteModal(true)}
                className="px-6 py-3 bg-red-50 text-red-600 border-2 border-red-200 rounded-xl hover:bg-red-100 hover:border-red-300 font-bold flex items-center justify-center gap-2 smooth-transition w-full sm:w-auto"
              >
                <BiTrash size={18} />
                Delete Account Permanently
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>
      <DeleteModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDeleteAccount}
        isDeleting={isDeleting}
      />
    </div>
  );
};

export default ProfilePage;