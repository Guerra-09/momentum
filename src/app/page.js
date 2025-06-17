import Link from 'next/link'
import Hero from './_components/hero'

export default function Page() {
  return (
  <>
    <Hero 
      backgroundImage="/background1.webp"
      mainText="Discover the best photos."
      subText="Boost your creativity."
      showSearch={true}
    />
    <h1>Hello Next.js!</h1>
    <Link href={`/about-us`}>About us</Link>
  </> 
  )
}
