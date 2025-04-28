"use client";

import { Check } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";

const Pricing = () => {
  const [isAnnually, setIsAnnually] = useState(false);
  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-6">
          <h2 className="text-4xl font-bold text-pretty lg:text-4xl">
            Pricing
          </h2>
          <div className="flex flex-col justify-between gap-10 md:flex-row">
            <p className="max-w-screen-md text-muted-foreground lg:text-xl">
              Get the best AI-powered match predictions across Cricket,
              Football, and Tennis. Choose the plan that suits your winning
              journey!
            </p>
            <div className="flex h-11 w-fit shrink-0 items-center rounded-md bg-muted p-1 text-lg">
              <RadioGroup
                defaultValue="monthly"
                className="h-full grid-cols-2"
                onValueChange={(value) => {
                  setIsAnnually(value === "annually");
                }}
              >
                <div className='h-full rounded-md transition-all has-[button[data-state="checked"]]:bg-white'>
                  <RadioGroupItem
                    value="monthly"
                    id="monthly"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="monthly"
                    className="flex h-full cursor-pointer items-center justify-center px-7 font-semibold text-muted-foreground peer-data-[state=checked]:text-primary"
                  >
                    Monthly
                  </Label>
                </div>
                <div className='h-full rounded-md transition-all has-[button[data-state="checked"]]:bg-white'>
                  <RadioGroupItem
                    value="annually"
                    id="annually"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="annually"
                    className="flex h-full cursor-pointer items-center justify-center gap-1 px-7 font-semibold text-muted-foreground peer-data-[state=checked]:text-primary"
                  >
                    Yearly
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div className="flex w-full flex-col items-stretch gap-6 md:flex-row">
            {/* Free Plan */}
            <div className="flex w-full flex-col rounded-lg border p-6 text-left">
              <Badge className="mb-8 block w-fit">FREE</Badge>
              <span className="text-4xl font-medium">₹0</span>
              <p className="invisible text-muted-foreground">Per month</p>
              <Separator className="my-6" />
              <div className="flex flex-col justify-between gap-20">
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>Daily 1 Match Prediction</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>Access to Basic Tips</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>Email Notifications</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>Limited Support</span>
                  </li>
                </ul>
                <Button className="w-full">Get Started</Button>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="flex w-full flex-col rounded-lg border p-6 text-left">
              <Badge className="mb-8 block w-fit">PRO</Badge>
              {isAnnually ? (
                <>
                  <span className="text-4xl font-medium">₹2,999</span>
                  <p className="text-muted-foreground">Per year</p>
                </>
              ) : (
                <>
                  <span className="text-4xl font-medium">₹299</span>
                  <p className="text-muted-foreground">Per month</p>
                </>
              )}
              <Separator className="my-6" />
              <div className="flex h-full flex-col justify-between gap-20">
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>Daily 5+ Match Predictions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>Premium Accuracy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>Priority Email Support</span>
                  </li>
                </ul>
                <Button className="w-full">Purchase</Button>
              </div>
            </div>

            {/* Elite Plan */}
            <div className="flex w-full flex-col rounded-lg border bg-muted p-6 text-left">
              <Badge className="mb-8 block w-fit">ELITE</Badge>
              {isAnnually ? (
                <>
                  <span className="text-4xl font-medium">₹6,999</span>
                  <p className="text-muted-foreground">Per year</p>
                </>
              ) : (
                <>
                  <span className="text-4xl font-medium">₹699</span>
                  <p className="text-muted-foreground">Per month</p>
                </>
              )}
              <Separator className="my-6" />
              <div className="flex h-full flex-col justify-between gap-20">
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>Unlimited Match Predictions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>1-on-1 Consultation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>Early Access to Tips</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>24/7 Premium Support</span>
                  </li>
                </ul>
                <Button className="w-full">Purchase</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing };
