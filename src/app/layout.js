import "./globals.css";
import Footer from "./_components/footer/footer";
import Hero from "./_components/hero/hero";
import NavBar from "./_components/navigationBar/navigationBar";
import './globals.css';


export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Hero />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
