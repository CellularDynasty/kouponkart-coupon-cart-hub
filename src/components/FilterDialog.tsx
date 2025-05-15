
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FilterIcon } from "lucide-react";

interface FilterDialogProps {
  onApplyFilters: (filters: {
    stores: string[];
    categories: string[];
    exclusiveOnly: boolean;
    verifiedOnly: boolean;
  }) => void;
  allStores: string[];
  allCategories: string[];
}

const FilterDialog: React.FC<FilterDialogProps> = ({
  onApplyFilters,
  allStores,
  allCategories,
}) => {
  const [selectedStores, setSelectedStores] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [exclusiveOnly, setExclusiveOnly] = useState(false);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [open, setOpen] = useState(false);

  const handleApplyFilters = () => {
    onApplyFilters({
      stores: selectedStores,
      categories: selectedCategories,
      exclusiveOnly,
      verifiedOnly,
    });
    setOpen(false);
  };

  const toggleStore = (store: string) => {
    setSelectedStores((prev) =>
      prev.includes(store)
        ? prev.filter((s) => s !== store)
        : [...prev, store]
    );
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 shadow-sm">
          <FilterIcon className="h-4 w-4" />
          Filter Deals
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Filter Deals</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Stores</h3>
            <div className="grid grid-cols-2 gap-2">
              {allStores.map((store) => (
                <div key={store} className="flex items-center space-x-2">
                  <Checkbox
                    id={`store-${store}`}
                    checked={selectedStores.includes(store)}
                    onCheckedChange={() => toggleStore(store)}
                  />
                  <Label htmlFor={`store-${store}`}>{store}</Label>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Categories</h3>
            <div className="grid grid-cols-2 gap-2">
              {allCategories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category}`}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => toggleCategory(category)}
                  />
                  <Label htmlFor={`category-${category}`}>{category}</Label>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Deal Types</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="exclusive-only"
                  checked={exclusiveOnly}
                  onCheckedChange={() => setExclusiveOnly(!exclusiveOnly)}
                />
                <Label htmlFor="exclusive-only">Exclusive Deals Only</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="verified-only"
                  checked={verifiedOnly}
                  onCheckedChange={() => setVerifiedOnly(!verifiedOnly)}
                />
                <Label htmlFor="verified-only">Verified Deals Only</Label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button onClick={handleApplyFilters}>Apply Filters</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FilterDialog;
