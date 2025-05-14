import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";

// Mock product data
const frozenProducts = [
  {
    id: 1,
    name: "Small ASF Rats",
    weightRange: "5-10g",
    sizes: [
      { id: 1, name: "5-pack", price: 12.99 },
      { id: 2, name: "10-pack", price: 23.99 },
      { id: 3, name: "25-pack", price: 54.99 }
    ],
    image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Ideal for smaller snakes and lizards. Approximately 5-10 grams each.",
    inStock: true
  },
  {
    id: 2,
    name: "Medium ASF Rats",
    weightRange: "10-20g",
    sizes: [
      { id: 1, name: "5-pack", price: 15.99 },
      { id: 2, name: "10-pack", price: 28.99 },
      { id: 3, name: "25-pack", price: 64.99 }
    ],
    image: "https://images.unsplash.com/photo-1531685250784-7569952593d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwY2xvc2UtdXAlMjBwaG90b2dyYXBoJTIwb2YlMjBhJTIwbWVkaXVtLXNpemVkJTIwQWZyaWNhbiUyMFNvZnQlMjBGdXIlMjBSYXQlMkMlMjBzaG93Y2FzaW5nJTIwaXRzJTIwZGV0YWlsZWQlMjBmdXIlMjB0ZXh0dXJlJTIwYW5kJTIwbmF0dXJhbCUyMGhhYml0YXQufGVufDB8fHx8MTc0NzE4ODQ2Mnww&ixlib=rb-4.1.0&q=80&w=200$w=500",
    description: "Perfect mid-size feeders. Approximately 10-20 grams each.",
    inStock: true
  },
  {
    id: 3,
    name: "Large ASF Rats",
    weightRange: "20-30g",
    sizes: [
      { id: 1, name: "5-pack", price: 18.99 },
      { id: 2, name: "10-pack", price: 34.99 },
      { id: 3, name: "25-pack", price: 74.99 }
    ],
    image: "https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Larger size for growing reptiles. Approximately 20-30 grams each.",
    inStock: true
  },
  {
    id: 4,
    name: "XL ASF Rats",
    weightRange: "30-40g",
    sizes: [
      { id: 1, name: "5-pack", price: 21.99 },
      { id: 2, name: "10-pack", price: 39.99 },
      { id: 3, name: "25-pack", price: 89.99 }
    ],
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Our largest ASF rats for bigger reptiles. Approximately 30-40 grams each.",
    inStock: true
  }
];

const liveProducts = [
  {
    id: 5,
    name: "Live Small ASF Rats",
    weightRange: "5-10g",
    sizes: [
      { id: 1, name: "Single", price: 5.99 },
      { id: 2, name: "Pair", price: 10.99 },
      { id: 3, name: "Trio (1M/2F)", price: 15.99 }
    ],
    image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Young ASF rats suitable as pets or for starting a colony. Local pickup only.",
    inStock: true
  },
  {
    id: 6,
    name: "Live Medium ASF Rats",
    weightRange: "10-20g",
    sizes: [
      { id: 1, name: "Single", price: 6.99 },
      { id: 2, name: "Pair", price: 12.99 },
      { id: 3, name: "Trio (1M/2F)", price: 18.99 }
    ],
    image: "https://images.unsplash.com/photo-1531685250784-7569952593d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwY2xvc2UtdXAlMjBwaG90b2dyYXBoJTIwb2YlMjBhJTIwbWVkaXVtLXNpemVkJTIwQWZyaWNhbiUyMFNvZnQlMjBGdXIlMjBSYXQlMkMlMjBzaG93Y2FzaW5nJTIwaXRzJTIwZGV0YWlsZWQlMjBmdXIlMjB0ZXh0dXJlJTIwYW5kJTIwbmF0dXJhbCUyMGhhYml0YXQufGVufDB8fHx8MTc0NzE4ODQ2Mnww&ixlib=rb-4.1.0&q=80&w=200$w=500",
    description: "Growing ASF rats for pets or breeding. Local pickup only.",
    inStock: true
  },
  {
    id: 7,
    name: "Live Large ASF Rats",
    weightRange: "20-35g",
    sizes: [
      { id: 1, name: "Single", price: 7.99 },
      { id: 2, name: "Pair", price: 14.99 },
      { id: 3, name: "Trio (1M/2F)", price: 21.99 }
    ],
    image: "https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Adult ASF rats, ideal for breeding colonies. Local pickup only.",
    inStock: true
  },
  {
    id: 8,
    name: "ASF Rat Breeding Colony",
    weightRange: "Mixed",
    sizes: [
      { id: 1, name: "Starter (1M/3F)", price: 29.99 },
      { id: 2, name: "Standard (2M/6F)", price: 54.99 },
      { id: 3, name: "Large (3M/9F)", price: 74.99 }
    ],
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Complete breeding groups for starting your own colony. Local pickup only.",
    inStock: true
  }
];

