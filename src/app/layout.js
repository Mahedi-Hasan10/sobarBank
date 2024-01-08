import './globals.css'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export const metadata = {
  title: 'Sobar Bank',
  description: 'Sobar Bank is a bank for everyone.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='relative bg-[#191919]'>
       <section className='bg-[#191919] w-full min-h-screen xl:px-[159px] xl:py-[50px] lg:px-[40px] lg:py-[30px] sm:px-[16px] '>
        <Navbar/>
        {children} 
       </section>
        <Image className='absolute top-0 left-0' src='/hero/Group.png' alt='hero' width={758} height={610} />
        </body>
    </html>
  )
}
