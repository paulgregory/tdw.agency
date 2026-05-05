import '../styles/tailwind.css'
import { GoogleTagManager } from '@next/third-parties/google'

export const metadata = {
  title: 'Two Degrees West \\\\ Digital Consultancy',
  description:
    'We untangle complexity to deliver clear, scalable digital products for ambitious organisations.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth bg-navy'>
      <GoogleTagManager gtmId='GTM-5WX37LD6' />
      <body className='min-h-dvh before:fixed before:inset-0 before:bg-navy before:bg-[url(/img/topography.svg)] before:bg-center before:bg-no-repeat before:bg-cover'>
        <div className='animate-fadein'>
          {children}
        </div>
      </body>
    </html>
  )
}
