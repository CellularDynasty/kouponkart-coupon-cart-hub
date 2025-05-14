
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface CouponCardProps {
  store: string;
  logo: string;
  discount: string;
  code: string;
  expiryDate: string;
  tags?: string[];
  isVerified?: boolean;
  isExclusive?: boolean;
}

const CouponCard: React.FC<CouponCardProps> = ({
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

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Code copied!",
      description: `${code} has been copied to your clipboard.`,
    });
  };

  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg duration-300">
      <CardContent className="p-0">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="h-12 w-12 rounded-md flex-shrink-0 bg-gray-100 flex items-center justify-center">
              <img
                src={logo}
                alt={`${store} logo`}
                className="h-8 w-8 object-contain"
              />
            </div>
            <div className="space-x-2">
              {isVerified && (
                <Badge variant="outline" className="text-green-600 border-green-600">
                  Verified
                </Badge>
              )}
              {isExclusive && (
                <Badge className="bg-primary text-white">Exclusive</Badge>
              )}
            </div>
          </div>

          <h3 className="font-heading font-bold text-lg mb-1">{store}</h3>
          <p className="text-xl font-medium text-primary-dark mb-2">
            {discount}
          </p>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-3">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="border-t p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm text-gray-500">
              Expires: <span className="font-medium">{expiryDate}</span>
            </div>
            <div className="text-xs text-primary cursor-pointer hover:underline">
              Details
            </div>
          </div>

          <div className="flex items-center">
            <div className="bg-gray-100 px-3 py-2 rounded-l-md font-mono text-sm font-medium flex-grow text-center border-r border-dashed border-gray-300">
              {code}
            </div>
            <Button
              className="rounded-l-none bg-primary hover:bg-primary-dark"
              onClick={handleCopyCode}
            >
              <Copy className="h-4 w-4 mr-2" />
              Copy
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CouponCard;
