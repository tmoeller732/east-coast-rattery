import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { CreditCard, CheckCircle2 } from "lucide-react";
import { Address, PaymentInfo } from "@/pages/CheckoutPage";

interface PaymentFormProps {
  paymentInfo: PaymentInfo;
  setPaymentInfo: React.Dispatch<React.SetStateAction<PaymentInfo>>;
  shippingAddress: Address;
}

const PaymentForm = ({
  paymentInfo,
  setPaymentInfo,
  shippingAddress
}: PaymentFormProps) => {
  // Format credit card input
  const formatCreditCard = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || "";
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  };

  // Format expiry date
  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");

    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }

    return v;
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;

    // Apply formatting
    if (name === "cardNumber") {
      value = formatCreditCard(value);
    } else if (name === "expiryDate") {
      value = formatExpiryDate(value);
    } else if (name === "cvv") {
      value = value.replace(/\D/g, "").substring(0, 4);
    }

    setPaymentInfo((prev) => ({ ...prev, [name]: value }));
  };

  // Handle billing address toggle
  const handleBillingAddressToggle = (checked: boolean) => {
    setPaymentInfo((prev) => ({
      ...prev,
      billingAddressSameAsShipping: checked,
      // If using shipping address, clear any previously entered billing address
      billingAddress: checked ? undefined : prev.billingAddress
    }));
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-4">Payment Method</h3>
        <div className="border p-4 rounded-md bg-green-500/5 border-green-500/30 flex items-center gap-3">
          <CheckCircle2 className="h-5 w-5 text-green-500" />
          <span>Credit Card</span>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Card Information</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="cardNumber">Card Number *</Label>
            <div className="relative">
              <Input
                id="cardNumber"
                name="cardNumber"
                value={paymentInfo.cardNumber}
                onChange={handleInputChange}
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                className="pl-10"
                required />

              <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="nameOnCard">Name on Card *</Label>
            <Input
              id="nameOnCard"
              name="nameOnCard"
              value={paymentInfo.nameOnCard}
              onChange={handleInputChange}
              placeholder="John Doe"
              required />

          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiryDate">Expiry Date (MM/YY) *</Label>
              <Input
                id="expiryDate"
                name="expiryDate"
                value={paymentInfo.expiryDate}
                onChange={handleInputChange}
                placeholder="MM/YY"
                maxLength={5}
                required />

            </div>
            
            <div className="space-y-2">
              <Label htmlFor="cvv">CVV *</Label>
              <Input
                id="cvv"
                name="cvv"
                value={paymentInfo.cvv}
                onChange={handleInputChange}
                placeholder="123"
                maxLength={4}
                required />

            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Billing Address</h3>
        <div className="flex items-center space-x-2 mb-4">
          <Switch
            id="billing-same"
            checked={paymentInfo.billingAddressSameAsShipping}
            onCheckedChange={handleBillingAddressToggle} />

          <Label htmlFor="billing-same">Same as shipping address</Label>
        </div>
        
        {!paymentInfo.billingAddressSameAsShipping &&
        <div className="space-y-4 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="billingFirstName">First Name *</Label>
                <Input
                id="billingFirstName"
                name="billingFirstName"
                required />

              </div>
              <div className="space-y-2">
                <Label htmlFor="billingLastName">Last Name *</Label>
                <Input
                id="billingLastName"
                name="billingLastName"
                required />

              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="billingAddress1">Address Line 1 *</Label>
              <Input
              id="billingAddress1"
              name="billingAddress1"
              required />

            </div>
            
            <div className="space-y-2">
              <Label htmlFor="billingAddress2">Address Line 2</Label>
              <Input
              id="billingAddress2"
              name="billingAddress2" />

            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="billingCity">City *</Label>
                <Input
                id="billingCity"
                name="billingCity"
                required />

              </div>
              <div className="space-y-2">
                <Label htmlFor="billingState">State *</Label>
                <Input
                id="billingState"
                name="billingState"
                required />

              </div>
              <div className="space-y-2">
                <Label htmlFor="billingZip">ZIP Code *</Label>
                <Input
                id="billingZip"
                name="billingZip"
                required />

              </div>
            </div>
          </div>
        }
      </div>
    </div>);

};

export default PaymentForm;