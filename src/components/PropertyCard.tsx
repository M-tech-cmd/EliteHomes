import { Link } from "react-router-dom";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Checkbox } from "./ui/checkbox";
import { Bed, Bath, Maximize, MapPin } from "lucide-react";
import { useComparison } from "@/context/ComparisonContext";
import { Property } from "@/data/properties";

type PropertyCardProps = Property;

const PropertyCard = (property: PropertyCardProps) => {
  const { id, image, title, price, location, beds, baths, sqft, type } = property;
  const { addProperty, removeProperty, isSelected, selectedProperties } = useComparison();

  const handleCheckboxChange = (checked: boolean) => {
    if (checked) {
      if (selectedProperties.length >= 4) {
        return; // Max 4 properties
      }
      addProperty(property);
    } else {
      removeProperty(id);
    }
  };
  return (
    <Card className="group overflow-hidden border-border hover:shadow-large transition-all duration-300 relative">
      <div className="absolute top-4 right-4 z-10">
        <div 
          className="bg-background/90 backdrop-blur-sm rounded-md p-2 shadow-soft"
          onClick={(e) => e.preventDefault()}
        >
          <Checkbox
            checked={isSelected(id)}
            onCheckedChange={handleCheckboxChange}
            disabled={!isSelected(id) && selectedProperties.length >= 4}
            aria-label="Select for comparison"
          />
        </div>
      </div>
      
      <Link to={`/property/${id}`}>
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-accent text-accent-foreground">{type}</Badge>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
              {title}
            </h3>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-center gap-4 text-muted-foreground text-sm">
              <div className="flex items-center gap-1">
                <Bed className="h-4 w-4" />
                <span>{beds}</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath className="h-4 w-4" />
                <span>{baths}</span>
              </div>
              <div className="flex items-center gap-1">
                <Maximize className="h-4 w-4" />
                <span>{sqft}</span>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <p className="text-2xl font-bold text-primary">{price}</p>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default PropertyCard;
