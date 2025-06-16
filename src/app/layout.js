import "./globals.css";
import Footer from "./_components/footer";
import Hero from "./_components/hero";
import NavBar from "./_components/navigationBar";
import localFont from 'next/font/local';
import './globals.css';


export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Hero />
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
