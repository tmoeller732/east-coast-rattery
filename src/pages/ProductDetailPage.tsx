import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ShoppingCart, Check, Star } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock product data - same as in ShopPage
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
    longDescription: "Our Small ASF Rats are perfect for feeding smaller snakes and lizards. These high-quality feeders are bred in our facility under optimal conditions to ensure maximum nutritional value. Each rat is approximately 5-10 grams in weight and flash-frozen at peak nutritional value to preserve freshness.",
    nutritionalInfo: "ASF rats provide an excellent source of protein, essential vitamins, and minerals for your reptile. They contain higher protein and lower fat content compared to traditional feeders.",
    storageInfo: "Keep frozen until ready to use. Thaw at room temperature for 1-2 hours before feeding. Do not refreeze after thawing.",
    reviews: [
      { id: 1, rating: 5, author: "John D.", text: "My ball python loves these! Great quality and always arrive frozen solid." },
      { id: 2, rating: 4, author: "Samantha M.", text: "Good size consistency and nice packaging. Will order again." }
    ],
    inStock: true,
    type: "frozen"
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
    longDescription: "Our Medium ASF Rats are perfect for growing reptiles requiring more substantial meals. These premium feeders are raised in a clean, controlled environment to ensure quality and nutrition. Each rat is approximately 10-20 grams in weight and quickly frozen to maintain nutritional integrity.",
    nutritionalInfo: "Medium ASF rats provide optimal nutrition for growing reptiles with higher protein content than standard feeders. Rich in vitamins and minerals essential for healthy reptile development.",
    storageInfo: "Store in your freezer until ready to use. Thaw at room temperature for 2-3 hours before feeding. Never microwave frozen feeders.",
    reviews: [
      { id: 1, rating: 5, author: "Sarah K.", text: "Perfect size for my juvenile boa. The quality is excellent." },
      { id: 2, rating: 5, author: "Mike R.", text: "These arrive well-packaged and in perfect condition. My snake loves them!" }
    ],
    inStock: true,
    type: "frozen"
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
    longDescription: "Our Large ASF Rats are ideal for larger reptiles with hearty appetites. Each rat is approximately 20-30 grams, providing substantial nutrition for adult snakes and monitors. Raised in our specialized facility and flash-frozen to lock in freshness and nutritional content.",
    nutritionalInfo: "These large ASF rats are an excellent source of protein, calcium, and essential nutrients. Their optimal fat-to-protein ratio supports healthy growth in adult reptiles.",
    storageInfo: "Keep frozen until ready to use. Thaw for 3-4 hours at room temperature before feeding. Do not use if packaging is damaged.",
    reviews: [
      { id: 1, rating: 4, author: "David L.", text: "Good size consistency. My adult ball python is very happy with these." },
      { id: 2, rating: 5, author: "Janet W.", text: "Excellent quality, well-packaged, and my snake loves them!" }
    ],
    inStock: true,
    type: "frozen"
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
    longDescription: "XL ASF Rats are our largest size, perfect for mature boas, pythons, and large monitor lizards. These premium feeders weigh approximately 30-40 grams each and provide substantial nutrition for larger reptiles. Raised in optimal conditions and flash-frozen to maintain nutritional integrity.",
    nutritionalInfo: "Our XL ASF rats provide the high protein and nutrient density needed by larger reptiles. They offer superior nutrition compared to typical feeder rats, with the ideal balance of nutrients.",
    storageInfo: "Store frozen at 0°F or below. Thaw completely before feeding, approximately 4-5 hours at room temperature. Never microwave or quick-thaw in hot water.",
    reviews: [
      { id: 1, rating: 5, author: "Robert M.", text: "Perfect size for my adult boa. Consistent quality every time." },
      { id: 2, rating: 4, author: "Angie P.", text: "Good quality and size. Well packaged with dry ice." }
    ],
    inStock: true,
    type: "frozen"
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
    longDescription: "Our Live Small ASF Rats are perfect for starting your own breeding colony or as unique, easy-to-care-for pets. Each rat is approximately 5-10 grams and bred in our specialized facility under optimal conditions. These rats are known for their docile temperament and make excellent pets for responsible owners.",
    careInfo: "ASF rats thrive in clean enclosures with proper bedding, fresh water, and quality rodent food. They enjoy social interaction and should be kept in pairs or small groups. Provide hiding spots and enrichment toys for best health and happiness.",
    pickupInfo: "Available for local pickup in Bayville, NJ only. We do not ship live animals. Schedule your pickup using our online scheduler.",
    reviews: [
      { id: 1, rating: 5, author: "Thomas K.", text: "Healthy, active rats. Great starter animals for my colony." },
      { id: 2, rating: 4, author: "Laura S.", text: "Nice temperament and very active. Good communication for pickup." }
    ],
    inStock: true,
    type: "live"
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
    longDescription: "Our Live Medium ASF Rats are young adults weighing approximately 10-20 grams. These rats are ideal for established colonies or as pets for experienced owners. Raised in clean conditions with proper nutrition, these rats are healthy, active, and well-socialized.",
    careInfo: "Medium ASF rats require at least 2 square feet of space per pair, with plenty of hiding spots and climbing opportunities. Feed a diet of quality rodent blocks supplemented with fresh vegetables and occasional fruits. Clean enclosures weekly.",
    pickupInfo: "Available for local pickup in Bayville, NJ only. We do not ship live animals. Please arrive at your scheduled pickup time with appropriate transport containers.",
    reviews: [
      { id: 1, rating: 5, author: "William J.", text: "Healthy specimens with good temperament. Perfect additions to my colony." },
      { id: 2, rating: 5, author: "Michelle T.", text: "Very pleased with these rats. Active, healthy, and well-socialized." }
    ],
    inStock: true,
    type: "live"
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
    longDescription: "Our Live Large ASF Rats are fully mature adults weighing 20-35 grams, perfect for established breeding colonies. These rats have excellent genetics and come from our carefully maintained bloodlines. They're healthy, active, and ready to become productive members of your colony.",
    careInfo: "Adult ASF rats require spacious enclosures with multiple levels, nesting boxes, and enrichment activities. Feed a balanced diet of quality rodent food, fresh vegetables, and occasional protein treats. Keep water bottles clean and filled at all times.",
    pickupInfo: "Available for local pickup in Bayville, NJ only. We do not ship live animals. Bring appropriate carriers for transport with bedding and water sources for longer trips.",
    reviews: [
      { id: 1, rating: 4, author: "Gregory P.", text: "Healthy adults with good size. Already producing litters in my colony." },
      { id: 2, rating: 5, author: "Karen B.", text: "Excellent specimens. Very pleased with the health and temperament." }
    ],
    inStock: true,
    type: "live"
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
    longDescription: "Our ASF Rat Breeding Colonies provide everything you need to start producing your own feeders or pets. Each colony includes proven breeders in the optimal ratio for successful breeding. Our rats come from diverse genetic lines to ensure healthy offspring and productive colonies.",
    careInfo: "Breeding colonies require spacious enclosures (minimum 20 gallons for starter colonies), multiple hiding/nesting areas, and premium nutrition. Provide nesting material, climbing opportunities, and separate females before birthing. Feed a high-protein diet with fresh vegetables and occasional supplements.",
    pickupInfo: "Available for local pickup in Bayville, NJ only. We do not ship live animals. Colonies will be packaged separately by gender for transport. Please bring appropriate carriers.",
    reviews: [
      { id: 1, rating: 5, author: "Joseph R.", text: "Excellent starter colony. Healthy, well-socialized rats that started breeding within weeks." },
      { id: 2, rating: 5, author: "Stephanie L.", text: "Great genetic diversity and healthy animals. My colony is thriving!" }
    ],
    inStock: true,
    type: "live"
  }
];

