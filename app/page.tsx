import IntroAnimation from '@/components/IntroAnimation'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Prices from '@/components/Prices'
import CarsCarousel from '@/components/CarsCarousel'
import Autodrom from '@/components/Autodrom'
import Reviews from '@/components/Reviews'
import Branches from '@/components/Branches'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'

export default function Home() {
  return (
    <>
      <IntroAnimation />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Prices />
        <CarsCarousel />
        <Autodrom />
        <Reviews />
        <Branches />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
