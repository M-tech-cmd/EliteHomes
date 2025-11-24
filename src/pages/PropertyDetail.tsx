import { useParams, Link } from "react-router-dom";
import { properties } from "@/data/properties";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Maximize, MapPin, ArrowLeft, Check } from "lucide-react";

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Property Not Found</h2>
          <Link to="/properties">
            <Button>Back to Properties</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link to="/properties">
          <Button variant="ghost" className="mb-6 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Properties
          </Button>
        </Link>

        {/* Hero Image */}
        <div className="relative h-[60vh] rounded-2xl overflow-hidden mb-8 shadow-elegant">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-6 left-6">
            <Badge className="bg-accent text-accent-foreground text-base px-4 py-2">
              {property.type}
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title & Location */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {property.title}
              </h1>
              <div className="flex items-center gap-2 text-muted-foreground text-lg">
                <MapPin className="h-5 w-5" />
                <span>{property.location}</span>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 py-6 border-y border-border">
              <div className="flex items-center gap-2">
                <Bed className="h-5 w-5 text-accent" />
                <span className="text-lg font-medium">{property.beds} Beds</span>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="h-5 w-5 text-accent" />
                <span className="text-lg font-medium">{property.baths} Baths</span>
              </div>
              <div className="flex items-center gap-2">
                <Maximize className="h-5 w-5 text-accent" />
                <span className="text-lg font-medium">{property.sqft}</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Description</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {property.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Property Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="p-1 bg-accent/10 rounded-full">
                      <Check className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-card border border-border rounded-2xl p-8 shadow-medium space-y-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Price</p>
                <p className="text-4xl font-bold text-primary">{property.price}</p>
              </div>

              <div className="space-y-3">
                <Button className="w-full bg-accent hover:bg-accent/90" size="lg">
                  Schedule Tour
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  Contact Agent
                </Button>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">Need financing?</p>
                <Button variant="secondary" className="w-full">
                  Calculate Mortgage
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
