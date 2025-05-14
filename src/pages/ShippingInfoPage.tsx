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
    <div className="min-h-screen bg-background pb-16" data-id="jr1rvm0t3" data-path="src/pages/ShippingInfoPage.tsx">
      {/* Page Header */}
      <div className="bg-black py-16" data-id="3tp53k58c" data-path="src/pages/ShippingInfoPage.tsx">
        <div className="container mx-auto px-4" data-id="tljgduod8" data-path="src/pages/ShippingInfoPage.tsx">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-green-500" data-id="jxnbnr585" data-path="src/pages/ShippingInfoPage.tsx">Shipping Information</h1>
          <p className="text-center text-gray-300 max-w-3xl mx-auto" data-id="huefub98d" data-path="src/pages/ShippingInfoPage.tsx">
            Details about our frozen ASF rat shipping process, coverage areas, and what to expect.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12" data-id="1u6h4vrzf" data-path="src/pages/ShippingInfoPage.tsx">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" data-id="8e2f734hc" data-path="src/pages/ShippingInfoPage.tsx">
          
          {/* Sidebar */}
          <div className="lg:col-span-1" data-id="ca4jy16yw" data-path="src/pages/ShippingInfoPage.tsx">
            <div className="space-y-6 sticky top-24" data-id="rldxldohl" data-path="src/pages/ShippingInfoPage.tsx">
              <Card className="bg-background/40 backdrop-blur-sm border border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-green-500" data-id="17bf1fgkp" data-path="src/pages/ShippingInfoPage.tsx">Quick Links</h3>
                  <nav className="space-y-2" data-id="dai1r46wt" data-path="src/pages/ShippingInfoPage.tsx">
                    <a href="#shipping-process" className="block py-2 px-3 rounded-md hover:bg-green-500/10 hover:text-green-400 transition-colors" data-id="2f6twiqh0" data-path="src/pages/ShippingInfoPage.tsx">
                      Shipping Process
                    </a>
                    <a href="#packaging" className="block py-2 px-3 rounded-md hover:bg-green-500/10 hover:text-green-400 transition-colors" data-id="4ser3o76l" data-path="src/pages/ShippingInfoPage.tsx">
                      Packaging & Dry Ice
                    </a>
                    <a href="#delivery-timeframes" className="block py-2 px-3 rounded-md hover:bg-green-500/10 hover:text-green-400 transition-colors" data-id="wopn06gxz" data-path="src/pages/ShippingInfoPage.tsx">
                      Delivery Timeframes
                    </a>
                    <a href="#coverage-area" className="block py-2 px-3 rounded-md hover:bg-green-500/10 hover:text-green-400 transition-colors" data-id="o3l51w9sg" data-path="src/pages/ShippingInfoPage.tsx">
                      Coverage Area
                    </a>
                    <a href="#shipping-faq" className="block py-2 px-3 rounded-md hover:bg-green-500/10 hover:text-green-400 transition-colors" data-id="h8tmbhvd8" data-path="src/pages/ShippingInfoPage.tsx">
                      Shipping FAQ
                    </a>
                  </nav>
                </CardContent>
              </Card>

              <Card className="bg-background/40 backdrop-blur-sm border border-border overflow-hidden">
                <div className="relative h-40" data-id="bwfm5orox" data-path="src/pages/ShippingInfoPage.tsx">
                  <img
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                    alt="ASF rat"
                    className="w-full h-full object-cover" data-id="lyrmmjwas" data-path="src/pages/ShippingInfoPage.tsx" />

                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center" data-id="tsyr06r8o" data-path="src/pages/ShippingInfoPage.tsx">
                    <h3 className="text-white text-xl font-bold" data-id="u9gleyigd" data-path="src/pages/ShippingInfoPage.tsx">Ready to Order?</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-300 mb-4" data-id="0ydonm6t5" data-path="src/pages/ShippingInfoPage.tsx">
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
          <div className="lg:col-span-2" data-id="vf0efxgok" data-path="src/pages/ShippingInfoPage.tsx">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-12">

              {/* Shipping Process */}
              <section id="shipping-process" className="scroll-mt-24" data-id="hapws2f0c" data-path="src/pages/ShippingInfoPage.tsx">
                <h2 className="text-2xl font-semibold mb-6 text-green-500 border-b border-border pb-2" data-id="5jixvy7rg" data-path="src/pages/ShippingInfoPage.tsx">Shipping Process</h2>
                <div className="space-y-6 text-gray-300" data-id="44jf6b9mb" data-path="src/pages/ShippingInfoPage.tsx">
                  <p data-id="25j7z3z90" data-path="src/pages/ShippingInfoPage.tsx">
                    At East Coast Rattery, we take great care to ensure your frozen ASF rats arrive in perfect condition.
                    Here's how our shipping process works:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6" data-id="d9t6ot6bp" data-path="src/pages/ShippingInfoPage.tsx">
                    <div className="bg-background/20 p-5 rounded-lg border border-border" data-id="jr7z6onn2" data-path="src/pages/ShippingInfoPage.tsx">
                      <div className="text-green-400 text-4xl mb-3" data-id="sncq6fozv" data-path="src/pages/ShippingInfoPage.tsx">1</div>
                      <h3 className="font-medium text-green-400 mb-2" data-id="jc3g2azxv" data-path="src/pages/ShippingInfoPage.tsx">Order Processing</h3>
                      <p className="text-sm" data-id="b0o518fp0" data-path="src/pages/ShippingInfoPage.tsx">Orders placed before 12pm EST Monday-Thursday ship same day. Later orders ship next business day.</p>
                    </div>
                    
                    <div className="bg-background/20 p-5 rounded-lg border border-border" data-id="sw96ktz8i" data-path="src/pages/ShippingInfoPage.tsx">
                      <div className="text-green-400 text-4xl mb-3" data-id="ofap4oi6f" data-path="src/pages/ShippingInfoPage.tsx">2</div>
                      <h3 className="font-medium text-green-400 mb-2" data-id="2gncva82w" data-path="src/pages/ShippingInfoPage.tsx">Careful Packaging</h3>
                      <p className="text-sm" data-id="pzj5hww6r" data-path="src/pages/ShippingInfoPage.tsx">We package your rats with dry ice in insulated containers to maintain freezing temperatures.</p>
                    </div>
                    
                    <div className="bg-background/20 p-5 rounded-lg border border-border" data-id="rhcefou4p" data-path="src/pages/ShippingInfoPage.tsx">
                      <div className="text-green-400 text-4xl mb-3" data-id="0uwe2ckst" data-path="src/pages/ShippingInfoPage.tsx">3</div>
                      <h3 className="font-medium text-green-400 mb-2" data-id="2fy5x8mhb" data-path="src/pages/ShippingInfoPage.tsx">Fast Shipping</h3>
                      <p className="text-sm" data-id="z8lkxm2cl" data-path="src/pages/ShippingInfoPage.tsx">We ship via FedEx overnight or 2-day shipping to ensure your order arrives quickly and still frozen.</p>
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
              <section id="packaging" className="scroll-mt-24" data-id="l853v5y3z" data-path="src/pages/ShippingInfoPage.tsx">
                <h2 className="text-2xl font-semibold mb-6 text-green-500 border-b border-border pb-2" data-id="ztms09pnt" data-path="src/pages/ShippingInfoPage.tsx">Packaging & Dry Ice</h2>
                <div className="space-y-6 text-gray-300" data-id="j1xxuk70h" data-path="src/pages/ShippingInfoPage.tsx">
                  <p data-id="tuwgy7mrf" data-path="src/pages/ShippingInfoPage.tsx">
                    Proper packaging is crucial for ensuring your frozen ASF rats arrive in optimal condition. 
                    Here's how we package your order:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-id="77gty2k9n" data-path="src/pages/ShippingInfoPage.tsx">
                    <div data-id="u4ogy1n5e" data-path="src/pages/ShippingInfoPage.tsx">
                      <h3 className="text-lg font-medium text-green-400 mb-3" data-id="f3vsiqseu" data-path="src/pages/ShippingInfoPage.tsx">Insulated Containers</h3>
                      <p className="mb-3" data-id="xusgsux1n" data-path="src/pages/ShippingInfoPage.tsx">
                        We use high-quality styrofoam containers inside corrugated boxes. This double-layer approach
                        provides excellent insulation to maintain freezing temperatures during transit.
                      </p>
                      <p data-id="zxyhoyyd9" data-path="src/pages/ShippingInfoPage.tsx">
                        The thickness of our styrofoam containers is specially selected to keep your rats
                        frozen for the duration of shipping, even in warm weather conditions.
                      </p>
                    </div>
                    
                    <div data-id="4gq1y3tsf" data-path="src/pages/ShippingInfoPage.tsx">
                      <h3 className="text-lg font-medium text-green-400 mb-3" data-id="x8u5nt01d" data-path="src/pages/ShippingInfoPage.tsx">Dry Ice Packaging</h3>
                      <p className="mb-3" data-id="ilwg3uvap" data-path="src/pages/ShippingInfoPage.tsx">
                        Each order includes an appropriate amount of dry ice (solid CO₂) that keeps
                        your rats at a temperature well below freezing. The amount of dry ice varies based on:
                      </p>
                      <ul className="list-disc pl-5 space-y-1" data-id="i3tzl1yfe" data-path="src/pages/ShippingInfoPage.tsx">
                        <li data-id="dkxlrktmy" data-path="src/pages/ShippingInfoPage.tsx">Order size and weight</li>
                        <li data-id="8v6bblmk3" data-path="src/pages/ShippingInfoPage.tsx">Shipping distance</li>
                        <li data-id="br9qikiu1" data-path="src/pages/ShippingInfoPage.tsx">Expected transit time</li>
                        <li data-id="uqnf5xm2c" data-path="src/pages/ShippingInfoPage.tsx">Current weather conditions</li>
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
              <section id="delivery-timeframes" className="scroll-mt-24" data-id="vi8jtuqhy" data-path="src/pages/ShippingInfoPage.tsx">
                <h2 className="text-2xl font-semibold mb-6 text-green-500 border-b border-border pb-2" data-id="8o60pjast" data-path="src/pages/ShippingInfoPage.tsx">Delivery Timeframes</h2>
                <div className="space-y-6 text-gray-300" data-id="ac34ltpoy" data-path="src/pages/ShippingInfoPage.tsx">
                  <p data-id="jwdxraog5" data-path="src/pages/ShippingInfoPage.tsx">
                    We offer multiple shipping options to ensure your frozen ASF rats arrive in optimal condition:
                  </p>
                  
                  <div className="space-y-4" data-id="jgpr47jym" data-path="src/pages/ShippingInfoPage.tsx">
                    <div className="p-4 rounded-lg bg-background/20 border border-border" data-id="bmdber56t" data-path="src/pages/ShippingInfoPage.tsx">
                      <h3 className="text-lg font-medium text-green-400 mb-2" data-id="63ia91ljo" data-path="src/pages/ShippingInfoPage.tsx">FedEx Overnight</h3>
                      <p data-id="sw67zomqv" data-path="src/pages/ShippingInfoPage.tsx">
                        Our recommended option for all orders. Guarantees delivery by the next business day, ensuring minimal
                        transit time and the best condition upon arrival. Available to all 48 continental states.
                      </p>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-background/20 border border-border" data-id="4wa2ts6v7" data-path="src/pages/ShippingInfoPage.tsx">
                      <h3 className="text-lg font-medium text-green-400 mb-2" data-id="x4rfhwjrx" data-path="src/pages/ShippingInfoPage.tsx">FedEx 2-Day</h3>
                      <p data-id="p41254cze" data-path="src/pages/ShippingInfoPage.tsx">
                        A more economical option for shorter distances. Our special packaging ensures rats remain frozen
                        for up to 48 hours in transit. Available for select states within a reasonable shipping radius.
                      </p>
                    </div>
                  </div>

                  <Alert className="bg-background/20 border-border">
                    <AlertTitle className="text-foreground">Order Cut-Off Times</AlertTitle>
                    <AlertDescription className="text-gray-300">
                      <ul className="list-disc pl-5 space-y-1 mt-2" data-id="0rufdh8fd" data-path="src/pages/ShippingInfoPage.tsx">
                        <li data-id="6dllqencp" data-path="src/pages/ShippingInfoPage.tsx">Orders placed before 12pm EST Monday-Thursday will ship the same day.</li>
                        <li data-id="zidv0musl" data-path="src/pages/ShippingInfoPage.tsx">Orders placed after 12pm EST will ship the next business day.</li>
                        <li data-id="s18n93d41" data-path="src/pages/ShippingInfoPage.tsx">Orders placed Friday-Sunday will ship the following Monday.</li>
                      </ul>
                    </AlertDescription>
                  </Alert>
                </div>
              </section>

              {/* Coverage Area */}
              <section id="coverage-area" className="scroll-mt-24" data-id="wtuh3ps09" data-path="src/pages/ShippingInfoPage.tsx">
                <h2 className="text-2xl font-semibold mb-6 text-green-500 border-b border-border pb-2" data-id="jw1mshq40" data-path="src/pages/ShippingInfoPage.tsx">Coverage Area</h2>
                <div className="space-y-6 text-gray-300" data-id="p79fje7pp" data-path="src/pages/ShippingInfoPage.tsx">
                  <p data-id="7vu4hwgn0" data-path="src/pages/ShippingInfoPage.tsx">
                    We ship frozen ASF rats to all 48 continental United States. We currently do not ship to:
                  </p>
                  <ul className="list-disc pl-5" data-id="qy7imf55a" data-path="src/pages/ShippingInfoPage.tsx">
                    <li data-id="d7r0dz76f" data-path="src/pages/ShippingInfoPage.tsx">Hawaii</li>
                    <li data-id="5732f85ch" data-path="src/pages/ShippingInfoPage.tsx">Alaska</li>
                    <li data-id="blhfa5qjk" data-path="src/pages/ShippingInfoPage.tsx">International destinations</li>
                  </ul>
                  
                  <h3 className="text-lg font-medium text-green-400 mt-6 mb-3" data-id="j4xj89lzd" data-path="src/pages/ShippingInfoPage.tsx">States We Ship To:</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2" data-id="9n05clip8" data-path="src/pages/ShippingInfoPage.tsx">
                    {shippingStates.map((state) =>
                    <div key={state} className="bg-background/20 p-2 rounded border border-border text-sm text-center" data-id="hyy1lk9i4" data-path="src/pages/ShippingInfoPage.tsx">
                        {state}
                      </div>
                    )}
                  </div>
                </div>
              </section>

              {/* Shipping FAQ */}
              <section id="shipping-faq" className="scroll-mt-24" data-id="k8ywhvnww" data-path="src/pages/ShippingInfoPage.tsx">
                <h2 className="text-2xl font-semibold mb-6 text-green-500 border-b border-border pb-2" data-id="s5m1gwl4m" data-path="src/pages/ShippingInfoPage.tsx">Shipping FAQ</h2>
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