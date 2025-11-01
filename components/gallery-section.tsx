"use client"

import { motion } from "framer-motion"

export function GallerySection() {
  const images = [
    { query: "elegant restaurant terrace lagoon view sunset abidjan", span: "md:col-span-2" },
    { query: "african cuisine plated dish elegant presentation", span: "" },
    { query: "tropical garden restaurant outdoor dining ambiance", span: "" },
    { query: "fine dining interior elegant decoration warm lighting", span: "md:col-span-2" },
    { query: "grilled fish african dish gourmet presentation", span: "" },
    { query: "restaurant bar cocktails tropical drinks", span: "" },
  ]

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Notre <span className="text-foreground">Galerie</span>
          </h2>
          <p className="text-muted-foreground text-lg">Découvrez Le Jardin Restaurant en images</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${img.span} group relative overflow-hidden rounded-2xl h-64 cursor-pointer`}
            >
              <img
                src="/placeholder.jpg"
                alt="Le Jardin Restaurant"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