type ProductProps = {
  product: typeof frozenProducts[0];
  localOnly?: boolean;
};

const ProductCard = ({ product, localOnly = false }: ProductProps) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0].id);
  
  const selectedSizeObj = product.sizes.find(size => size.id === selectedSize);
  
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:border-green-500 h-full flex flex-col bg-background/40 backdrop-blur-sm">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
        />
        {localOnly && (
          <Badge className="absolute top-2 right-2 bg-amber-600">
            Local Pickup Only
          </Badge>
        )}
      </div>
      <CardHeader>
        <CardTitle className="flex items-start justify-between">
          <span>{product.name}</span>
          <span className="text-green-500">${selectedSizeObj?.price.toFixed(2)}</span>
        </CardTitle>
        <div className="text-sm text-muted-foreground">Weight: {product.weightRange}</div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
        <RadioGroup 
          value={selectedSize.toString()} 
          onValueChange={(value) => setSelectedSize(parseInt(value))}
          className="flex flex-wrap gap-2 mb-4"
        >
          {product.sizes.map((size) => (
            <div key={size.id} className="flex items-center space-x-2">
              <RadioGroupItem 
                value={size.id.toString()} 
                id={`${product.id}-${size.id}`} 
                className="peer sr-only" 
              />
              <Label 
                htmlFor={`${product.id}-${size.id}`}
                className="px-3 py-1 rounded-full border border-primary cursor-pointer text-sm peer-data-[state=checked]:bg-green-500 peer-data-[state=checked]:text-white peer-data-[state=checked]:border-green-600 hover:bg-green-500/10 transition-colors"
              >
                {size.name}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
};

const ShopPage = () => {
  return (
    <div className="min-h-screen bg-background pb-16">
      {/* Page Header */}
      <div className="bg-black py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-green-500">Shop ASF Rats</h1>
          <p className="text-center text-gray-300 max-w-3xl mx-auto">
            Browse our selection of quality African Soft Fur Rats for pets and feeders. 
            We offer frozen rats shipped nationwide and live rats for local pickup in New Jersey.
          </p>
        </div>
      </div>

      {/* Product Tabs */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="frozen" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger 
              value="frozen" 
              className="text-lg data-[state=active]:bg-green-500 data-[state=active]:text-white"
            >
              Frozen ASF Rats (Ships Nationwide)
            </TabsTrigger>
            <TabsTrigger 
              value="live" 
              className="text-lg data-[state=active]:bg-green-500 data-[state=active]:text-white"
            >
              Live ASF Rats (Local Pickup Only)
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="frozen" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {frozenProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="live" className="mt-6">
            <div className="bg-amber-600/20 border border-amber-600/50 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-amber-400 mb-2">Local Pickup Information</h3>
              <p className="text-gray-300">
                Live ASF rats are available for local pickup in Bayville, NJ only. We do not ship live animals.
                Please schedule your pickup in advance using our <a href="/live-pickup" className="text-green-400 hover:underline">pickup scheduler</a>.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {liveProducts.map(product => (
                <ProductCard key={product.id} product={product} localOnly />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Shipping Notice */}
      <div className="container mx-auto px-4 mt-8">
        <div className="bg-green-900/30 border border-green-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-green-500 mb-4">Shipping Information</h3>
          <p className="text-gray-300 mb-3">
            We ship frozen ASF rats nationwide using FedEx overnight or 2-day shipping options. All orders are properly
            packed with dry ice to ensure your feeders arrive in perfect condition.
          </p>
          <p className="text-gray-300 mb-3">
            Orders placed before 12pm EST Monday-Thursday will ship the same day. Orders placed after 12pm EST or on Friday-Sunday
            will ship the following business day.
          </p>
          <Button variant="outline" className="mt-2 border-green-600 text-green-500 hover:bg-green-500/10">
            View Full Shipping Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;