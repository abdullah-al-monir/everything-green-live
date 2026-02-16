'use client';

import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import Cookie from 'js-cookie';
import { useEffect, useState } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function ProfileLayout({ children }: LayoutProps) {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const token = Cookie.get('authToken');
    if (!token) {
      router.push('/login');
    } else {
      setIsChecking(false);
    }
  }, [router]);

  if (isChecking) {
    return (
      <div className="flex-center min-h-screen bg-white">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-green-primary border-t-green-secondary rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-dark">Loading...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}