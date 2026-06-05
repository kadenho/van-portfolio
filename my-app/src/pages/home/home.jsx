import { useReveal } from '../../useReveal'
import Banner from '../../assets/home-banner.jpg'
import IntroductionImage from '../../assets/intro-picture.png'
import '../../reveal.css'
import './home.css'

export default function Home() {
  const introRef = useReveal()

  return (
    <>
      <img src={Banner} alt="Banner" className="banner" draggable={false} />

      <section id="introduction" className="introduction reveal" ref={introRef}>
        <img src={IntroductionImage} alt="Introduction" className="introduction-image" draggable={false} />
        <p className="introduction-text">
          Van is a multi-disciplinary designer
          who dreams of unifying her love for
          traditional art and graphic design to
          inspire audiences all over the world.
        </p>
      </section>
    </>
  )
}
