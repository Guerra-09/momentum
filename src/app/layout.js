import "./globals.css";
import Footer from "./_components/footer";
import NavBar from "./_components/navigationBar";
import './globals.css';


export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
