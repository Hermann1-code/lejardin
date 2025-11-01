"use client"

import { Users, Calendar, Award, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: "5000+",
      label: "Visiteurs Satisfaits",
    },
    {
      icon: Calendar,
      value: "10+",
      label: "Années d'Expérience",
    },
    {
      icon: Award,
      value: "50+",
      label: "Événements Organisés",
    },
    {
      icon: MapPin,
      value: "1",
      label: "Destination Unique",
    },
  ]

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center space-y-3"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
