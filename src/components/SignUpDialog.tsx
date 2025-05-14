
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

interface SignUpDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSignInClick: () => void;
}

const SignUpDialog: React.FC<SignUpDialogProps> = ({ 
  isOpen, 
  onClose,
  onSignInClick
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle registration here
    toast({
      title: "Sign Up Successful",
      description: "Welcome to KouponKart! Your account has been created.",
    });
    onClose();
  };

  const switchToSignIn = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
    onSignInClick();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl">Create an Account</DialogTitle>
          <DialogDescription>
            Join KouponKart to access exclusive deals and save your favorite coupons.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <DialogFooter className="pt-4">
            <div className="flex w-full flex-col space-y-2">
              <Button type="submit" className="w-full">
                Sign Up
              </Button>
              <div className="text-center text-sm">
                Already have an account?{" "}
                <a
                  href="#"
                  className="text-primary hover:underline font-medium"
                  onClick={switchToSignIn}
                >
                  Sign In
                </a>
              </div>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SignUpDialog;
