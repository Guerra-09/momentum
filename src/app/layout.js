import NavBar from "./_components/navigationBar";

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <main>{children}</main>
      </body>
    </html>
  )
}