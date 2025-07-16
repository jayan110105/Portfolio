import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jayan Paliwal - Software Engineer & Full Stack Developer',
  description: 'Personal portfolio of Jayan Paliwal - Building full stack apps and AI tools',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900 overflow-x-hidden`} >
        <div className='fixed inset-0 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]'/>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
