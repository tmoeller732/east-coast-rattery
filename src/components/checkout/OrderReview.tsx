import { Address, PaymentInfo, ShippingMethod } from "@/pages/CheckoutPage";
import { CartItem } from "@/contexts/CartContext";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { LockIcon, CreditCard } from "lucide-react";

interface OrderReviewProps {
  shippingAddress: Address;
  shippingMethod: ShippingMethod;
  paymentInfo: PaymentInfo;
  cartItems: CartItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

const OrderReview = ({
  shippingAddress,
  shippingMethod,
  paymentInfo,
  cartItems,
  subtotal,
  shipping,
  tax,
  total
}: OrderReviewProps) => {
  // Format masked card number
  const formatMaskedCard = (cardNumber: string) => {
    // Extract last 4 digits if available
    const lastFour = cardNumber.replace(/\s/g, "").slice(-4);
    if (lastFour.length === 4) {
      return `•••• •••• •••• ${lastFour}`;
    }
    return "•••• •••• •••• ••••";
  };

  return (
    <div className="space-y-8">
      <div className="bg-green-500/5 border border-green-500/30 rounded-md p-4 flex items-center gap-3">
        <LockIcon className="h-5 w-5 text-green-500" />
        <div>
          <h3 className="font-medium">Secure Checkout</h3>
          <p className="text-sm text-muted-foreground">Your information is protected using secure encryption</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-medium mb-4">Shipping Information</h3>
            <div className="space-y-1 text-sm">
              <p className="font-medium">{shippingAddress.firstName} {shippingAddress.lastName}</p>
              <p>{shippingAddress.address1}</p>
              {shippingAddress.address2 && <p>{shippingAddress.address2}</p>}
              <p>{shippingAddress.city}, {shippingAddress.state} {shippingAddress.zipCode}</p>
              <p>{shippingAddress.email}</p>
              <p>{shippingAddress.phone}</p>
            </div>
            
            <Separator className="my-4" />
            
            <h3 className="font-medium mb-4">Shipping Method</h3>
            <div className="space-y-1 text-sm">
              <p className="font-medium">{shippingMethod.name}</p>
              <p className="text-muted-foreground">{shippingMethod.description}</p>
              <p>{shippingMethod.price === 0 ? "FREE" : `$${shippingMethod.price.toFixed(2)}`}</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-medium mb-4">Payment Information</h3>
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="h-5 w-5" />
              <span>{formatMaskedCard(paymentInfo.cardNumber)}</span>
            </div>
            <p className="text-sm">Name on card: {paymentInfo.nameOnCard}</p>
            
            <Separator className="my-4" />
            
            <h3 className="font-medium mb-4">Billing Address</h3>
            <div className="space-y-1 text-sm">
              {paymentInfo.billingAddressSameAsShipping ? (
                <>
                  <p className="italic text-muted-foreground">Same as shipping address</p>
                  <p className="font-medium">{shippingAddress.firstName} {shippingAddress.lastName}</p>
                  <p>{shippingAddress.address1}</p>
                  {shippingAddress.address2 && <p>{shippingAddress.address2}</p>}
                  <p>{shippingAddress.city}, {shippingAddress.state} {shippingAddress.zipCode}</p>
                </>
              ) : (
                <p>Custom billing address</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <h3 className="font-medium mb-4">Order Items</h3>
        <div className="space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                <img 
                  src={item.image || "/placeholder.svg"} 
                  alt={item.name} 
                  className="h-full w-full object-cover" 
                />
              </div>
              <div className="flex-grow">
                <h4 className="font-medium">{item.name}</h4>
                <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
              </div>
              <div className="text-right">
                <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                <p className="text-sm text-muted-foreground">${item.price.toFixed(2)} each</p>
              </div>
            </div>
          ))}
        </div>
        
        <Separator className="my-6" />
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax (7%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <Separator className="my-2" />
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;