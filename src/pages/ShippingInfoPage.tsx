import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const ShippingInfoPage = () => {
  // List of states we ship to
  const shippingStates = [
  "Alabama", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "Florida", "Georgia", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts",
  "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska",
  "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York",
  "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
  "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah",
  "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];


  return (
    <div className="min-h-screen bg-background pb-16">
      {/* Page Header */}
      <div className="bg-black py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-green-500">Shipping Information</h1>
          <p className="text-center text-gray-300 max-w-3xl mx-auto">
            Details about our frozen ASF rat shipping process, coverage areas, and what to expect.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-24">
              <Card className="bg-background/40 backdrop-blur-sm border border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-green-500">Quick Links</h3>
                  <nav className="space-y-2">
                    <a href="#shipping-process" className="block py-2 px-3 rounded-md hover:bg-green-500/10 hover:text-green-400 transition-colors">
                      Shipping Process
                    </a>
                    <a href="#packaging" className="block py-2 px-3 rounded-md hover:bg-green-500/10 hover:text-green-400 transition-colors">
                      Packaging & Dry Ice
                    </a>
                    <a href="#delivery-timeframes" className="block py-2 px-3 rounded-md hover:bg-green-500/10 hover:text-green-400 transition-colors">
                      Delivery Timeframes
                    </a>
                    <a href="#coverage-area" className="block py-2 px-3 rounded-md hover:bg-green-500/10 hover:text-green-400 transition-colors">
                      Coverage Area
                    </a>
                    <a href="#shipping-faq" className="block py-2 px-3 rounded-md hover:bg-green-500/10 hover:text-green-400 transition-colors">
                      Shipping FAQ
                    </a>
                  </nav>
                </CardContent>
              </Card>

              <Card className="bg-background/40 backdrop-blur-sm border border-border overflow-hidden">
                <div className="relative h-40">
                  <img
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                    alt="ASF rat"
                    className="w-full h-full object-cover" />

                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold">Ready to Order?</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-300 mb-4">
                    Browse our selection of quality frozen ASF rats with nationwide shipping.
                  </p>
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    asChild>

                    <Link to="/shop">Shop Now</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-12">

              {/* Shipping Process */}
              <section id="shipping-process" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold mb-6 text-green-500 border-b border-border pb-2">Shipping Process</h2>
                <div className="space-y-6 text-gray-300">
                  <p>
                    At East Coast Rattery, we take great care to ensure your frozen ASF rats arrive in perfect condition.
                    Here's how our shipping process works:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-background/20 p-5 rounded-lg border border-border">
                      <div className="text-green-400 text-4xl mb-3">1</div>
                      <h3 className="font-medium text-green-400 mb-2">Order Processing</h3>
                      <p className="text-sm">Orders placed before 12pm EST Monday-Thursday ship same day. Later orders ship next business day.</p>
                    </div>
                    
                    <div className="bg-background/20 p-5 rounded-lg border border-border">
                      <div className="text-green-400 text-4xl mb-3">2</div>
                      <h3 className="font-medium text-green-400 mb-2">Careful Packaging</h3>
                      <p className="text-sm">We package your rats with dry ice in insulated containers to maintain freezing temperatures.</p>
                    </div>
                    
                    <div className="bg-background/20 p-5 rounded-lg border border-border">
                      <div className="text-green-400 text-4xl mb-3">3</div>
                      <h3 className="font-medium text-green-400 mb-2">Fast Shipping</h3>
                      <p className="text-sm">We ship via FedEx overnight or 2-day shipping to ensure your order arrives quickly and still frozen.</p>
                    </div>
                  </div>

                  <Alert className="bg-green-900/20 border-green-600/30">
                    <AlertTitle className="text-green-400">Tracking Information</AlertTitle>
                    <AlertDescription className="text-gray-300">
                      You'll receive tracking information via email once your order ships. You can also check your order status in your account.
                    </AlertDescription>
                  </Alert>
                </div>
              </section>

              {/* Packaging */}
              <section id="packaging" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold mb-6 text-green-500 border-b border-border pb-2">Packaging & Dry Ice</h2>
                <div className="space-y-6 text-gray-300">
                  <p>
                    Proper packaging is crucial for ensuring your frozen ASF rats arrive in optimal condition. 
                    Here's how we package your order:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium text-green-400 mb-3">Insulated Containers</h3>
                      <p className="mb-3">
                        We use high-quality styrofoam containers inside corrugated boxes. This double-layer approach
                        provides excellent insulation to maintain freezing temperatures during transit.
                      </p>
                      <p>
                        The thickness of our styrofoam containers is specially selected to keep your rats
                        frozen for the duration of shipping, even in warm weather conditions.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-green-400 mb-3">Dry Ice Packaging</h3>
                      <p className="mb-3">
                        Each order includes an appropriate amount of dry ice (solid CO₂) that keeps
                        your rats at a temperature well below freezing. The amount of dry ice varies based on:
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Order size and weight</li>
                        <li>Shipping distance</li>
                        <li>Expected transit time</li>
                        <li>Current weather conditions</li>
                      </ul>
                    </div>
                  </div>

                  <Alert className="bg-amber-900/20 border-amber-600/30">
                    <AlertTitle className="text-amber-400">Dry Ice Safety</AlertTitle>
                    <AlertDescription className="text-gray-300">
                      When receiving packages with dry ice, handle with care and wear gloves. Allow any remaining dry ice
                      to sublimate in a well-ventilated area. Never touch dry ice directly or place in sealed containers.
                    </AlertDescription>
                  </Alert>
                </div>
              </section>

              {/* Delivery Timeframes */}
              <section id="delivery-timeframes" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold mb-6 text-green-500 border-b border-border pb-2">Delivery Timeframes</h2>
                <div className="space-y-6 text-gray-300">
                  <p>
                    We offer multiple shipping options to ensure your frozen ASF rats arrive in optimal condition:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-background/20 border border-border">
                      <h3 className="text-lg font-medium text-green-400 mb-2">FedEx Overnight</h3>
                      <p>
                        Our recommended option for all orders. Guarantees delivery by the next business day, ensuring minimal
                        transit time and the best condition upon arrival. Available to all 48 continental states.
                      </p>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-background/20 border border-border">
                      <h3 className="text-lg font-medium text-green-400 mb-2">FedEx 2-Day</h3>
                      <p>
                        A more economical option for shorter distances. Our special packaging ensures rats remain frozen
                        for up to 48 hours in transit. Available for select states within a reasonable shipping radius.
                      </p>
                    </div>
                  </div>

                  <Alert className="bg-background/20 border-border">
                    <AlertTitle className="text-foreground">Order Cut-Off Times</AlertTitle>
                    <AlertDescription className="text-gray-300">
                      <ul className="list-disc pl-5 space-y-1 mt-2">
                        <li>Orders placed before 12pm EST Monday-Thursday will ship the same day.</li>
                        <li>Orders placed after 12pm EST will ship the next business day.</li>
                        <li>Orders placed Friday-Sunday will ship the following Monday.</li>
                      </ul>
                    </AlertDescription>
                  </Alert>
                </div>
              </section>

              {/* Coverage Area */}
              <section id="coverage-area" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold mb-6 text-green-500 border-b border-border pb-2">Coverage Area</h2>
                <div className="space-y-6 text-gray-300">
                  <p>
                    We ship frozen ASF rats to all 48 continental United States. We currently do not ship to:
                  </p>
                  <ul className="list-disc pl-5">
                    <li>Hawaii</li>
                    <li>Alaska</li>
                    <li>International destinations</li>
                  </ul>
                  
                  <h3 className="text-lg font-medium text-green-400 mt-6 mb-3">States We Ship To:</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                    {shippingStates.map((state) =>
                    <div key={state} className="bg-background/20 p-2 rounded border border-border text-sm text-center">
                        {state}
                      </div>
                    )}
                  </div>
                </div>
              </section>

              {/* Shipping FAQ */}
              <section id="shipping-faq" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold mb-6 text-green-500 border-b border-border pb-2">Shipping FAQ</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-green-400 hover:text-green-500">
                      What if my package is delayed?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      Our packaging is designed to keep rats frozen for up to 72 hours, which provides a buffer for most shipping delays. 
                      If there's a significant delay reported by FedEx, contact us immediately and we'll work with you on a solution.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-green-400 hover:text-green-500">
                      Do you ship during summer months?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      Yes, we ship year-round. During summer months, we add extra dry ice to compensate for warmer temperatures.
                      For locations experiencing extreme heat waves, we may recommend overnight shipping only.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-green-400 hover:text-green-500">
                      How should I store my ASF rats upon arrival?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      Upon arrival, transfer your ASF rats to a freezer as soon as possible. For best quality, we recommend using them within 
                      6 months, although properly stored rats can last up to a year in a well-maintained freezer.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-green-400 hover:text-green-500">
                      Can I ship to a PO Box?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      No, we cannot ship to PO Boxes. We require a physical address for delivery as we use FedEx 
                      for all our shipments.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-green-400 hover:text-green-500">
                      Do you offer free shipping?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      We occasionally offer free shipping promotions for large orders. Standard shipping rates are calculated based on 
                      your location and the weight of your order. Shipping frozen products requires specialized packaging and expedited 
                      delivery, which is reflected in our shipping costs.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </section>
            </motion.div>
          </div>
        </div>
      </div>
    </div>);

};

export default ShippingInfoPage;