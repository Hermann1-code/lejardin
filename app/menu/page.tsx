"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Utensils, Wine, IceCream } from "lucide-react"
import Link from "next/link"

export default function MenuPage() {
  const menuCategories = [
    {
      icon: Utensils,
      title: "Entrées & Plats",
      items: [
        {
          name: "Attiéké Taboulé",
          description: "Attiéké revisité façon taboulé avec légumes frais, herbes aromatiques et vinaigrette citronnée",
          price: "4 500 FCFA",
        },
        {
          name: "Kedjenou de Poulet",
          description: "Poulet mijoté aux épices ivoiriennes, légumes du jardin et sauce onctueuse",
          price: "7 500 FCFA",
        },
        {
          name: "Poisson Grillé de la Lagune",
          description: "Poisson frais grillé, marinade aux agrumes, accompagné de plantain et légumes sautés",
          price: "8 500 FCFA",
        },
        {
          name: "Brochettes d'Agneau",
          description: "Agneau mariné aux épices africaines, servi avec riz parfumé et sauce arachide",
          price: "9 000 FCFA",
        },
        {
          name: "Carpaccio de Bœuf",
          description: "Fines tranches de bœuf, roquette, parmesan et huile de truffe",
          price: "6 500 FCFA",
        },
        {
          name: "Salade Le Jardin",
          description: "Mélange de verdures, avocat, mangue, noix de cajou et vinaigrette passion",
          price: "4 000 FCFA",
        },
      ],
    },
    {
      icon: IceCream,
      title: "Desserts Africains",
      items: [
        {
          name: "Tarte à la Banane Plantain",
          description: "Tarte caramélisée aux bananes plantain, glace vanille bourbon",
          price: "3 500 FCFA",
        },
        {
          name: "Mousse au Chocolat Ivoirien",
          description: "Mousse légère au chocolat de Côte d'Ivoire, éclats de cacao",
          price: "3 800 FCFA",
        },
        {
          name: "Salade de Fruits Tropicaux",
          description: "Ananas, mangue, papaye, fruit de la passion et sorbet coco",
          price: "3 200 FCFA",
        },
        {
          name: "Crème Brûlée au Gingembre",
          description: "Crème onctueuse parfumée au gingembre frais, caramel croustillant",
          price: "4 000 FCFA",
        },
      ],
    },
    {
      icon: Wine,
      title: "Boissons & Vins",
      items: [
        {
          name: "Jus Naturels",
          description: "Bissap, gingembre, ananas, mangue ou cocktail de fruits frais",
          price: "2 000 FCFA",
        },
        {
          name: "Vins Sélectionnés",
          description: "Carte des vins français et internationaux",
          price: "À partir de 15 000 FCFA",
        },
        {
          name: "Cocktails Signature",
          description: "Créations originales du bar Le Jardin",
          price: "4 500 FCFA",
        },
        {
          name: "Café & Thés",
          description: "Expresso, cappuccino, thés d'exception",
          price: "1 500 FCFA",
        },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="relative pt-32 pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-background to-background" />
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.05 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-[url('/placeholder.jpg')] bg-cover bg-center"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ rotate: -180, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-8"
            >
              <Utensils className="h-12 w-12 text-primary" />
            </motion.div>
            <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6">
              Notre <span className="text-primary">Menu</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Découvrez une cuisine fusion qui célèbre les saveurs africaines et internationales dans un cadre tropical
              élégant
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-20">
            {menuCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-10">
                  <div className="bg-primary/10 p-4 rounded-2xl">
                    <category.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-4xl font-bold text-foreground">{category.title}</h2>
                </div>

                <div className="grid gap-8">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                      className="flex justify-between items-start gap-6 pb-6 border-b border-border/50 last:border-0"
                    >
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground mb-2">{item.name}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                      <div className="text-2xl font-bold text-primary whitespace-nowrap">{item.price}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Réservez Votre Table</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Vivez une expérience culinaire unique au cœur d'Abidjan. Notre équipe vous attend pour un moment
              inoubliable.
            </p>
            <Link href="/reserver">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
                Réserver Maintenant
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
