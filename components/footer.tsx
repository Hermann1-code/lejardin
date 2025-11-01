import { Facebook, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Powered By */}
          <div className="space-y-4">
            <h3 className="font-bold text-background mb-4">À Propos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors text-sm">
                  Notre Histoire
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors text-sm">
                  Nos Services
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors text-sm">
                  Galerie Photos
                </a>
              </li>
            </ul>
          </div>

          {/* Call Center */}
          <div>
            <h3 className="font-bold text-background mb-4">Centre d'Appel</h3>
            <ul className="space-y-2">
              <li className="text-background/70 text-sm">+225 27 22 48 26 26</li>
              <li className="text-background/70 text-sm">Disponible 7j/7</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-background mb-4">Newsletter</h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-2 rounded-lg bg-background/10 border-0 text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                S'inscrire
              </Button>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-background mb-4">Suivez-nous</h3>
            <div className="space-y-2">
              <a
                href="#"
                className="flex items-center gap-2 text-background/70 hover:text-background transition-colors text-sm"
              >
                <Facebook className="h-4 w-4" />
                Facebook
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-background/70 hover:text-background transition-colors text-sm"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-background/70 hover:text-background transition-colors text-sm"
              >
                <Twitter className="h-4 w-4" />
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/70 hover:text-background transition-colors">
              Politique de Confidentialité
            </a>
            <a href="#" className="text-background/70 hover:text-background transition-colors">
              Conditions d'Utilisation
            </a>
          </div>

          <p className="text-background/70 text-sm">© 2025 Le Jardin Restaurant. Tous droits réservés</p>

          <div className="flex items-center gap-4">
            <span className="text-background/70 text-sm">Cocody, Abidjan - Côte d'Ivoire</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
