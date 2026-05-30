import Navbar from "../components/landing/Navbar"
import HeroSection from "../components/landing/HeroSection"
import HowItWorks from "../components/landing/HeroSection"
import StatsSection from "../components/landing/StatsSection"
import TemplateSection from "../components/landing/TemplateSection"
import PricingSection from "../components/landing/PricingSection"
import Footer from "../components/landing/Footer"

const LandingPage = () => {
  return (
    <div className="bg-white">

      <Navbar />

      <HeroSection />

      <HowItWorks />

      <StatsSection />

      <TemplateSection />

      <PricingSection />

      <Footer />

    </div>
  )
}

export default LandingPage