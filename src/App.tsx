import { ThemeProvider } from "./contexts/ThemeProvider"
import { ThemeEffect } from "./components/ThemeEffect"
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton"
import { NavBar } from "./components/ui/tubelight-navbar"
import { HeroSection } from "./components/ui/hero-section-2"
import { FeaturedCars } from "./components/FeaturedCars"
import WhyChooseUs from "./components/WhyChooseUs"
import Footer from "./components/Footer"
import AboutSection from "./components/AboutSection"
import { Home, Users, Settings, Car, Mail } from "lucide-react"

const navItems = [
  { name: "Home", url: "#home", icon: Home },
  { name: "About", url: "#about", icon: Users },
  { name: "Cars", url: "#cars", icon: Settings },
  { name: "services", url: "#services", icon: Car },
  { name: "Contact", url: "#contact", icon: Mail },
]

function App() {
  return (
    <ThemeProvider>
      <ThemeEffect />
      <WhatsAppFloatingButton />
      <div className="min-h-screen bg-background text-foreground">
        <NavBar items={navItems} />

        <HeroSection
          logo={{
            url: "/adnanlogo.png",
            alt: "Car Showroom Logo",
          }}
          title={
            <>
              Find Your Next Car <br />
              <span className="text-primary">with Confidence.</span>
            </>
          }
          subtitle="Explore quality vehicles, compare your options, and connect with our showroom to find the right car for you."
          callToAction={{
            text: "Explore Cars",
            href: "#cars",
          }}
          secondaryCallToAction={{
            text: "Contact Us",
            href: "#contact",
          }}
          backgroundImage="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80"
          contactInfo={{
            website: "carshowroom.com",
            phone: "+1 (555) 123-4567",
            address: "123 Luxury Lane, Beverly Hills, CA",
          }}
        />
<div className="">
  <FeaturedCars />
</div>
        
        <WhyChooseUs />

        <AboutSection />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
