import Link from "next/link"
import { Instagram, Facebook, Linkedin, Mail, Phone } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold">
              New Sequence
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md">
              Professional real estate photography, videography, and 3D rendering services to showcase properties at
              their best.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" />
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">Navigation</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gray-600 dark:text-gray-400 mr-2" />
                <a
                  href="mailto:info@newsequence.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  info@newsequence.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gray-600 dark:text-gray-400 mr-2" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center">
            © {currentYear} New Sequence. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
