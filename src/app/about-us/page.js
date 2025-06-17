import Link from 'next/link'
import Hero from '../_components/hero'

export default function AboutUs() {
  return (
  <>
    <Hero 
      backgroundImage="/background2.webp"
      mainText="About us"
      subText="Know us better."
      showSearch={false}
    />
    <h1>About us page!</h1>
    <Link href={`../`}>Come back</Link>
  </>
  ) 
}
