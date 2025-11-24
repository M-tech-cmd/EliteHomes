import { useNavigate } from "react-router-dom";
import { useComparison } from "@/context/ComparisonContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Bed, Bath, Maximize, MapPin, Check } from "lucide-react";

const Compare = () => {
  const navigate = useNavigate();
  const { selectedProperties, clearAll } = useComparison();

  if (selectedProperties.length < 2) {
    return (
      <div className="min-h-screen py-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Not Enough Properties Selected
          </h1>
          <p className="text-muted-foreground mb-8">
            Please select at least 2 properties to compare
          </p>
          <Button onClick={() => navigate("/properties")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Browse Properties
          </Button>
        </div>
      </div>
    );
  }

  const comparisonRows = [
    { label: "Image", key: "image", type: "image" },
    { label: "Title", key: "title", type: "text" },
    { label: "Type", key: "type", type: "badge" },
    { label: "Price", key: "price", type: "price" },
    { label: "Location", key: "location", type: "text" },
    { label: "Bedrooms", key: "beds", type: "number" },
    { label: "Bathrooms", key: "baths", type: "number" },
    { label: "Square Feet", key: "sqft", type: "text" },
    { label: "Description", key: "description", type: "description" },
    { label: "Features", key: "features", type: "features" },
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
          <div>
            <Button
              variant="outline"
              onClick={() => navigate("/properties")}
              className="mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Properties
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Compare Properties
            </h1>
            <p className="text-lg text-muted-foreground mt-2">
              Comparing {selectedProperties.length} properties side by side
            </p>
          </div>
          <Button variant="destructive" onClick={clearAll}>
            Clear All
          </Button>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <Card className="min-w-max">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 text-left font-semibold text-foreground w-48">
                    Features
                  </th>
                  {selectedProperties.map((property) => (
                    <th key={property.id} className="p-4 text-center w-64">
                      <div className="font-normal text-sm text-muted-foreground">
                        Property {selectedProperties.indexOf(property) + 1}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.key} className="border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="p-4 font-medium text-foreground">
                      {row.label}
                    </td>
                    {selectedProperties.map((property) => (
                      <td key={property.id} className="p-4 text-center">
                        {row.type === "image" && (
                          <img
                            src={property.image}
                            alt={property.title}
                            className="w-full h-48 object-cover rounded-lg"
                          />
                        )}
                        {row.type === "text" && (
                          <span className="text-foreground">
                            {property[row.key as keyof typeof property]}
                          </span>
                        )}
                        {row.type === "badge" && (
                          <Badge className="bg-accent text-accent-foreground">
                            {property.type}
                          </Badge>
                        )}
                        {row.type === "price" && (
                          <span className="text-2xl font-bold text-primary">
                            {property.price}
                          </span>
                        )}
                        {row.type === "number" && (
                          <div className="flex items-center justify-center gap-2">
                            {row.key === "beds" && <Bed className="h-4 w-4 text-muted-foreground" />}
                            {row.key === "baths" && <Bath className="h-4 w-4 text-muted-foreground" />}
                            <span className="text-foreground font-semibold">
                              {property[row.key as keyof typeof property]}
                            </span>
                          </div>
                        )}
                        {row.type === "description" && (
                          <p className="text-sm text-muted-foreground text-left max-w-xs">
                            {property.description}
                          </p>
                        )}
                        {row.type === "features" && (
                          <ul className="text-sm text-left space-y-2">
                            {property.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-accent shrink-0" />
                                <span className="text-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          {selectedProperties.map((property) => (
            <Button
              key={property.id}
              onClick={() => navigate(`/property/${property.id}`)}
            >
              View {property.title}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Compare;
