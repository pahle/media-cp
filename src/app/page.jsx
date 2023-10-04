import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { About } from '@/components/About'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Portfolios } from '@/components/Portfolios'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <SecondaryFeatures />
        <CallToAction />
        <Portfolios />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
