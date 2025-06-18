import Link from 'next/link'
import Pictures from './_components/pictures/pictures'
import IMAGES_MOCK from '../../mocks/images.mock'
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
    <Pictures pictures={IMAGES_MOCK.IMAGES_MOCK} />
  </> 
  )
}
