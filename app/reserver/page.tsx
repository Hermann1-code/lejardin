"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function ReserverPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Reservation submitted:", formData)
    // Handle form submission
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10" />
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.08 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[url('/placeholder.jpg')] bg-cover bg-center"
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6"
            >
              <Calendar className="h-10 w-10 text-primary" />
            </motion.div>
            <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6">
              Réservez Votre <span className="text-primary">Table</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Garantissez votre place dans notre jardin tropical pour une expérience culinaire mémorable
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card rounded-3xl p-8 md:p-12"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                    <User className="h-6 w-6 text-primary" />
                    Informations Personnelles
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Nom complet *</label>
                      <Input
                        required
                        placeholder="Votre nom"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-background"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Email *</label>
                      <Input
                        required
                        type="email"
                        placeholder="votre@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Téléphone *</label>
                    <Input
                      required
                      type="tel"
                      placeholder="+225 XX XX XX XX XX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-background"
                    />
                  </div>
                </div>

                {/* Reservation Details */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                    <Calendar className="h-6 w-6 text-primary" />
                    Détails de la Réservation
                  </h2>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Date *</label>
                      <Input
                        required
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="bg-background"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Heure *</label>
                      <Input
                        required
                        type="time"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="bg-background"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Nombre de personnes *</label>
                      <select
                        required
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? "personne" : "personnes"}
                          </option>
                        ))}
                        <option value="10+">Plus de 10 personnes</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Special Requests */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                    <MessageSquare className="h-6 w-6 text-primary" />
                    Demandes Spéciales
                  </h2>
                  <Textarea
                    placeholder="Allergies, préférences alimentaires, occasion spéciale..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background min-h-[120px]"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6"
                >
                  Confirmer la Réservation
                </Button>
              </form>
            </motion.div>

            {/* Info Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-card rounded-2xl p-6 text-center"
              >
                <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">Horaires</h3>
                <p className="text-sm text-muted-foreground">
                  Déjeuner: 12h - 15h
                  <br />
                  Dîner: 19h - 23h
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-card rounded-2xl p-6 text-center"
              >
                <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">Téléphone</h3>
                <p className="text-sm text-muted-foreground">+225 27 22 48 26 26</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="bg-card rounded-2xl p-6 text-center"
              >
                <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">Email</h3>
                <p className="text-sm text-muted-foreground">reservation@lejardin-abidjan.com</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
