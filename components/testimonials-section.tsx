"use client"

import { Star } from "lucide-react"
import { motion } from "framer-motion"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Kouadio Jean",
      location: "Abidjan",
      rating: 5,
      comment:
        "Une expérience culinaire exceptionnelle ! Les plats sont délicieux et l'ambiance tropicale est parfaite pour un dîner romantique.",
      image: "african man smiling happy customer",
    },
    {
      name: "Aminata Traoré",
      location: "Yamoussoukro",
      rating: 5,
      comment:
        "Le Jardin est mon restaurant préféré à Abidjan. La fusion de cuisine africaine et internationale est sublime, et la vue sur la lagune est magnifique.",
      image: "african woman smiling satisfied customer",
    },
    {
      name: "Famille Bamba",
      location: "Cocody",
      rating: 5,
      comment:
        "Nous célébrons tous nos événements familiaux au Jardin. Le service est impeccable et la qualité des plats est toujours au rendez-vous.",
      image: "happy african family together",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ce Que Disent <span className="text-foreground">Nos Clients</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Découvrez les témoignages de nos visiteurs satisfaits
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-2xl p-6 space-y-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-muted">
                  <img src="/placeholder.jpg" alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed">"{testimonial.comment}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
