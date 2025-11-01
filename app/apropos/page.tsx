"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Award, Heart, Leaf, ChefHat, Sparkles } from "lucide-react"
import Link from "next/link"

export default function AProposPage() {
  const values = [
    {
      icon: Heart,
      title: "Passion Culinaire",
      description: "Chaque plat est préparé avec amour et dévouement pour offrir une expérience gastronomique unique.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Nous nous engageons à maintenir les plus hauts standards de qualité dans notre cuisine et notre service.",
    },
    {
      icon: Leaf,
      title: "Produits Frais",
      description: "Nous privilégions les ingrédients locaux et de saison pour garantir fraîcheur et authenticité.",
    },
    {
      icon: Sparkles,
      title: "Ambiance Unique",
      description: "Un cadre tropical élégant où la nature rencontre le raffinement pour des moments inoubliables.",
    },
  ]

  const team = [
    {
      name: "Chef Exécutif",
      role: "Cuisine Gastronomique",
      image: "/placeholder.jpg",
    },
    {
      name: "Sommelier",
      role: "Sélection des Vins",
      image: "/placeholder.jpg",
    },
    {
      name: "Maître d'Hôtel",
      role: "Service & Accueil",
      image: "/placeholder.jpg",
    },
    {
      name: "Chef Pâtissier",
      role: "Desserts & Créations",
      image: "/placeholder.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[url('/placeholder.jpg')] bg-cover bg-center"
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6"
            >
              <ChefHat className="h-10 w-10 text-primary" />
            </motion.div>
            <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6">
              Notre <span className="text-primary">Histoire</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Une fusion harmonieuse entre cuisine africaine authentique et gastronomie internationale
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">Le Jardin Restaurant</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Niché au cœur du prestigieux Sofitel Hôtel Ivoire à Cocody, Le Jardin est bien plus qu'un restaurant -
                  c'est une expérience culinaire où la nature tropicale rencontre l'élégance raffinée.
                </p>
                <p>
                  Notre terrasse surplombant la lagune offre un cadre idyllique pour savourer une cuisine fusion qui
                  célèbre les saveurs africaines tout en embrassant les techniques gastronomiques internationales.
                  Chaque plat raconte une histoire, chaque bouchée est une découverte.
                </p>
                <p>
                  Entouré de verdure luxuriante et baigné par une lumière naturelle apaisante, Le Jardin crée une
                  atmosphère où le temps semble suspendu, invitant nos convives à se détendre et à savourer chaque
                  instant.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden">
                <img
                  src="/placeholder.jpg"
                  alt="Le Jardin Restaurant terrasse"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Nos Valeurs</h2>
            <p className="text-muted-foreground text-lg">Les principes qui guident notre cuisine</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center space-y-4"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Notre Équipe</h2>
            <p className="text-muted-foreground text-lg">Des artisans passionnés au service de votre plaisir</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center space-y-4"
              >
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <img src="/placeholder.jpg" alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Visitez-nous</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Nous serions ravis de vous accueillir au Jardin Restaurant
            </p>

            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground">Adresse</h3>
                <p className="text-muted-foreground">
                  Sofitel Hôtel Ivoire
                  <br />
                  Boulevard Hassan II, Cocody
                  <br />
                  Abidjan, Côte d'Ivoire
                </p>
              </div>

              <div className="space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground">Téléphone</h3>
                <p className="text-muted-foreground">+225 27 22 48 26 26</p>
              </div>

              <div className="space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground">Email</h3>
                <p className="text-muted-foreground">contact@lejardin-abidjan.com</p>
              </div>
            </div>

            <div className="pt-8">
              <Link href="/contact">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Nous Contacter
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
