import Link from 'next/link'
import { ContactBanner } from '../ContactBanner/ContactBanner'

export function SiteFooter({contactBanner = false}) {
  return (
    <div className='hero-shading'>
      {contactBanner && (
        <ContactBanner />
      )}
      <footer className='py-20 md:py-28 text-white'>
        <div className='container'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            <nav className='border-b sm:border-0 border-mint pb-8 sm:pb-0 lg:col-span-2'>
              <ul className='flex flex-col w-full lg:flex-row gap-4 lg:gap-8 text-sm [&_a]:transition-colors [&_a]:duration-200 [&_a]:hover:text-mint [&_a]:font-semibold'>
                <li><Link href='/about-us'>About</Link></li>
                <li><Link href='/services'>Services</Link></li>
                <li><Link href='/packages'>Packages</Link></li>
                <li><Link href='/contact'>Contact</Link></li>
                <li><Link href='/privacy-policy'>Privacy Policy</Link></li>
              </ul>
            </nav>
            <div className='prose prose-white prose-sm xl:col-span-2 sm:text-right max-w-none'>
              <p>The independent digital consultancy that helps ambitious ideas land properly.</p>
              <p><span className='uppercase font-bold'>&copy; Two Degrees West Agency Limited</span><br /><span className='font-light'>Registered in England and Wales: 15120564</span></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}