import { Check } from "lucide-react";

interface CheckoutStepsProps {
  currentStep: number;
}

const CheckoutSteps = ({ currentStep }: CheckoutStepsProps) => {
  const steps = [
    { id: 1, name: "Shipping" },
    { id: 2, name: "Payment" },
    { id: 3, name: "Review" },
    { id: 4, name: "Complete" }
  ];

  return (
    <div className="w-full">
      <div className="hidden sm:flex items-center justify-between relative">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center">
            <div 
              className={`flex items-center justify-center w-10 h-10 rounded-full border-2 z-10
                ${currentStep > step.id 
                  ? "bg-green-500 border-green-500 text-white" 
                  : currentStep === step.id 
                    ? "border-green-500 text-green-500" 
                    : "border-muted-foreground text-muted-foreground"}`}
            >
              {currentStep > step.id ? (
                <Check className="h-5 w-5" />
              ) : (
                <span>{step.id}</span>
              )}
            </div>
            <span className={`mt-2 text-sm font-medium
              ${currentStep >= step.id 
                ? "text-primary" 
                : "text-muted-foreground"}`}
            >
              {step.name}
            </span>
            
            {/* Connector line */}
            {index < steps.length - 1 && (
              <div 
                className={`absolute h-0.5 top-5 left-0 right-0 mx-auto
                  ${currentStep > index + 1 
                    ? "bg-green-500" 
                    : "bg-muted-foreground/30"}`}
                style={{ 
                  left: `calc(${(index * 100) / (steps.length - 1)}% + 5%)`, 
                  right: `calc(${100 - ((index + 1) * 100) / (steps.length - 1)}% + 5%)` 
                }}
              />
            )}
          </div>
        ))}
      </div>
      
      {/* Mobile steps display */}
      <div className="sm:hidden">
        <div className="flex items-center justify-between bg-muted p-2 rounded-md">
          <span className="font-medium">Step {currentStep} of {steps.length}</span>
          <span className="font-medium">{steps[currentStep - 1].name}</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSteps;