"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function ActivitiesSection() {
  const activities = [
    { name: "Entrées", rotation: "-rotate-3", image: "appetizers starters african cuisine elegant" },
    { name: "Plats Principaux", rotation: "rotate-2", image: "main course grilled fish african dishes" },
    { name: "Desserts", rotation: "-rotate-2", image: "african desserts sweet treats elegant plating" },
    { name: "Boissons", rotation: "rotate-3", image: "cocktails drinks beverages tropical" },
  ]

  return (
    <section id="activities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Notre <span className="text-foreground">Menu</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Découvrez nos spécialités africaines et internationales
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${activity.rotation} transition-transform hover:rotate-0 hover:scale-105`}
            >
              <div className="rounded-2xl overflow-hidden">
                <img src="/placeholder.jpg" alt={activity.name} className="w-full h-64 object-cover" />
              </div>
              <p className="text-center mt-3 font-medium text-foreground">{activity.name}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button variant="link" className="text-foreground hover:text-primary">
            Voir le menu complet
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
