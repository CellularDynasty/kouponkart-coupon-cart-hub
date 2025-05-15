
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";

interface PlanFeature {
  text: string;
  included: boolean;
}

interface SubscriptionPlan {
  name: string;
  price: string;
  description: string;
  features: PlanFeature[];
  popularPlan?: boolean;
  buttonText: string;
}

const plans: SubscriptionPlan[] = [
  {
    name: "Basic",
    price: "$9.99",
    description: "Essential features for casual coupon users",
    features: [
      { text: "Access to basic coupons", included: true },
      { text: "Email notifications", included: true },
      { text: "Save up to 5 favorite stores", included: true },
      { text: "Exclusive deals", included: false },
      { text: "Priority support", included: false },
      { text: "Early access to deals", included: false },
    ],
    buttonText: "Start Basic",
  },
  {
    name: "Premium",
    price: "$19.99",
    description: "Advanced features for serious shoppers",
    features: [
      { text: "Access to all coupons", included: true },
      { text: "Email notifications", included: true },
      { text: "Unlimited favorite stores", included: true },
      { text: "Exclusive deals", included: true },
      { text: "Priority support", included: true },
      { text: "Early access to deals", included: false },
    ],
    popularPlan: true,
    buttonText: "Start Premium",
  },
  {
    name: "Enterprise",
    price: "$39.99",
    description: "Ultimate experience for professional deal hunters",
    features: [
      { text: "Access to all coupons", included: true },
      { text: "Email notifications", included: true },
      { text: "Unlimited favorite stores", included: true },
      { text: "Exclusive deals", included: true },
      { text: "Priority support", included: true },
      { text: "Early access to deals", included: true },
    ],
    buttonText: "Start Enterprise",
  },
];

const SubscriptionPlans: React.FC = () => {
  const { toast } = useToast();

  const handleSubscribe = (planName: string) => {
    toast({
      title: "Subscription selected",
      description: `You selected the ${planName} plan. This would normally redirect to a payment processor.`,
    });
  };

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-heading mb-4">
            Choose Your <span className="text-primary">Subscription</span> Plan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get exclusive access to the best deals and coupons with our premium subscription plans.
            Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative transition-all duration-300 h-full flex flex-col ${
                plan.popularPlan
                  ? "border-primary shadow-lg scale-105 z-10"
                  : "hover:shadow-md"
              }`}
            >
              {plan.popularPlan && (
                <Badge
                  className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/3 bg-primary px-3 py-1 text-white"
                  variant="default"
                >
                  Most Popular
                </Badge>
              )}
              <CardHeader className="pb-0">
                <h3 className="text-2xl font-bold font-heading">{plan.name}</h3>
                <div className="mt-3 mb-1">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
                <p className="text-sm text-gray-500">{plan.description}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className={`flex items-start ${
                        !feature.included ? "text-gray-400" : ""
                      }`}
                    >
                      <Check
                        className={`h-5 w-5 mr-2 shrink-0 ${
                          feature.included
                            ? "text-green-500"
                            : "text-gray-300"
                        }`}
                      />
                      <span className="text-sm">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${
                    plan.popularPlan
                      ? "bg-primary hover:bg-primary-dark"
                      : ""
                  }`}
                  onClick={() => handleSubscribe(plan.name)}
                  variant={plan.popularPlan ? "default" : "outline"}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            All plans include a 7-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
