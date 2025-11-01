"use client"

import { motion } from "framer-motion"
import { Utensils, Waves, Users, Music } from "lucide-react"

export function FacilitiesSection() {
  const facilities = [
    {
      icon: Utensils,
      title: "Cuisine Raffinée",
      description: "Fusion de saveurs africaines et internationales préparées par nos chefs talentueux",
      image: "restaurant dining lakeside elegant ambiance food service",
    },
    {
      icon: Waves,
      title: "Terrasse sur Lagune",
      description: "Dînez en plein air avec une vue imprenable sur la lagune Ébrié",
      image: "swimming pool resort luxury relaxation water",
    },
    {
      icon: Users,
      title: "Événements Privés",
      description: "Organisez vos réceptions, anniversaires et dîners d'affaires dans notre espace élégant",
      image: "event hall conference room wedding venue elegant",
    },
    {
      icon: Music,
      title: "Ambiance Tropicale",
      description: "Jardin luxuriant, éclairage chaleureux et musique d'ambiance pour une expérience unique",
      image: "leisure area bar terrace entertainment outdoor",
    },
  ]

  return (
    <section id="facilities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Notre <span className="text-foreground">Expérience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Une expérience gastronomique où la nature rencontre la haute cuisine
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl h-80">
                <img
                  src="/placeholder.jpg"
                  alt={facility.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                  <div className="flex items-center gap-3 mb-2">
                    <facility.icon className="h-6 w-6" />
                    <h3 className="text-2xl font-bold">{facility.title}</h3>
                  </div>
                  <p className="text-background/90">{facility.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
