"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react"
import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Le Jardin Restaurant
              <br />
              Sofitel Abidjan
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Situé au cœur du Sofitel Hôtel Ivoire à Cocody, Le Jardin est votre destination gastronomique pour une
              expérience culinaire exceptionnelle. Notre restaurant offre une fusion raffinée de cuisine africaine et
              internationale dans un cadre tropical élégant avec vue sur la lagune.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Boulevard Hassan II, Cocody, Abidjan</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span>+225 27 22 48 26 26</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span>contact@lejardin-abidjan.com</span>
              </div>
            </div>
            <Button variant="link" className="text-foreground hover:text-primary p-0 h-auto font-medium">
              En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          {/* Right Content - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-48">
                  <img src="/placeholder.jpg" alt="Lodge exterior" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden h-64">
                  <img src="/placeholder.jpg" alt="Lake view" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden h-64">
                  <img src="/placeholder.jpg" alt="Restaurant" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden h-48">
                  <img src="/placeholder.jpg" alt="Pool area" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
