import Link from 'next/link'
import Hero from '../_components/hero/hero'
import Image from 'next/image'
import styles from './about-us.module.css'



export default function AboutUs() {
  return (
    <>
      <Hero
        backgroundImage="/background2.webp" 
        mainText="About us"
        subText="Know us better."
        showSearch={false}
      />

    <section className={styles.gridContainer}>

       <section className={styles.aboutUs}>
        <div className={styles.aboutUsText}>      
            <h2>About us</h2> 
            <p>
              Hi, we are a team of passionate developers who love to share the beauty of the world through stunning images. Our goal is to provide a platform where everyone can find inspiration and creativity. We believe in the power of photography to tell stories, evoke emotions, and connect people. Join us on this journey to explore the world through our lens!
            </p>
            <p>
              If you have any questions or suggestions, feel free to reach out to us. We would love to hear from you!
            </p>
        </div>
      </section>

      <div className={styles.aboutImageContainer}>
            <Image
              src="/about-us.webp"
              alt="Two silly cats in bed, hugging each other"
              width={500}
              height={500}
              className={styles.aboutImage}
            />
      </div>

      <section className={styles.thisProject}>
        <div className={styles.thisProjectText}> 
        <h2>This project</h2>
        <p>
          This project is a personal initiative to showcase our skills in web development and design. It is built using Next.js, React, and various other technologies. The images are sourced from various free image repositories, and the goal is to create a user-friendly platform for discovering beautiful photos.
        </p>
        </div>
      </section>

    </section>

      <div className={styles.backLinkContainer}>
        <Link href="/" className={styles.backLink}>Back to home</Link>
      </div>

    </>
  ) 
}