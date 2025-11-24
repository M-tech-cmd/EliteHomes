import { useNavigate } from "react-router-dom";
import { useComparison } from "@/context/ComparisonContext";
import { Button } from "./ui/button";
import { X, ArrowRight } from "lucide-react";
import { Card } from "./ui/card";

const ComparisonBar = () => {
  const { selectedProperties, removeProperty, clearAll } = useComparison();
  const navigate = useNavigate();

  if (selectedProperties.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-background/95 backdrop-blur-sm border-t border-border shadow-large animate-slide-in-right">
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4 flex-1 overflow-x-auto">
            <div className="flex items-center gap-2 shrink-0">
              <span className="font-semibold text-foreground">
                Compare Properties ({selectedProperties.length}/4)
              </span>
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-2">
              {selectedProperties.map((property) => (
                <Card key={property.id} className="relative shrink-0 w-32">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-20 object-cover rounded-t-lg"
                  />
                  <button
                    onClick={() => removeProperty(property.id)}
                    className="absolute top-1 right-1 p-1 bg-destructive text-destructive-foreground rounded-full hover:bg-destructive/90 transition-colors"
                    aria-label="Remove property"
                  >
                    <X className="h-3 w-3" />
                  </button>
                  <div className="p-2">
                    <p className="text-xs font-medium truncate">{property.title}</p>
                    <p className="text-xs text-primary font-semibold">{property.price}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={clearAll}
            >
              Clear All
            </Button>
            <Button
              size="sm"
              onClick={() => navigate("/compare")}
              disabled={selectedProperties.length < 2}
              className="gap-2"
            >
              Compare Now
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonBar;
