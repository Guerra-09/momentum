import Link from 'next/link'
import Pictures from './_components/pictures/pictures'
import IMAGES_MOCK from '../../mocks/images.mock'

export default function Page() {

  return (
  <>
    <Pictures pictures={IMAGES_MOCK.IMAGES_MOCK} />
  </> 
  )
}
