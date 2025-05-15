
import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Copy, Check, Eye } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

interface CouponCard3DProps {
  store: string;
  logo: string;
  discount: string;
  code: string;
  expiryDate: string;
  tags?: string[];
  isVerified?: boolean;
  isExclusive?: boolean;
}

const CouponCard3D: React.FC<CouponCard3DProps> = ({
  store,
  logo,
  discount,
  code,
  expiryDate,
  tags = [],
  isVerified = false,
  isExclusive = false,
}) => {
  const { toast } = useToast();
  const [isCodeVisible, setIsCodeVisible] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Code copied!",
      description: `${code} has been copied to your clipboard.`,
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate normalized position (-1 to 1)
    const normalizedX = (e.clientX - centerX) / (rect.width / 2);
    const normalizedY = (e.clientY - centerY) / (rect.height / 2);
    
    // Apply rotation (limited to a small amount for subtle effect)
    setRotation({
      x: normalizedY * -5, // Reverse Y for natural feel
      y: normalizedX * 5,
    });
  };

  const handleMouseLeave = () => {
    // Smoothly reset rotation
    setRotation({ x: 0, y: 0 });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      toast({
        title: "Subscribed!",
        description: "You'll receive exclusive deals in your inbox.",
      });
      // In a real app, you would send this to your backend
      setTimeout(() => {
        setIsCodeVisible(true);
        setIsDialogOpen(false);
      }, 1000);
    }
  };

  const handleViewCode = () => {
    if (isSubscribed) {
      setIsCodeVisible(true);
    } else {
      setIsDialogOpen(true);
    }
  };

  return (
    <>
      <motion.div 
        ref={cardRef}
        className="transform-gpu perspective-[1000px] h-full"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.02 }}
      >
        <motion.div
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transformStyle: "preserve-3d",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="h-full"
        >
          <Card className="overflow-hidden shadow-lg border-opacity-70 h-full flex flex-col bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900">
            <CardContent className="p-0 flex flex-col h-full">
              <div className="p-4 flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-12 w-12 rounded-md flex-shrink-0 bg-white shadow-md flex items-center justify-center transform-gpu hover:translate-z-2 transition-transform duration-300" style={{ transform: "translateZ(10px)" }}>
                    <img
                      src={logo}
                      alt={`${store} logo`}
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <div className="space-x-2" style={{ transform: "translateZ(15px)" }}>
                    {isVerified && (
                      <Badge variant="outline" className="text-green-600 border-green-600 shadow-sm">
                        Verified
                      </Badge>
                    )}
                    {isExclusive && (
                      <Badge className="bg-primary text-white shadow-sm">Exclusive</Badge>
                    )}
                  </div>
                </div>

                <h3 className="font-heading font-bold text-lg mb-1" style={{ transform: "translateZ(20px)" }}>{store}</h3>
                <p className="text-xl font-medium text-primary-dark mb-2" style={{ transform: "translateZ(25px)" }}>
                  {discount}
                </p>

                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-3" style={{ transform: "translateZ(15px)" }}>
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-t p-4 mt-auto bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-800" style={{ transform: "translateZ(5px)" }}>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-gray-500">
                    Expires: <span className="font-medium">{expiryDate}</span>
                  </div>
                  <div className="text-xs text-primary cursor-pointer hover:underline">
                    Details
                  </div>
                </div>

                {isCodeVisible ? (
                  <div className="flex items-center" style={{ transform: "translateZ(20px)" }}>
                    <div className="bg-gray-100 px-3 py-2 rounded-l-md font-mono text-sm font-medium flex-grow text-center border-r border-dashed border-gray-300 shadow-inner">
                      {code}
                    </div>
                    <Button
                      className="rounded-l-none bg-primary hover:bg-primary-dark shadow-md"
                      onClick={handleCopyCode}
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                  </div>
                ) : (
                  <Button 
                    className="w-full bg-primary hover:bg-primary-dark shadow-lg transform transition-all hover:translate-y-[-2px]"
                    onClick={handleViewCode}
                    style={{ transform: "translateZ(25px)" }}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    {isSubscribed ? "View Code" : "Subscribe & Get Code"}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
          <DialogHeader>
            <DialogTitle className="text-2xl font-heading">Get exclusive deals</DialogTitle>
            <DialogDescription>
              Subscribe to our newsletter to reveal this coupon code and get more exclusive deals.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubscribe} className="space-y-4 pt-4">
            <div>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="backdrop-blur-sm"
              />
            </div>
            <div className="flex justify-end">
              <Button type="submit" className="bg-primary hover:bg-primary-dark text-white shadow-lg transform transition-all hover:translate-y-[-2px]">
                Subscribe
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CouponCard3D;
