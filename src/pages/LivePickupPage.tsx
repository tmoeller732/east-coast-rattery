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
    <div className="min-h-screen bg-background pb-16" data-id="8j5lh3583" data-path="src/pages/LivePickupPage.tsx">
      {/* Page Header */}
      <div className="bg-black py-16" data-id="dsmooiveh" data-path="src/pages/LivePickupPage.tsx">
        <div className="container mx-auto px-4" data-id="ugx8wq4m0" data-path="src/pages/LivePickupPage.tsx">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-green-500" data-id="e8pmmc5yb" data-path="src/pages/LivePickupPage.tsx">Live ASF Rat Pickup</h1>
          <p className="text-center text-gray-300 max-w-3xl mx-auto" data-id="y1hil9xey" data-path="src/pages/LivePickupPage.tsx">
            Schedule a pickup for live African Soft Fur Rats in Bayville, New Jersey.
            All live animals are available for local pickup only.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12" data-id="mx650m7jc" data-path="src/pages/LivePickupPage.tsx">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" data-id="3r7tb42n5" data-path="src/pages/LivePickupPage.tsx">
          
          {/* Left Column - Info */}
          <div data-id="eymavnzyp" data-path="src/pages/LivePickupPage.tsx">
            <div className="bg-background/40 backdrop-blur-sm rounded-lg p-6 mb-8 border border-border" data-id="kk0av9ps8" data-path="src/pages/LivePickupPage.tsx">
              <h2 className="text-2xl font-semibold mb-4 text-green-500" data-id="oj4f5icam" data-path="src/pages/LivePickupPage.tsx">Pickup Location</h2>
              <div className="aspect-video w-full rounded-lg overflow-hidden mb-6" data-id="l5zmyepsv" data-path="src/pages/LivePickupPage.tsx">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24510.03085430431!2d-74.16770841067412!3d39.91351385148431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c19a16c8c39d95%3A0x5a47a2b5a70f4af!2sBayville%2C%20NJ%2008721!5e0!3m2!1sen!2sus!4v1661530555781!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="East Coast Rattery Location" data-id="xrlt1iy5r" data-path="src/pages/LivePickupPage.tsx">
                </iframe>
              </div>
              <div className="text-gray-300" data-id="0om826kp4" data-path="src/pages/LivePickupPage.tsx">
                <p className="mb-2" data-id="xb3ad4m8y" data-path="src/pages/LivePickupPage.tsx"><strong className="text-green-400" data-id="pbokaxu4x" data-path="src/pages/LivePickupPage.tsx">Address:</strong> Bayville, NJ 08721</p>
                <p className="mb-2" data-id="24cp9xd9j" data-path="src/pages/LivePickupPage.tsx"><strong className="text-green-400" data-id="yl3jno4uo" data-path="src/pages/LivePickupPage.tsx">Hours:</strong> By appointment only</p>
                <p data-id="l82mytw27" data-path="src/pages/LivePickupPage.tsx"><strong className="text-green-400" data-id="ejv1heso7" data-path="src/pages/LivePickupPage.tsx">Note:</strong> Exact address will be provided after scheduling confirmation</p>
              </div>
            </div>

            <div className="bg-background/40 backdrop-blur-sm rounded-lg p-6 border border-border" data-id="xpmnmbkjx" data-path="src/pages/LivePickupPage.tsx">
              <h2 className="text-2xl font-semibold mb-4 text-green-500" data-id="dmppo7d3a" data-path="src/pages/LivePickupPage.tsx">Pickup Guidelines</h2>
              
              <div className="space-y-6 text-gray-300" data-id="i3rgb8rdg" data-path="src/pages/LivePickupPage.tsx">
                <div className="flex" data-id="z8uv592vv" data-path="src/pages/LivePickupPage.tsx">
                  <div className="flex-shrink-0 mr-4" data-id="6hht66a07" data-path="src/pages/LivePickupPage.tsx">
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500/20 text-green-400" data-id="y1eefk6nb" data-path="src/pages/LivePickupPage.tsx">1</span>
                  </div>
                  <div data-id="q887oo281" data-path="src/pages/LivePickupPage.tsx">
                    <h3 className="text-lg font-medium text-green-400 mb-1" data-id="edg9ertb3" data-path="src/pages/LivePickupPage.tsx">Schedule in Advance</h3>
                    <p data-id="n47ydijsi" data-path="src/pages/LivePickupPage.tsx">All pickups must be scheduled at least 24 hours in advance using the form on this page.</p>
                  </div>
                </div>

                <Separator className="bg-border" />

                <div className="flex" data-id="2mzzmk8yo" data-path="src/pages/LivePickupPage.tsx">
                  <div className="flex-shrink-0 mr-4" data-id="vd85wlevx" data-path="src/pages/LivePickupPage.tsx">
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500/20 text-green-400" data-id="3izwlo526" data-path="src/pages/LivePickupPage.tsx">2</span>
                  </div>
                  <div data-id="f7rtfei13" data-path="src/pages/LivePickupPage.tsx">
                    <h3 className="text-lg font-medium text-green-400 mb-1" data-id="3dfiz5yog" data-path="src/pages/LivePickupPage.tsx">Bring a Suitable Container</h3>
                    <p data-id="lag0bh8uj" data-path="src/pages/LivePickupPage.tsx">Please bring a proper container for transporting your live ASF rats. Small plastic carriers or ventilated containers work best.</p>
                  </div>
                </div>

                <Separator className="bg-border" />

                <div className="flex" data-id="ymgp316rk" data-path="src/pages/LivePickupPage.tsx">
                  <div className="flex-shrink-0 mr-4" data-id="blmrpe006" data-path="src/pages/LivePickupPage.tsx">
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500/20 text-green-400" data-id="h9tv4bbuu" data-path="src/pages/LivePickupPage.tsx">3</span>
                  </div>
                  <div data-id="9tihtrbhx" data-path="src/pages/LivePickupPage.tsx">
                    <h3 className="text-lg font-medium text-green-400 mb-1" data-id="l6e1qmyxf" data-path="src/pages/LivePickupPage.tsx">Arrive on Time</h3>
                    <p data-id="hzis8hpa5" data-path="src/pages/LivePickupPage.tsx">Please respect the scheduled pickup time. If you need to reschedule, contact us at least 2 hours before your appointment.</p>
                  </div>
                </div>

                <Separator className="bg-border" />

                <div className="flex" data-id="m0nzcrse6" data-path="src/pages/LivePickupPage.tsx">
                  <div className="flex-shrink-0 mr-4" data-id="x31gdtnwg" data-path="src/pages/LivePickupPage.tsx">
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500/20 text-green-400" data-id="526ayfd9z" data-path="src/pages/LivePickupPage.tsx">4</span>
                  </div>
                  <div data-id="kaosxs2l6" data-path="src/pages/LivePickupPage.tsx">
                    <h3 className="text-lg font-medium text-green-400 mb-1" data-id="03f7jj7n2" data-path="src/pages/LivePickupPage.tsx">Payment Methods</h3>
                    <p data-id="9vrbzojxd" data-path="src/pages/LivePickupPage.tsx">We accept cash, credit/debit cards, and mobile payment apps (Venmo, PayPal, Cash App) for in-person pickups.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div data-id="zw31mdzeu" data-path="src/pages/LivePickupPage.tsx">
            <Card className="bg-background/40 backdrop-blur-sm border border-border">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-6 text-green-500" data-id="7fbmnx1hp" data-path="src/pages/LivePickupPage.tsx">Schedule a Pickup</h2>
                
                <form className="space-y-6" data-id="hs21j45i7" data-path="src/pages/LivePickupPage.tsx">
                  <div className="grid grid-cols-1 gap-6" data-id="z9i30703h" data-path="src/pages/LivePickupPage.tsx">
                    <div className="space-y-2" data-id="zu4lb826c" data-path="src/pages/LivePickupPage.tsx">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Your name" className="bg-background/60" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-id="dcdugnx3r" data-path="src/pages/LivePickupPage.tsx">
                      <div className="space-y-2" data-id="1yds0l1jx" data-path="src/pages/LivePickupPage.tsx">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="your@email.com" className="bg-background/60" />
                      </div>
                      <div className="space-y-2" data-id="9q3m633c2" data-path="src/pages/LivePickupPage.tsx">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="(555) 555-5555" className="bg-background/60" />
                      </div>
                    </div>
                    
                    <div className="space-y-2" data-id="7wewf9nfk" data-path="src/pages/LivePickupPage.tsx">
                      <Label htmlFor="date">Preferred Pickup Date</Label>
                      <Input id="date" type="date" className="bg-background/60" />
                    </div>
                    
                    <div className="space-y-2" data-id="1wzhiy9mv" data-path="src/pages/LivePickupPage.tsx">
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
                    
                    <div className="space-y-2" data-id="00l1wa33k" data-path="src/pages/LivePickupPage.tsx">
                      <Label htmlFor="order_details">What Would You Like to Pick Up?</Label>
                      <Textarea
                        id="order_details"
                        placeholder="Please specify which ASF rats you'd like (size, quantity, etc.)"
                        className="min-h-[100px] bg-background/60" />

                    </div>
                    
                    <div className="space-y-2" data-id="l38giihna" data-path="src/pages/LivePickupPage.tsx">
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
                    
                    <p className="text-sm text-muted-foreground text-center" data-id="jr2bsx6ib" data-path="src/pages/LivePickupPage.tsx">
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