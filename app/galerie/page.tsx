"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { useState } from "react"
import { X } from "lucide-react"
import { Camera } from "lucide-react"

export default function GaleriePage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      query: "beautiful lakeside lodge sunset golden hour peaceful",
      category: "Vue d'ensemble",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      query: "elegant restaurant interior dining tables ambient lighting",
      category: "Restaurant",
      span: "",
    },
    {
      query: "modern swimming pool resort blue water lounge chairs",
      category: "Piscine",
      span: "",
    },
    {
      query: "outdoor terrace bar evening lights cozy atmosphere",
      category: "Terrasse",
      span: "",
    },
    {
      query: "event hall wedding decoration elegant setup",
      category: "Événements",
      span: "",
    },
    {
      query: "lake kayaking water sport activity fun adventure",
      category: "Activités",
      span: "md:col-span-2",
    },
    {
      query: "fishing boat peaceful lake morning mist",
      category: "Pêche",
      span: "",
    },
    {
      query: "outdoor games petanque court recreation area",
      category: "Jeux",
      span: "",
    },
    {
      query: "nature trail hiking path forest greenery",
      category: "Randonnée",
      span: "",
    },
    {
      query: "sunset view lake silhouette peaceful evening",
      category: "Paysages",
      span: "md:col-span-2",
    },
    {
      query: "outdoor dining area tables umbrellas lakeside view",
      category: "Extérieur",
      span: "",
    },
    {
      query: "children playground area colorful equipment safe",
      category: "Espace Enfants",
      span: "",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-[url('/placeholder.jpg')] bg-cover bg-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ rotateY: 180, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-6"
            >
              <Camera className="h-10 w-10 text-primary" />
            </motion.div>
            <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6">
              Notre <span className="text-primary">Galerie</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Plongez dans l'univers visuel du Jardin Restaurant à travers nos plus belles images
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-4 max-w-7xl mx-auto">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`${img.span} group relative overflow-hidden rounded-2xl cursor-pointer`}
                style={{ minHeight: img.span.includes("row-span-2") ? "600px" : "300px" }}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src="/placeholder.jpg"
                  alt={img.category}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/0 to-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-background font-bold text-lg">{img.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-background hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src="/placeholder.jpg"
              alt={galleryImages[selectedImage].category}
              className="w-full h-auto rounded-2xl"
            />
            <p className="text-background text-center mt-4 text-xl font-bold">
              {galleryImages[selectedImage].category}
            </p>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  )
}
