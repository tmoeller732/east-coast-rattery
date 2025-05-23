import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-background pb-16">
      {/* Page Header */}
      <div className="bg-black py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-green-500">Frequently Asked Questions</h1>
          <p className="text-center text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about ASF rats, ordering, shipping, and more.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* FAQ Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Button variant="outline" className="border-green-600 text-green-500 hover:bg-green-500/10" asChild>
            <a href="#about-asf">About ASF Rats</a>
          </Button>
          <Button variant="outline" className="border-green-600 text-green-500 hover:bg-green-500/10" asChild>
            <a href="#care-feeding">Care & Feeding</a>
          </Button>
          <Button variant="outline" className="border-green-600 text-green-500 hover:bg-green-500/10" asChild>
            <a href="#ordering-shipping">Ordering & Shipping</a>
          </Button>
          <Button variant="outline" className="border-green-600 text-green-500 hover:bg-green-500/10" asChild>
            <a href="#live-pickup">Live Pickup</a>
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto">

          {/* About ASF Rats */}
          <section id="about-asf" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-6 text-green-500 border-b border-border pb-2">About ASF Rats</h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="asf-1">
                <AccordionTrigger className="text-green-400 hover:text-green-500">
                  What are ASF rats?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  <p className="mb-3">
                    ASF rats (African Soft Fur Rats), scientifically known as Mastomys natalensis, are not actually true rats but belong to the multimammate mouse family. They're native to sub-Saharan Africa.
                  </p>
                  <p>
                    They're smaller than Norway rats but larger than typical mice, making them an ideal-sized feeder for many reptile species. They're also kept as pets by some enthusiasts.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="asf-2">
                <AccordionTrigger className="text-green-400 hover:text-green-500">
                  Can ASF rats breed with regular rats?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  No, ASF rats (Mastomys natalensis) cannot breed with fancy rats or Norway rats (Rattus norvegicus). They belong to different genera and are not closely related enough to produce offspring together, despite their similar appearance.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="asf-3">
                <AccordionTrigger className="text-green-400 hover:text-green-500">
                  Are ASF rats good pets?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  <p className="mb-3">
                    ASF rats can make interesting pets for the right owner. They tend to be more skittish than fancy rats and often don't tame down as much. However, they're generally less odorous and some people find them to be fascinating pets.
                  </p>
                  <p>
                    If you're looking for a highly social, handleable pet rodent, a fancy rat might be a better choice. ASF rats are often best appreciated as colony animals in a well-designed habitat.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="asf-4">
                <AccordionTrigger className="text-green-400 hover:text-green-500">
                  How long do ASF rats live?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  In captivity with proper care, ASF rats typically live 1.5 to 2.5 years. Their lifespan is slightly shorter than that of fancy rats, which can live 2-3 years on average.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="asf-5">
                <AccordionTrigger className="text-green-400 hover:text-green-500">
                  How big do ASF rats get?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Adult ASF rats typically weigh between 20-80 grams, with males being larger than females. This puts them between mice and rats in size. Their body length is usually around 4-5 inches, plus a tail of similar length.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Care & Feeding */}
          <section id="care-feeding" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-6 text-green-500 border-b border-border pb-2">Care & Feeding</h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="care-1">
                <AccordionTrigger className="text-green-400 hover:text-green-500">
                  What should I feed live ASF rats?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  <p className="mb-3">
                    ASF rats thrive on a diet of quality rodent block/pellets as their staple diet. You can use commercial rat or mouse food as a base.
                  </p>
                  <p className="mb-3">
                    Supplement with small amounts of fresh vegetables, occasional fruits, and protein sources (like mealworms or small amounts of cooked egg). Always provide fresh water via a bottle with a sipper tube.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="care-2">
                <AccordionTrigger className="text-green-400 hover:text-green-500">
                  What's the best way to store frozen feeders?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  <p className="mb-3">
                    Store frozen ASF rats in your freezer at 0°F (-18°C) or below. Keep them in their original sealed packaging or transfer to airtight freezer bags to prevent freezer burn.
                  </p>
                  <p className="mb-3">
                    Properly stored frozen ASF rats can maintain good quality for 6-12 months. Label packages with the date of freezing to track age.
                  </p>
                  <p>
                    To thaw, place in the refrigerator overnight or thaw at room temperature for a few hours. Never microwave or use hot water to speed up thawing as this can degrade nutritional quality.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="care-3">
                <AccordionTrigger className="text-green-400 hover:text-green-500">
                  How should I house ASF rats?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  <p className="mb-3">
                    ASF rats need secure housing as they're excellent escape artists. Use aquariums with secure mesh lids, or specially designed small animal cages with small bar spacing (under 1/4 inch).
                  </p>
                  <p className="mb-3">
                    Provide bedding made of paper-based products, hiding places, climbing opportunities, and enrichment toys. Avoid cedar or pine shavings as the aromatic oils can cause respiratory issues.
                  </p>
                  <p>
                    For breeding colonies, provide additional nesting material and multiple hiding places to reduce stress.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="care-4">
                <AccordionTrigger className="text-green-400 hover:text-green-500">
                  How do I breed ASF rats?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  <p className="mb-3">
                    ASF rats breed readily in captivity. They reach sexual maturity at around 8-10 weeks of age. The typical breeding group consists of one male with 2-4 females.
                  </p>
                  <p className="mb-3">
                    Females have a short gestation period of about 21-23 days and can produce large litters of 6-20 pups. They can also become pregnant immediately after giving birth (post-partum estrus).
                  </p>
                  <p>
                    Ensure proper nutrition for breeding colonies, with additional protein sources for pregnant and nursing females. Separate males if aggression occurs, and monitor group dynamics regularly.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Ordering & Shipping */}
          <section id="ordering-shipping" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-6 text-green-500 border-b border-border pb-2">Ordering & Shipping</h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="order-1">
                <AccordionTrigger className="text-green-400 hover:text-green-500">
                  How do you ship frozen ASF rats?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  <p className="mb-3">
                    We ship frozen ASF rats in insulated containers with sufficient dry ice to keep them frozen during transit. Each package is carefully prepared to maintain freezing temperatures for 48-72 hours.
                  </p>
                  <p>
                    We use FedEx overnight or 2-day shipping options, depending on the destination and your preference. All shipments include tracking information so you can monitor your order's progress.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="order-2">
                <AccordionTrigger className="text-green-400 hover:text-green-500">
                  What are your shipping days?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  <p className="mb-3">
                    We ship Monday through Thursday. Orders placed before 12pm EST on these days will ship the same day. Orders placed after 12pm EST will ship the next business day.
                  </p>
                  <p>
                    We don't ship on Friday, Saturday, or Sunday to avoid packages sitting in shipping facilities over the weekend.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="order-3">
                <AccordionTrigger className="text-green-400 hover:text-green-500">
                  Do you ship to all states?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  <p className="mb-3">
                    We ship to all 48 continental United States. We currently do not ship to Hawaii or Alaska due to the extended transit time and shipping regulations.
                  </p>
                  <p>
                    We also do not ship internationally at this time. For customers outside the continental US, we recommend finding a local supplier.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="order-4">
                <AccordionTrigger className="text-green-400 hover:text-green-500">
                  What payment methods do you accept?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  <p className="mb-3">
                    For online orders, we accept all major credit cards, PayPal, and Apple Pay.
                  </p>
                  <p>
                    For local pickups, we accept cash, credit/debit cards, and mobile payment apps like Venmo, PayPal, and Cash App.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="order-5">
                <AccordionTrigger className="text-green-400 hover:text-green-500">
                  What if my order arrives thawed?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  <p className="mb-3">
                    In the rare event that your order arrives thawed, please take photos of the package and contents immediately upon opening, and contact us right away.
                  </p>
                  <p>
                    We'll work with you to resolve the issue promptly, which may include a replacement shipment or refund depending on the circumstances.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Live Pickup */}
          <section id="live-pickup" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-6 text-green-500 border-b border-border pb-2">Live Pickup</h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="pickup-1">
                <AccordionTrigger className="text-green-400 hover:text-green-500">
                  How do I schedule a live pickup?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  <p className="mb-3">
                    You can schedule a live pickup by using our online scheduler on the <Link to="/live-pickup" className="text-green-400 hover:underline">Live Pickup page</Link>. Select your preferred date and time, and we'll confirm your appointment via email or phone.
                  </p>
                  <p>
                    All live pickups must be scheduled at least 24 hours in advance to ensure we have your order ready.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="pickup-2">
                <AccordionTrigger className="text-green-400 hover:text-green-500">
                  Where is your pickup location?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  <p className="mb-3">
                    Our pickup location is in Bayville, New Jersey. The exact address will be provided after your pickup is scheduled and confirmed.
                  </p>
                  <p>
                    We're conveniently located with easy access from the Garden State Parkway and other major routes in Ocean County.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="pickup-3">
                <AccordionTrigger className="text-green-400 hover:text-green-500">
                  What should I bring for pickup?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  <p className="mb-3">
                    Please bring a suitable container for transporting live animals. A small plastic carrier with ventilation or a secure box with air holes works well. 
                  </p>
                  <p className="mb-3">
                    During hot or cold weather, bring appropriate insulation to protect the animals during transport (cooler or insulated box).
                  </p>
                  <p>
                    Also bring your ID for verification and your preferred payment method if you haven't prepaid online.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="pickup-4">
                <AccordionTrigger className="text-green-400 hover:text-green-500">
                  Can I pick up frozen rats in person?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  <p className="mb-3">
                    Yes, you can pick up frozen rats in person as well. This is a good option for local customers who prefer not to pay for shipping.
                  </p>
                  <p>
                    When scheduling your pickup, simply specify that you want frozen rather than live rats. Bring a cooler or insulated bag to transport your frozen rats home.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Contact CTA */}
          <div className="bg-green-900/30 border border-green-700 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-green-500 mb-4">Still have questions?</h3>
            <p className="text-gray-300 mb-6">
              If you couldn't find the answer you were looking for, please feel free to contact us directly.
              We're happy to help!
            </p>
            <Button className="bg-green-600 hover:bg-green-700 text-white" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>);

};

export default FAQPage;