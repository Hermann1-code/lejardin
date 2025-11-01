"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Waves } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm"
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Waves className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">Le Jardin</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Accueil
            </Link>
            <Link href="/apropos" className="text-foreground hover:text-primary transition-colors">
              À propos
            </Link>
            <Link href="/menu" className="text-foreground hover:text-primary transition-colors">
              Menu
            </Link>
            <Link href="/galerie" className="text-foreground hover:text-primary transition-colors">
              Galerie
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/reserver">
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">Réserver</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 flex flex-col gap-4 overflow-hidden"
            >
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                href="/apropos"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                À propos
              </Link>
              <Link
                href="/menu"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Menu
              </Link>
              <Link
                href="/galerie"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Galerie
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link href="/reserver" onClick={() => setMobileMenuOpen(false)}>
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 w-full">
                  Réserver
                </Button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
