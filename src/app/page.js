import Link from 'next/link'
import NavBar from './_components/navigationBar'

export default function Page() {
  return (
  <>
    <h1>Hello Next.js!</h1>

    <Link href={`/about-us`}>About us</Link>
  </> 
  )
}
