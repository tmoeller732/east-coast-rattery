import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { motion } from "framer-motion";
import CheckoutSummary from "@/components/checkout/CheckoutSummary";
import ShippingForm from "@/components/checkout/ShippingForm";
import PaymentForm from "@/components/checkout/PaymentForm";
import OrderReview from "@/components/checkout/OrderReview";
import OrderComplete from "@/components/checkout/OrderComplete";
import CheckoutSteps from "@/components/checkout/CheckoutSteps";

export type Address = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
};

export type PaymentInfo = {
  cardNumber: string;
  nameOnCard: string;
  expiryDate: string;
  cvv: string;
  billingAddressSameAsShipping: boolean;
  billingAddress?: Address;
};

export type ShippingMethod = {
  id: string;
  name: string;
  description: string;
  price: number;
  estimatedDelivery: string;
};

const shippingMethods: ShippingMethod[] = [
  {
    id: "fedex-standard",
    name: "FedEx 2-Day",
    description: "Delivery within 2 business days",
    price: 19.99,
    estimatedDelivery: "2 business days"
  },
  {
    id: "fedex-priority",
    name: "FedEx Overnight",
    description: "Priority overnight delivery",
    price: 29.99,
    estimatedDelivery: "Next business day"
  },
  {
    id: "local-pickup",
    name: "Local Pickup",
    description: "Pickup from our Bayville, NJ location",
    price: 0,
    estimatedDelivery: "Schedule your pickup"
  }
];

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { items, getCartTotal, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [orderId, setOrderId] = useState<string | null>(null);
  
  // Form states
  const [shippingAddress, setShippingAddress] = useState<Address>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "US"
  });
  
  const [selectedShippingMethod, setSelectedShippingMethod] = useState<ShippingMethod | null>(null);
  
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    cardNumber: "",
    nameOnCard: "",
    expiryDate: "",
    cvv: "",
    billingAddressSameAsShipping: true
  });

  // Check if cart is empty
  if (items.length === 0 && currentStep !== 4) {
    navigate("/cart");
    return null;
  }

  // Calculate order totals
  const subtotal = getCartTotal();
  const shipping = selectedShippingMethod?.price || 0;
  const tax = Math.round(subtotal * 0.07 * 100) / 100; // 7% tax
  const total = subtotal + shipping + tax;

  // Handle step navigation
  const nextStep = () => {
    if (currentStep === 3) {
      // Process order
      const newOrderId = `ORD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
      setOrderId(newOrderId);
      clearCart();
    }
    setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  // Check if step is complete
  const isStepComplete = (step: number) => {
    switch (step) {
      case 1: // Shipping
        return (
          shippingAddress.firstName !== "" &&
          shippingAddress.lastName !== "" &&
          shippingAddress.email !== "" &&
          shippingAddress.phone !== "" &&
          shippingAddress.address1 !== "" &&
          shippingAddress.city !== "" &&
          shippingAddress.state !== "" &&
          shippingAddress.zipCode !== "" &&
          selectedShippingMethod !== null
        );
      case 2: // Payment
        return (
          paymentInfo.cardNumber !== "" &&
          paymentInfo.nameOnCard !== "" &&
          paymentInfo.expiryDate !== "" &&
          paymentInfo.cvv !== ""
        );
      case 3: // Review
        return true;
      default:
        return false;
    }
  };

  return (
    <motion.div
      className="container max-w-7xl mx-auto px-4 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Checkout</h1>
        <p className="text-muted-foreground">Complete your purchase</p>
      </div>

      <CheckoutSteps currentStep={currentStep} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>
                {currentStep === 1 && "Shipping Information"}
                {currentStep === 2 && "Payment Method"}
                {currentStep === 3 && "Review Your Order"}
                {currentStep === 4 && "Order Complete"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {currentStep === 1 && (
                <ShippingForm
                  shippingAddress={shippingAddress}
                  setShippingAddress={setShippingAddress}
                  shippingMethods={shippingMethods}
                  selectedShippingMethod={selectedShippingMethod}
                  setSelectedShippingMethod={setSelectedShippingMethod}
                />
              )}

              {currentStep === 2 && (
                <PaymentForm
                  paymentInfo={paymentInfo}
                  setPaymentInfo={setPaymentInfo}
                  shippingAddress={shippingAddress}
                />
              )}

              {currentStep === 3 && (
                <OrderReview
                  shippingAddress={shippingAddress}
                  shippingMethod={selectedShippingMethod!}
                  paymentInfo={paymentInfo}
                  cartItems={items}
                  subtotal={subtotal}
                  shipping={shipping}
                  tax={tax}
                  total={total}
                />
              )}

              {currentStep === 4 && (
                <OrderComplete orderId={orderId!} />
              )}

              {currentStep !== 4 && (
                <div className="flex justify-between mt-8">
                  {currentStep > 1 ? (
                    <Button
                      variant="outline"
                      onClick={prevStep}
                      className="flex items-center gap-2"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Back
                    </Button>
                  ) : (
                    <div></div>
                  )}
                  <Button
                    onClick={nextStep}
                    disabled={!isStepComplete(currentStep)}
                    className={`flex items-center gap-2 ${currentStep === 3 ? "bg-green-600 hover:bg-green-700" : ""}`}
                  >
                    {currentStep === 3 ? "Place Order" : "Continue"}
                    {currentStep !== 3 && <ChevronRight className="h-4 w-4" />}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {currentStep !== 4 && (
          <div>
            <CheckoutSummary
              items={items}
              subtotal={subtotal}
              shipping={shipping}
              tax={tax}
              total={total}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CheckoutPage;