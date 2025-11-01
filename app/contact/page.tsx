"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-primary/5" />
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.05 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[url('/placeholder.jpg')] bg-cover bg-center"
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6"
            >
              <Mail className="h-10 w-10 text-primary" />
            </motion.div>
            <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-4">
              Contactez<span className="text-primary">-Nous</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Notre équipe est à votre écoute pour toute question ou demande d'information
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-card rounded-2xl p-8 space-y-6">
                <h2 className="text-2xl font-bold text-foreground">Envoyez-nous un message</h2>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Nom complet</label>
                    <Input placeholder="Votre nom" className="bg-background" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                    <Input type="email" placeholder="votre@email.com" className="bg-background" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Téléphone</label>
                    <Input type="tel" placeholder="+225 XX XX XX XX XX" className="bg-background" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                    <Textarea placeholder="Votre message..." className="bg-background min-h-[150px]" />
                  </div>

                  <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    Envoyer le message
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="bg-card rounded-2xl p-8 space-y-6">
                <h2 className="text-2xl font-bold text-foreground">Informations de contact</h2>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Adresse</h3>
                      <p className="text-muted-foreground">
                        Kibouo, Daloa
                        <br />
                        Côte d'Ivoire
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Téléphone</h3>
                      <p className="text-muted-foreground">
                        +225 XX XX XX XX XX
                        <br />
                        +225 XX XX XX XX XX
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground">
                        contact@pacifiklodges.ci
                        <br />
                        reservation@pacifiklodges.ci
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Horaires d'ouverture</h3>
                      <p className="text-muted-foreground">
                        Lundi - Dimanche
                        <br />
                        8h00 - 20h00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-muted rounded-2xl h-64 flex items-center justify-center">
                <p className="text-muted-foreground">Carte interactive</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
