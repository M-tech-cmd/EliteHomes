import { Link } from "react-router-dom";
import { Building2, Mail, Phone, MapPin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-accent rounded-lg">
                <Building2 className="h-5 w-5 text-accent-foreground" />
              </div>
              <span className="text-xl font-bold">EliteHomes</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Your trusted partner in finding the perfect property. Excellence in real estate since 2024.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/properties" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Buy Property</li>
              <li>Rent Property</li>
              <li>Sell Property</li>
              <li>Property Management</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@elitehomes.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>123 Real Estate Ave, City, ST 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2024 EliteHomes. All rights reserved.</p>
          <p className="flex items-center justify-center gap-1 mt-2">
            Created with <Heart className="h-3 w-3 text-accent fill-accent" /> by M-tech-cmd
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
