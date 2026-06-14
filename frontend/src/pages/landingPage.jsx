import Navbar from "../Components/landing/Navbar"
import HeroSection from "../Components/landing/HeroSection"
import HowItWorks from "../Components/landing/HowItWorks"
import StatsSection from "../Components/landing/StatsSection"
import TemplateSection from "../Components/landing/TemplateSection"
import PricingSection from "../Components/landing/PricingSection"
import Footer from "../Components/landing/Footer"

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