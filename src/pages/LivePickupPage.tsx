import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue } from
"@/components/ui/select";

const LivePickupPage = () => {
  return (
    <div className="min-h-screen bg-background pb-16">
      {/* Page Header */}
      <div className="bg-black py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-green-500">Live ASF Rat Pickup</h1>
          <p className="text-center text-gray-300 max-w-3xl mx-auto">
            Schedule a pickup for live African Soft Fur Rats in Bayville, New Jersey.
            All live animals are available for local pickup only.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column - Info */}
          <div>
            <div className="bg-background/40 backdrop-blur-sm rounded-lg p-6 mb-8 border border-border">
              <h2 className="text-2xl font-semibold mb-4 text-green-500">Pickup Location</h2>
              <div className="aspect-video w-full rounded-lg overflow-hidden mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24510.03085430431!2d-74.16770841067412!3d39.91351385148431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c19a16c8c39d95%3A0x5a47a2b5a70f4af!2sBayville%2C%20NJ%2008721!5e0!3m2!1sen!2sus!4v1661530555781!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="East Coast Rattery Location">
                </iframe>
              </div>
              <div className="text-gray-300">
                <p className="mb-2"><strong className="text-green-400">Address:</strong> Bayville, NJ 08721</p>
                <p className="mb-2"><strong className="text-green-400">Hours:</strong> By appointment only</p>
                <p><strong className="text-green-400">Note:</strong> Exact address will be provided after scheduling confirmation</p>
              </div>
            </div>

            <div className="bg-background/40 backdrop-blur-sm rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold mb-4 text-green-500">Pickup Guidelines</h2>
              
              <div className="space-y-6 text-gray-300">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500/20 text-green-400">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-green-400 mb-1">Schedule in Advance</h3>
                    <p>All pickups must be scheduled at least 24 hours in advance using the form on this page.</p>
                  </div>
                </div>

                <Separator className="bg-border" />

                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500/20 text-green-400">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-green-400 mb-1">Bring a Suitable Container</h3>
                    <p>Please bring a proper container for transporting your live ASF rats. Small plastic carriers or ventilated containers work best.</p>
                  </div>
                </div>

                <Separator className="bg-border" />

                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500/20 text-green-400">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-green-400 mb-1">Arrive on Time</h3>
                    <p>Please respect the scheduled pickup time. If you need to reschedule, contact us at least 2 hours before your appointment.</p>
                  </div>
                </div>

                <Separator className="bg-border" />

                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500/20 text-green-400">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-green-400 mb-1">Payment Methods</h3>
                    <p>We accept cash, credit/debit cards, and mobile payment apps (Venmo, PayPal, Cash App) for in-person pickups.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <Card className="bg-background/40 backdrop-blur-sm border border-border">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-6 text-green-500">Schedule a Pickup</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Your name" className="bg-background/60" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="your@email.com" className="bg-background/60" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="(555) 555-5555" className="bg-background/60" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Pickup Date</Label>
                      <Input id="date" type="date" className="bg-background/60" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="time">Preferred Pickup Time</Label>
                      <Select>
                        <SelectTrigger className="bg-background/60">
                          <SelectValue placeholder="Select a time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10am">10:00 AM</SelectItem>
                          <SelectItem value="12pm">12:00 PM</SelectItem>
                          <SelectItem value="2pm">2:00 PM</SelectItem>
                          <SelectItem value="4pm">4:00 PM</SelectItem>
                          <SelectItem value="6pm">6:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="order_details">What Would You Like to Pick Up?</Label>
                      <Textarea
                        id="order_details"
                        placeholder="Please specify which ASF rats you'd like (size, quantity, etc.)"
                        className="min-h-[100px] bg-background/60" />

                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="notes">Additional Notes</Label>
                      <Textarea
                        id="notes"
                        placeholder="Any special requirements or questions?"
                        className="min-h-[100px] bg-background/60" />

                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700 text-white mt-4">

                      Submit Pickup Request
                    </Button>
                    
                    <p className="text-sm text-muted-foreground text-center">
                      We'll contact you within 24 hours to confirm your pickup details.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>);

};

export default LivePickupPage;