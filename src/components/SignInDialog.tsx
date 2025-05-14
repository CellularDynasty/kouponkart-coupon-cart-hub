
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

interface SignInDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSignUpClick: () => void;
}

const SignInDialog: React.FC<SignInDialogProps> = ({ 
  isOpen, 
  onClose,
  onSignUpClick
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle authentication here
    toast({
      title: "Sign In Successful",
      description: "Welcome back to KouponKart!",
    });
    onClose();
  };

  const switchToSignUp = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
    onSignUpClick();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl">Sign In</DialogTitle>
          <DialogDescription>
            Access your account to manage your saved coupons and preferences.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-4">
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
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <a
                href="#"
                className="text-xs text-primary hover:underline"
                onClick={(e) => e.preventDefault()}
              >
                Forgot password?
              </a>
            </div>
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
                Sign In
              </Button>
              <div className="text-center text-sm">
                Don't have an account?{" "}
                <a
                  href="#"
                  className="text-primary hover:underline font-medium"
                  onClick={switchToSignUp}
                >
                  Sign Up
                </a>
              </div>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SignInDialog;
