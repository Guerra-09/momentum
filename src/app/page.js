import Pictures from './_components/pictures/pictures'
import Hero from './_components/hero/hero'

export default function Page() {

  return (
  <>
    <Hero
      backgroundImage="/background1.webp"
      mainText="Discover the best photos"
      subText="Boost your creativity."
      showSearch={true}
    />
    <Pictures />
  </> 
  )
}
