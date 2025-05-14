import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, ShoppingBag, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface OrderCompleteProps {
  orderId: string;
}

const OrderComplete = ({ orderId }: OrderCompleteProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-6">

        <div className="rounded-full bg-green-100 p-3">
          <CheckCircle2 className="h-16 w-16 text-green-600" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center">

        <h2 className="text-2xl font-bold mb-2">Thank You for Your Order!</h2>
        <p className="text-muted-foreground mb-6">
          Your order has been received and is being processed.
        </p>
        
        <div className="bg-muted p-4 rounded-md inline-block mb-8">
          <p className="text-sm text-muted-foreground">Order Number</p>
          <p className="font-mono font-bold">{orderId}</p>
        </div>
        
        <div className="space-y-2 mb-8 text-center">
          <p>A confirmation email has been sent to your email address.</p>
          <p className="text-muted-foreground">
            Please allow 24-48 hours for order processing before shipment.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="outline" className="gap-2">
            <Link to="/account">
              <ShoppingBag className="h-4 w-4" />
              View My Orders
            </Link>
          </Button>
          <Button asChild className="gap-2">
            <Link to="/shop">
              Continue Shopping
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>);

};

export default OrderComplete;