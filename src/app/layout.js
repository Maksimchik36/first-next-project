// в файлах с названием layout указываем все, что должно рендериться на всех страницах (в данном случае NavBar и Footer)
import './globals.css'
import { Inter, Roboto } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Meeting with Next.js',
  description: 'First Next.js Project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className='container'>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
