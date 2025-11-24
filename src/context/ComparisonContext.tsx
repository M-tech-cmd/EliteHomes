import { createContext, useContext, useState, ReactNode } from "react";
import { Property } from "@/data/properties";

interface ComparisonContextType {
  selectedProperties: Property[];
  addProperty: (property: Property) => void;
  removeProperty: (propertyId: string) => void;
  clearAll: () => void;
  isSelected: (propertyId: string) => boolean;
}

const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined);

export const useComparison = () => {
  const context = useContext(ComparisonContext);
  if (!context) {
    throw new Error("useComparison must be used within ComparisonProvider");
  }
  return context;
};

export const ComparisonProvider = ({ children }: { children: ReactNode }) => {
  const [selectedProperties, setSelectedProperties] = useState<Property[]>([]);

  const addProperty = (property: Property) => {
    if (selectedProperties.length < 4 && !isSelected(property.id)) {
      setSelectedProperties([...selectedProperties, property]);
    }
  };

  const removeProperty = (propertyId: string) => {
    setSelectedProperties(selectedProperties.filter((p) => p.id !== propertyId));
  };

  const clearAll = () => {
    setSelectedProperties([]);
  };

  const isSelected = (propertyId: string) => {
    return selectedProperties.some((p) => p.id === propertyId);
  };

  return (
    <ComparisonContext.Provider
      value={{ selectedProperties, addProperty, removeProperty, clearAll, isSelected }}
    >
      {children}
    </ComparisonContext.Provider>
  );
};
