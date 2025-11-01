"use client"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight">
              <span className="text-foreground">Bienvenue au</span>
              <br />
              <span className="text-foreground">Le Jardin</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Un goût de nature au cœur d'Abidjan. Cuisine africaine et internationale raffinée dans un cadre tropical
              élégant au Sofitel Hôtel Ivoire.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base px-8">
                Réserver Maintenant
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-foreground/20 text-foreground hover:bg-foreground/5 text-base px-8 bg-transparent"
              >
                <Play className="mr-2 h-4 w-4" />
                Visite Virtuelle
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Circular Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-[400px] h-[400px]">
              <div className="absolute inset-0 rounded-full overflow-hidden border-8 border-dashed border-secondary/30">
                <img
                  src="/placeholder.jpg"
                  alt="Le Jardin Restaurant terrasse"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center"
              >
                <span className="text-3xl">🍽️</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
