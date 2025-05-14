import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "motion/react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background pb-16">
      {/* Page Header */}
      <div className="bg-black py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-green-500">Contact Us</h1>
          <p className="text-center text-gray-300 max-w-3xl mx-auto">
            Have questions about our ASF rats or need assistance with your order?
            We're here to help!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}>

            <Card className="bg-background/40 backdrop-blur-sm border border-border overflow-hidden">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-6 text-green-500">Send us a Message</h2>
                
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Your name" className="bg-background/60" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="bg-background/60" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="order_number">Order Number (Optional)</Label>
                    <Input id="order_number" placeholder="If related to an existing order" className="bg-background/60" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What is your message about?" className="bg-background/60" />
                  </div>
                  
                  <div className="space-y-2">
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
                <h2 className="text-2xl font-semibold mb-6 text-green-500">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path></svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-green-400 mb-1">Phone</h3>
                      <p className="text-gray-300">(732) 555-1234</p>
                      <p className="text-sm text-muted-foreground mt-1">Mon-Fri, 9am-6pm EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-green-400 mb-1">Email</h3>
                      <p className="text-gray-300">info@eastcoastrattery.com</p>
                      <p className="text-sm text-muted-foreground mt-1">We respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-green-400 mb-1">Website</h3>
                      <p className="text-gray-300">www.eastcoastrattery.com</p>
                      <p className="text-sm text-muted-foreground mt-1">Shop online anytime</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-green-400 mb-1">Location</h3>
                      <p className="text-gray-300">Bayville, NJ 08721</p>
                      <p className="text-sm text-muted-foreground mt-1">Local pickup by appointment only</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Map */}
            <Card className="bg-background/40 backdrop-blur-sm border border-border overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24510.03085430431!2d-74.16770841067412!3d39.91351385148431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c19a16c8c39d95%3A0x5a47a2b5a70f4af!2sBayville%2C%20NJ%2008721!5e0!3m2!1sen!2sus!4v1661530555781!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="East Coast Rattery Location Map">
                  </iframe>
                </div>
              </CardContent>
            </Card>
            
            {/* Business Hours */}
            <Card className="bg-background/40 backdrop-blur-sm border border-border overflow-hidden">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-green-500">Business Hours</h2>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Monday</span>
                    <span className="text-green-400 font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Tuesday</span>
                    <span className="text-green-400 font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Wednesday</span>
                    <span className="text-green-400 font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Thursday</span>
                    <span className="text-green-400 font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Friday</span>
                    <span className="text-green-400 font-medium">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Saturday</span>
                    <span className="text-green-400 font-medium">By Appointment</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
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