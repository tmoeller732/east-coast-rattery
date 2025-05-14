import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground" data-id="n9c7nu49q" data-path="src/pages/HomePage.tsx">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center" data-id="blszin519" data-path="src/pages/HomePage.tsx">
        <div
          className="absolute inset-0 bg-black opacity-60 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwc2NlbmljJTIwcGhvdG9ncmFwaCUyMHNob3djYXNpbmclMjBhJTIwc2VyZW5lJTIwbmF0dXJhbCUyMGxhbmRzY2FwZSUyMHdpdGglMjBhJTIwZm9jdXMlMjBvbiUyMHZpYnJhbnQlMjBjb2xvcnMlMjBhbmQlMjBiYWxhbmNlZCUyMGNvbXBvc2l0aW9uLnxlbnwwfHx8fDE3NDcxODg0NjB8MA&ixlib=rb-4.1.0&q=80&w=200$w=1920")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} data-id="4yk4651j9" data-path="src/pages/HomePage.tsx" />

        <div className="container mx-auto px-4 relative z-10" data-id="g5nrty6sc" data-path="src/pages/HomePage.tsx">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center">

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white" data-id="xmpu37nbw" data-path="src/pages/HomePage.tsx">
              East Coast Rattery
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200" data-id="vqbx2p5d9" data-path="src/pages/HomePage.tsx">
              ASF Breeders of Quality – Frozen Shipping Nationwide & Live Pickup in NJ
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4" data-id="sg07klibw" data-path="src/pages/HomePage.tsx">
              <Button
                className="bg-green-600 hover:bg-green-700 text-white border-green-700 px-8 py-6 text-lg animate-pulse"
                asChild>

                <Link to="/shop">Shop Frozen ASF</Link>
              </Button>
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white/10 px-8 py-6 text-lg"
                asChild>

                <Link to="/live-pickup">Local Live Pickup</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-black" data-id="6isg7ca0a" data-path="src/pages/HomePage.tsx">
        <div className="container mx-auto px-4" data-id="3rjmq9iqn" data-path="src/pages/HomePage.tsx">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-id="7enze635a" data-path="src/pages/HomePage.tsx">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-background/5 backdrop-blur-sm">

              <div className="mb-4 text-5xl text-green-500" data-id="4fi9zur4n" data-path="src/pages/HomePage.tsx">🐀</div>
              <h3 className="text-xl font-semibold mb-2" data-id="i29p1u4uk" data-path="src/pages/HomePage.tsx">Premium ASF Genetics</h3>
              <p className="text-gray-300" data-id="e2kigpo5h" data-path="src/pages/HomePage.tsx">Our African Soft Fur Rats come from carefully selected breeding stock for optimal health and size.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-background/5 backdrop-blur-sm">

              <div className="mb-4 text-5xl text-green-500" data-id="wd1qsauuc" data-path="src/pages/HomePage.tsx">🚚</div>
              <h3 className="text-xl font-semibold mb-2" data-id="ue0zz0q3b" data-path="src/pages/HomePage.tsx">Frozen Shipping</h3>
              <p className="text-gray-300" data-id="grojb0uty" data-path="src/pages/HomePage.tsx">We ship frozen ASF rats nationwide with proper insulation and dry ice to ensure quality upon arrival.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-background/5 backdrop-blur-sm">

              <div className="mb-4 text-5xl text-green-500" data-id="u0ue72sig" data-path="src/pages/HomePage.tsx">📍</div>
              <h3 className="text-xl font-semibold mb-2" data-id="zd86kyk5y" data-path="src/pages/HomePage.tsx">Local NJ Pickup</h3>
              <p className="text-gray-300" data-id="flkwj1qdk" data-path="src/pages/HomePage.tsx">Located in Bayville, NJ, we offer local pickup options for live ASF rats with scheduled appointments.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About ASF Section */}
      <section className="py-16" data-id="c5hwnkkn5" data-path="src/pages/HomePage.tsx">
        <div className="container mx-auto px-4" data-id="z6enp17k2" data-path="src/pages/HomePage.tsx">
          <div className="flex flex-col md:flex-row items-center gap-12" data-id="xqar8788p" data-path="src/pages/HomePage.tsx">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:w-1/2">

              <h2 className="text-3xl font-bold mb-6 text-green-500" data-id="z3cp9hetw" data-path="src/pages/HomePage.tsx">What are ASF Rats?</h2>
              <p className="text-gray-300 mb-4" data-id="rg0gz1qy0" data-path="src/pages/HomePage.tsx">
                African Soft Fur Rats (Mastomys natalensis) are not actually true rats but belong to the multimammate mouse family. 
                These small rodents are native to sub-Saharan Africa and have become popular both as pets and as feeder animals.
              </p>
              <p className="text-gray-300 mb-4" data-id="nf2hgk3bf" data-path="src/pages/HomePage.tsx">
                ASF rats are known for their soft fur, docile temperament, and high reproductive rate. They are smaller than Norway rats 
                but larger than typical mice, making them an ideal-sized feeder for many reptile species.
              </p>
              <p className="text-gray-300" data-id="hhoz9eyp0" data-path="src/pages/HomePage.tsx">
                At East Coast Rattery, we breed ASF rats with care, ensuring proper nutrition and housing to produce healthy animals 
                for both the pet and feeder markets.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:w-1/2">

              <div className="rounded-lg overflow-hidden" data-id="5n4kb0kfb" data-path="src/pages/HomePage.tsx">
                <img
                  src="https://images.unsplash.com/photo-1544808208-727498b3df07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwY2xvc2UtdXAlMjBwaG90b2dyYXBoJTIwb2YlMjBhbiUyMEFmcmljYW4lMjBTb2Z0JTIwRnVyJTIwUmF0JTJDJTIwc2hvd2Nhc2luZyUyMGl0cyUyMHNvZnQlMjBmdXIlMjBhbmQlMjBkaXN0aW5jdCUyMGZlYXR1cmVzLnxlbnwwfHx8fDE3NDcxODg0NTd8MA&ixlib=rb-4.1.0&q=80&w=200$w=800"
                  alt="African Soft Fur Rat"
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-300" data-id="0qvijq7qa" data-path="src/pages/HomePage.tsx" />

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-900 to-green-800" data-id="vxe89jbnp" data-path="src/pages/HomePage.tsx">
        <div className="container mx-auto px-4 text-center" data-id="wtfec6dzy" data-path="src/pages/HomePage.tsx">
          <h2 className="text-3xl font-bold mb-8 text-white" data-id="2fzu1og2p" data-path="src/pages/HomePage.tsx">Ready to Order?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto" data-id="7be3rlshu" data-path="src/pages/HomePage.tsx">
            Whether you need frozen feeders shipped nationwide or live animals for local pickup,
            we've got you covered with premium quality ASF rats.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4" data-id="lev9qxub7" data-path="src/pages/HomePage.tsx">
            <Button
              className="bg-white text-green-900 hover:bg-gray-100 px-8 py-6 text-lg"
              asChild>

              <Link to="/shop">Browse Products</Link>
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white/10 px-8 py-6 text-lg"
              asChild>

              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16" data-id="sdqjs5j49" data-path="src/pages/HomePage.tsx">
        <div className="container mx-auto px-4" data-id="81bpzwfz4" data-path="src/pages/HomePage.tsx">
          <h2 className="text-3xl font-bold mb-12 text-center text-green-500" data-id="oo5tq4vm0" data-path="src/pages/HomePage.tsx">Customer Testimonials</h2>
          
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <Card className="border-0 bg-background/20 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <p className="text-lg italic mb-6 text-gray-300" data-id="y1t09uk0x" data-path="src/pages/HomePage.tsx">
                      "I've been buying frozen ASF rats from East Coast Rattery for over a year now. The quality is consistently excellent, and my ball pythons love them. Shipping is always fast and properly packed with dry ice."
                    </p>
                    <div className="font-semibold text-green-400" data-id="32fd2jgca" data-path="src/pages/HomePage.tsx">Jake M.</div>
                    <div className="text-sm text-gray-400" data-id="n53vtvtk3" data-path="src/pages/HomePage.tsx">Reptile Breeder, California</div>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="border-0 bg-background/20 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <p className="text-lg italic mb-6 text-gray-300" data-id="t8aqo8lrm" data-path="src/pages/HomePage.tsx">
                      "As a local NJ resident, I've picked up live ASF rats several times. The rats are always healthy, and the pickup process is smooth and easy. Can't recommend them enough!"
                    </p>
                    <div className="font-semibold text-green-400" data-id="p0rl8vmea" data-path="src/pages/HomePage.tsx">Sarah T.</div>
                    <div className="text-sm text-gray-400" data-id="2ew5atqsd" data-path="src/pages/HomePage.tsx">Pet Owner, New Jersey</div>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="border-0 bg-background/20 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <p className="text-lg italic mb-6 text-gray-300" data-id="3akt9t6p4" data-path="src/pages/HomePage.tsx">
                      "The customer service at East Coast Rattery is outstanding. They answered all my questions about starting my own ASF colony and provided great advice for a beginner."
                    </p>
                    <div className="font-semibold text-green-400" data-id="2bpush8xy" data-path="src/pages/HomePage.tsx">Michael R.</div>
                    <div className="text-sm text-gray-400" data-id="z6ihwb4dk" data-path="src/pages/HomePage.tsx">Hobbyist, Florida</div>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="text-green-500 border-green-500 hover:bg-green-500/10" />
            <CarouselNext className="text-green-500 border-green-500 hover:bg-green-500/10" />
          </Carousel>
        </div>
      </section>
    </div>);

};

export default HomePage;