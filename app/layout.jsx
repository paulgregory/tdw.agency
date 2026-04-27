import '../styles/tailwind.css'

export const metadata = {
  title: 'Two Degrees West \\\\ Digital Consultancy',
  description:
    'We untangle complexity to deliver clear, scalable digital products for ambitious organisations.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className='min-h-dvh bg-navy bg-[url(/img/topography.svg)] bg-center bg-no-repeat bg-cover bg-top bg-fixed'>
        <div className='animate-fadein'>
          {children}
        </div>
      </body>
    </html>
  )
}
