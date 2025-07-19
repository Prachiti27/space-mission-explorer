import Hero from '../components/Hero'
import FactsCarousel from '../components/FactsCarousel'
import About from './About'
import Footer from '../components/Footer'
import MissionsOverview from '../components/MissonsOverview'

const Home = () => {
  return (
    <>
      <Hero/>
      <MissionsOverview/>
      <FactsCarousel/>
      <About/> 
      <Footer/>
    </>
  )
}

export default Home