// Combine all products for easier lookup
const allProducts = [...frozenProducts, ...liveProducts];

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<typeof allProducts[0] | null>(null);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  
  const { addItem } = useCart();
  const { toast } = useToast();

  useEffect(() => {
    // Find the product based on the ID from URL params
    const foundProduct = allProducts.find(p => p.id === Number(productId));
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedSize(foundProduct.sizes[0].id);
    }
  }, [productId]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="mb-8">The product you're looking for could not be found.</p>
        <Button asChild>
          <Link to="/shop">Return to Shop</Link>
        </Button>
      </div>
    );
  }

  const selectedSizeObj = product.sizes.find(size => size.id === selectedSize);
  const isLiveProduct = product.type === "live";

  return (
    <motion.div 
      className="container mx-auto px-4 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-6">
        <Button variant="ghost" asChild className="mb-4">
          <Link to="/shop" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Shop
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product Image */}
        <Card className="overflow-hidden border-0 shadow-lg">
          <div className="relative">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-[400px] object-cover" 
            />
            {isLiveProduct && (
              <Badge className="absolute top-4 right-4 bg-amber-600">
                Local Pickup Only
              </Badge>
            )}
          </div>
        </Card>

        {/* Product Info */}
        <Card className="shadow-md">
          <CardHeader>
            <div className="flex flex-col gap-2">
              <CardTitle className="text-2xl md:text-3xl">{product.name}</CardTitle>
              <p className="text-muted-foreground">Weight Range: {product.weightRange}</p>
              <div className="flex items-center gap-1 mt-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className={`h-5 w-5 ${star <= 4.5 ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">(Based on {product.reviews?.length || 0} reviews)</span>
              </div>
              <p className="text-2xl text-green-600 font-bold mt-2">${selectedSizeObj?.price.toFixed(2)}</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-medium mb-2">Size</h3>
              <RadioGroup
                value={selectedSize?.toString()}
                onValueChange={(value) => setSelectedSize(parseInt(value))}
                className="flex flex-wrap gap-2"
              >
                {product.sizes.map((size) => (
                  <div key={size.id} className="flex items-center space-x-2">
                    <RadioGroupItem 
                      value={size.id.toString()} 
                      id={`product-size-${size.id}`} 
                      className="peer sr-only" 
                    />
                    <Label 
                      htmlFor={`product-size-${size.id}`}
                      className="px-4 py-2 rounded-full border border-primary cursor-pointer text-sm peer-data-[state=checked]:bg-green-500 peer-data-[state=checked]:text-white peer-data-[state=checked]:border-green-600 hover:bg-green-500/10 transition-colors"
                    >
                      {size.name} - ${size.price.toFixed(2)}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <h3 className="font-medium mb-2">Description</h3>
              <p className="text-muted-foreground">{product.longDescription || product.description}</p>
            </div>

            {isLiveProduct && (
              <div className="bg-amber-600/20 border border-amber-600/50 rounded-lg p-4">
                <h3 className="font-medium text-amber-400 mb-2">Local Pickup Only</h3>
                <p className="text-sm text-muted-foreground">
                  Live ASF rats are available for local pickup in Bayville, NJ only. We do not ship live animals.
                  Please schedule your pickup in advance using our <Link to="/live-pickup" className="text-green-400 hover:underline">pickup scheduler</Link>.
                </p>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2 py-6"
              onClick={() => {
                if (!selectedSizeObj) return;
                setIsAdding(true);
                setTimeout(() => {
                  addItem({
                    id: `${product.id}-${selectedSize}`,
                    name: `${product.name} - ${selectedSizeObj.name}`,
                    price: selectedSizeObj.price,
                    image: product.image
                  });
                  toast({
                    title: "Added to cart",
                    description: `${product.name} - ${selectedSizeObj.name} has been added to your cart.`
                  });
                  setIsAdding(false);
                }, 500);
              }}
              disabled={isAdding}
            >
              {isAdding ? (
                <>
                  <Check className="h-5 w-5 animate-ping" />
                  Adding...
                </>
              ) : (
                <>
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Product Details Tabs */}
      <Card className="shadow-md mb-12">
        <CardContent className="pt-6">
          <Tabs defaultValue="details">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="info">{isLiveProduct ? "Care Information" : "Storage & Nutrition"}</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="p-4">
              <h3 className="text-xl font-medium mb-4">Product Details</h3>
              <p className="mb-4">{product.longDescription || product.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Weight Range</h4>
                  <p>{product.weightRange}</p>
                </div>
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Available Options</h4>
                  <ul className="list-disc list-inside">
                    {product.sizes.map(size => (
                      <li key={size.id}>{size.name} - ${size.price.toFixed(2)}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="info" className="p-4">
              {isLiveProduct ? (
                <>
                  <h3 className="text-xl font-medium mb-4">Care Information</h3>
                  <p className="mb-4">{product.careInfo}</p>
                  <div className="bg-amber-600/20 border border-amber-600/50 rounded-lg p-4 mt-4">
                    <h4 className="font-medium text-amber-400 mb-2">Pickup Information</h4>
                    <p>{product.pickupInfo}</p>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-xl font-medium mb-4">Storage & Nutrition</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Storage Information</h4>
                      <p>{product.storageInfo}</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Nutritional Information</h4>
                      <p>{product.nutritionalInfo}</p>
                    </div>
                  </div>
                </>
              )}
            </TabsContent>
            
            <TabsContent value="reviews" className="p-4">
              <h3 className="text-xl font-medium mb-4">Customer Reviews</h3>
              {product.reviews && product.reviews.length > 0 ? (
                <div className="space-y-4">
                  {product.reviews.map(review => (
                    <div key={review.id} className="border rounded-md p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{review.author}</span>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map(star => (
                            <Star 
                              key={star} 
                              className={`h-4 w-4 ${star <= review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground">{review.text}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No reviews yet for this product.</p>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Related Products */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allProducts
            .filter(p => p.id !== product.id && p.type === product.type)
            .slice(0, 4)
            .map(relatedProduct => (
              <Card key={relatedProduct.id} className="overflow-hidden hover:border-green-500 transition-all duration-300">
                <div className="relative">
                  <img 
                    src={relatedProduct.image} 
                    alt={relatedProduct.name} 
                    className="w-full h-48 object-cover"
                  />
                  {relatedProduct.type === "live" && (
                    <Badge className="absolute top-2 right-2 bg-amber-600">
                      Local Pickup Only
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <span>{relatedProduct.name}</span>
                    <span className="text-green-500">${relatedProduct.sizes[0].price.toFixed(2)}</span>
                  </CardTitle>
                </CardHeader>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link to={`/product/${relatedProduct.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetailPage;