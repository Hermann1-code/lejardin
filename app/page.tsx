import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FacilitiesSection } from "@/components/facilities-section"
import { ActivitiesSection } from "@/components/activities-section"
import { GallerySection } from "@/components/gallery-section"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FacilitiesSection />
      <ActivitiesSection />
      <GallerySection />
      <StatsSection />
      <TestimonialsSection />
      <AboutSection />
      <Footer />

      {/* Vertical WEBSITE text */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:block">
        <div className="writing-mode-vertical text-6xl font-bold text-foreground/5 tracking-widest">LE JARDIN</div>
      </div>
    </main>
  )
}
