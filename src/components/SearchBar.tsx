import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

const SearchBar = () => {
  const [location, setLocation] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", location);
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-4xl">
      <div className="flex flex-col md:flex-row gap-4 p-6 bg-card rounded-2xl shadow-elegant border border-border">
        <div className="flex-1">
          <Input
            type="text"
            placeholder="Enter location, city, or neighborhood..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="h-12 bg-background border-border"
          />
        </div>
        
        <Button 
          type="submit" 
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground h-12 px-8"
        >
          <Search className="h-5 w-5 mr-2" />
          Search Properties
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;
