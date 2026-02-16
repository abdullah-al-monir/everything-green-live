import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FaRegCircleDot } from 'react-icons/fa6';
import { HiBookmark } from 'react-icons/hi';

const social = [
  { name: 'Youtube', href: 'https://www.youtube.com/everythinggreen', icon: <FaYoutube /> },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/everything-green', icon: <FaLinkedin /> },
  { name: 'More', href: '#', icon: <FaRegCircleDot /> },
  { name: 'Subscribe', href: '#', icon: <HiBookmark /> },

]
const Footer = () => {
  return (
    <footer
      className="py-12 mt-20 relative overflow-hidden"
      style={{
        backgroundImage: 'url(./footer-bg.png)',
        backgroundSize: '100% auto',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom center',
        backgroundColor: '#ffffff',
      }}
    >
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          <div className='md:col-span-2'>
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-gradient">
              <Image
                src="/logo.png"
                alt="Everything Green Logo"
                width={249}
                height={60}
                className="inline-block mr-2 w-auto h-8 sm:h-10 md:h-12"
              />
            </Link>
            <p className="text-sm text-gray-dark mt-4">
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-gray-darker">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/extension" className="text-gray-dark hover:text-green-primary transition-colors">Web Tool</Link></li>
              <li><Link href="/pricing" className="text-gray-dark hover:text-green-primary transition-colors">Consulting</Link></li>
              <li><Link href="/features" className="text-gray-dark hover:text-green-primary transition-colors">Research</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-gray-darker">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-dark hover:text-green-primary transition-colors">About</Link></li>
              <li><Link href="/blog" className="text-gray-dark hover:text-green-primary transition-colors">Methodology</Link></li>
              <li><Link href="/contact" className="text-gray-dark hover:text-green-primary transition-colors">Partners</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-gray-darker">Community</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="text-gray-dark hover:text-green-primary transition-colors">Blog</Link></li>
              <li><Link href="/terms" className="text-gray-dark hover:text-green-primary transition-colors">Events</Link></li>
              <li><Link href="/cookies" className="text-gray-dark hover:text-green-primary transition-colors">Open-Source Data</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-light pt-8 text-center text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-dark"> Copyright &copy; 2025 everythinggreen. All Rights Reserved</p>
          <div className='flex items-center gap-3'>
            {social.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-dark hover:text-green-primary transition-colors bg-white rounded-full size-10 flex-center text-lg"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer