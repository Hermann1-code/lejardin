"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            <span className="text-foreground">Contactez-</span>
            <span className="text-foreground">Nous</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Prêt à réserver votre table ? Contactez-nous dès aujourd'hui et laissez-nous vous offrir une expérience
            gastronomique inoubliable au Jardin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-card border-0">
              <CardHeader>
                <CardTitle className="text-card-foreground flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Localisation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Sofitel Hôtel Ivoire
                  <br />
                  Boulevard Hassan II, Cocody
                  <br />
                  Abidjan, Côte d'Ivoire
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-0">
              <CardHeader>
                <CardTitle className="text-card-foreground flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Téléphone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-mono">+225 27 22 48 26 26</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-0">
              <CardHeader>
                <CardTitle className="text-card-foreground flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-mono">contact@lejardin-abidjan.com</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-0">
              <CardHeader>
                <CardTitle className="text-card-foreground flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Horaires
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Lundi - Dimanche: 12h - 23h
                  <br />
                  Service continu
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 bg-card border-0">
            <CardHeader>
              <CardTitle className="text-card-foreground text-2xl">Envoyez-nous un Message</CardTitle>
              <CardDescription className="text-muted-foreground leading-relaxed">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les 24 heures.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-card-foreground">
                      Nom Complet
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Jean Kouassi"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-input border-0 text-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-card-foreground">
                      Adresse Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jean@exemple.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-input border-0 text-foreground"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-card-foreground">
                    Numéro de Téléphone
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+225 07 XX XX XX XX"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-input border-0 text-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-card-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Parlez-nous de vos projets..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-input border-0 text-foreground resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6"
                >
                  Envoyer le Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
