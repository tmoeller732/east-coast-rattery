import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "motion/react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background pb-16" data-id="dj78rd2fw" data-path="src/pages/ContactPage.tsx">
      {/* Page Header */}
      <div className="bg-black py-16" data-id="xhxeberyf" data-path="src/pages/ContactPage.tsx">
        <div className="container mx-auto px-4" data-id="jup33f9k3" data-path="src/pages/ContactPage.tsx">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-green-500" data-id="1kpns2zee" data-path="src/pages/ContactPage.tsx">Contact Us</h1>
          <p className="text-center text-gray-300 max-w-3xl mx-auto" data-id="o6mjnkw6c" data-path="src/pages/ContactPage.tsx">
            Have questions about our ASF rats or need assistance with your order?
            We're here to help!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12" data-id="6sdbik371" data-path="src/pages/ContactPage.tsx">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" data-id="lxzyyxh8y" data-path="src/pages/ContactPage.tsx">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}>

            <Card className="bg-background/40 backdrop-blur-sm border border-border overflow-hidden">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-6 text-green-500" data-id="jpohs9qhz" data-path="src/pages/ContactPage.tsx">Send us a Message</h2>
                
                <form className="space-y-6" data-id="mwq1nt8g1" data-path="src/pages/ContactPage.tsx">
                  <div className="space-y-2" data-id="fsfzs9dow" data-path="src/pages/ContactPage.tsx">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Your name" className="bg-background/60" />
                  </div>
                  
                  <div className="space-y-2" data-id="tr2jzkmq1" data-path="src/pages/ContactPage.tsx">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="bg-background/60" />
                  </div>
                  
                  <div className="space-y-2" data-id="4odr8vre4" data-path="src/pages/ContactPage.tsx">
                    <Label htmlFor="order_number">Order Number (Optional)</Label>
                    <Input id="order_number" placeholder="If related to an existing order" className="bg-background/60" />
                  </div>
                  
                  <div className="space-y-2" data-id="d4yna2qad" data-path="src/pages/ContactPage.tsx">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What is your message about?" className="bg-background/60" />
                  </div>
                  
                  <div className="space-y-2" data-id="1ojfl3ykz" data-path="src/pages/ContactPage.tsx">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      className="min-h-[150px] bg-background/60" />

                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white">

                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8">

            {/* Contact Info */}
            <Card className="bg-background/40 backdrop-blur-sm border border-border overflow-hidden">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-6 text-green-500" data-id="11g0eby47" data-path="src/pages/ContactPage.tsx">Contact Information</h2>
                
                <div className="space-y-6" data-id="utexmqo65" data-path="src/pages/ContactPage.tsx">
                  <div className="flex items-start" data-id="jd0rx8mkq" data-path="src/pages/ContactPage.tsx">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center mr-4" data-id="qzc20h3sr" data-path="src/pages/ContactPage.tsx">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500" data-id="0vzfznhgg" data-path="src/pages/ContactPage.tsx"><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" data-id="12p240sfp" data-path="src/pages/ContactPage.tsx"></path></svg>
                    </div>
                    <div data-id="dxwbbciud" data-path="src/pages/ContactPage.tsx">
                      <h3 className="text-lg font-medium text-green-400 mb-1" data-id="vdzma8e5z" data-path="src/pages/ContactPage.tsx">Phone</h3>
                      <p className="text-gray-300" data-id="hvq5i7gi8" data-path="src/pages/ContactPage.tsx">(732) 555-1234</p>
                      <p className="text-sm text-muted-foreground mt-1" data-id="7fynls3xx" data-path="src/pages/ContactPage.tsx">Mon-Fri, 9am-6pm EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start" data-id="7jiks4rjc" data-path="src/pages/ContactPage.tsx">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center mr-4" data-id="le03gd3sw" data-path="src/pages/ContactPage.tsx">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500" data-id="zfzqthb0z" data-path="src/pages/ContactPage.tsx"><rect width="20" height="16" x="2" y="4" rx="2" data-id="chiyqesva" data-path="src/pages/ContactPage.tsx" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" data-id="7qa5344tq" data-path="src/pages/ContactPage.tsx" /></svg>
                    </div>
                    <div data-id="n71hyndbc" data-path="src/pages/ContactPage.tsx">
                      <h3 className="text-lg font-medium text-green-400 mb-1" data-id="3c3c1p8v1" data-path="src/pages/ContactPage.tsx">Email</h3>
                      <p className="text-gray-300" data-id="2w88a9g3s" data-path="src/pages/ContactPage.tsx">info@eastcoastrattery.com</p>
                      <p className="text-sm text-muted-foreground mt-1" data-id="pemqaaq2r" data-path="src/pages/ContactPage.tsx">We respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start" data-id="f30mpb86n" data-path="src/pages/ContactPage.tsx">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center mr-4" data-id="61ctb1lf7" data-path="src/pages/ContactPage.tsx">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500" data-id="4h52m8zo6" data-path="src/pages/ContactPage.tsx"><circle cx="12" cy="12" r="10" data-id="tsrvhgkhj" data-path="src/pages/ContactPage.tsx" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" data-id="yt475v0cv" data-path="src/pages/ContactPage.tsx" /><path d="M2 12h20" data-id="4spyocti5" data-path="src/pages/ContactPage.tsx" /></svg>
                    </div>
                    <div data-id="bsexa7qq2" data-path="src/pages/ContactPage.tsx">
                      <h3 className="text-lg font-medium text-green-400 mb-1" data-id="p26zwzh2v" data-path="src/pages/ContactPage.tsx">Website</h3>
                      <p className="text-gray-300" data-id="ubc9hi215" data-path="src/pages/ContactPage.tsx">www.eastcoastrattery.com</p>
                      <p className="text-sm text-muted-foreground mt-1" data-id="p2nqet4m9" data-path="src/pages/ContactPage.tsx">Shop online anytime</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start" data-id="xwfmuy7ly" data-path="src/pages/ContactPage.tsx">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center mr-4" data-id="wnuxiqif8" data-path="src/pages/ContactPage.tsx">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500" data-id="8rtra77z6" data-path="src/pages/ContactPage.tsx"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" data-id="8zadcbfut" data-path="src/pages/ContactPage.tsx" /><circle cx="12" cy="10" r="3" data-id="7xmbqslmm" data-path="src/pages/ContactPage.tsx" /></svg>
                    </div>
                    <div data-id="wzyiuws3o" data-path="src/pages/ContactPage.tsx">
                      <h3 className="text-lg font-medium text-green-400 mb-1" data-id="ru5bhht1f" data-path="src/pages/ContactPage.tsx">Location</h3>
                      <p className="text-gray-300" data-id="w3hkyvyfk" data-path="src/pages/ContactPage.tsx">Bayville, NJ 08721</p>
                      <p className="text-sm text-muted-foreground mt-1" data-id="fh2b4zvy8" data-path="src/pages/ContactPage.tsx">Local pickup by appointment only</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Map */}
            <Card className="bg-background/40 backdrop-blur-sm border border-border overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video w-full" data-id="npzzqql2y" data-path="src/pages/ContactPage.tsx">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24510.03085430431!2d-74.16770841067412!3d39.91351385148431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c19a16c8c39d95%3A0x5a47a2b5a70f4af!2sBayville%2C%20NJ%2008721!5e0!3m2!1sen!2sus!4v1661530555781!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="East Coast Rattery Location Map" data-id="x341x30cy" data-path="src/pages/ContactPage.tsx">
                  </iframe>
                </div>
              </CardContent>
            </Card>
            
            {/* Business Hours */}
            <Card className="bg-background/40 backdrop-blur-sm border border-border overflow-hidden">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-green-500" data-id="hkckz0di0" data-path="src/pages/ContactPage.tsx">Business Hours</h2>
                
                <div className="space-y-2" data-id="hqegjvyf3" data-path="src/pages/ContactPage.tsx">
                  <div className="flex justify-between" data-id="st3pq2mj2" data-path="src/pages/ContactPage.tsx">
                    <span className="text-gray-300" data-id="hpgn5pkr4" data-path="src/pages/ContactPage.tsx">Monday</span>
                    <span className="text-green-400 font-medium" data-id="urph1vejh" data-path="src/pages/ContactPage.tsx">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between" data-id="5lrrmvsu4" data-path="src/pages/ContactPage.tsx">
                    <span className="text-gray-300" data-id="bwrlvfqk6" data-path="src/pages/ContactPage.tsx">Tuesday</span>
                    <span className="text-green-400 font-medium" data-id="c1m0nhxb6" data-path="src/pages/ContactPage.tsx">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between" data-id="d985nejxu" data-path="src/pages/ContactPage.tsx">
                    <span className="text-gray-300" data-id="ysdp8ju6w" data-path="src/pages/ContactPage.tsx">Wednesday</span>
                    <span className="text-green-400 font-medium" data-id="i05zviuh3" data-path="src/pages/ContactPage.tsx">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between" data-id="sox7zyr4j" data-path="src/pages/ContactPage.tsx">
                    <span className="text-gray-300" data-id="kzlau82ta" data-path="src/pages/ContactPage.tsx">Thursday</span>
                    <span className="text-green-400 font-medium" data-id="u9pikhpgi" data-path="src/pages/ContactPage.tsx">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between" data-id="iktnzs3y5" data-path="src/pages/ContactPage.tsx">
                    <span className="text-gray-300" data-id="xu8woarh7" data-path="src/pages/ContactPage.tsx">Friday</span>
                    <span className="text-green-400 font-medium" data-id="49sphro0l" data-path="src/pages/ContactPage.tsx">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between" data-id="11069ufgc" data-path="src/pages/ContactPage.tsx">
                    <span className="text-gray-300" data-id="end4yakaf" data-path="src/pages/ContactPage.tsx">Saturday</span>
                    <span className="text-green-400 font-medium" data-id="wr7jznm2d" data-path="src/pages/ContactPage.tsx">By Appointment</span>
                  </div>
                  <div className="flex justify-between" data-id="aasnxa0o6" data-path="src/pages/ContactPage.tsx">
                    <span className="text-gray-300" data-id="r5jedn7sa" data-path="src/pages/ContactPage.tsx">Sunday</span>
                    <span className="text-muted-foreground" data-id="y4qj6bi5a" data-path="src/pages/ContactPage.tsx">Closed</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-border" data-id="vkat4lpat" data-path="src/pages/ContactPage.tsx">
                  <p className="text-sm text-muted-foreground" data-id="vcnhxyhqf" data-path="src/pages/ContactPage.tsx">
                    Note: Live pickups are by appointment only and must be scheduled at least 24 hours in advance.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>);

};

export default ContactPage;