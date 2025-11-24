import { useState } from "react";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

type PropertyType = "All" | "House" | "Apartment" | "Villa" | "Penthouse";

const Properties = () => {
  const [selectedType, setSelectedType] = useState<PropertyType>("All");

  const filteredProperties = selectedType === "All" 
    ? properties 
    : properties.filter((property) => property.type === selectedType);

  const filterButtons: PropertyType[] = ["All", "House", "Apartment", "Villa", "Penthouse"];

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {selectedType === "All" ? "All Properties" : `${selectedType} Properties`}
          </h1>
          <p className="text-lg text-muted-foreground">
            {selectedType === "All" 
              ? "Browse through our extensive collection of premium properties"
              : `Showing ${filteredProperties.length} ${selectedType.toLowerCase()}${filteredProperties.length !== 1 ? 's' : ''}`
            }
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-4 items-center">
          <Button variant="outline" className="gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </Button>
          <div className="flex flex-wrap gap-2">
            {filterButtons.map((type) => (
              <Button
                key={type}
                variant={selectedType === type ? "secondary" : "outline"}
                size="sm"
                onClick={() => setSelectedType(type)}
              >
                {type}
              </Button>
            ))}
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
