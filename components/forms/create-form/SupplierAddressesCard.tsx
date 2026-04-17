import Button from "@/components/ui/Button";
import TickButton from "@/components/ui/button/TickButton";
import TrashButton from "@/components/ui/button/TrashButton";
import CardActions from "@/components/ui/collapsibleCard/CardActions";
import CollapsibleCard from "@/components/ui/collapsibleCard/CollapsibleCard";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";

export default function SupplierAddressesCard() {
  return (
    <CollapsibleCard title="Supplier Addresses">
      <CardActions
        sortable={true}
        action={<Button variant="form">+ Add Another Contact</Button>}
      />
      <div className="w-full border-2 border-[#1E1E1E] rounded-[6px] p-5">
        <div className="flex justify-between items-center">
          <div className="flex-3 flex items-center gap-3">
            <p className="font-semibold text-[#5A5A5A]">Address Type</p>
            <Select>
              <option value="">Select Address Type</option>
              <option value="primary">Primary</option>
              <option value="secondary">Secondary</option>
              <option value="optional">Optional</option>
            </Select>
          </div>
          <div className="flex-1 flex justify-end items-center">
            <TickButton />
            <TrashButton />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 mt-4">
          <div className="col-span-6">
            <label className="block text-[16px] text-gray-700 mb-1 font-semibold">
              Street Address
            </label>
            <Input placeholder="Enter Street Address" />
          </div>
          <div className="col-span-3">
            <label className="block text-[16px] text-gray-700 mb-1 font-semibold">
              Address Line 2
            </label>
            <Input placeholder="Enter Address" />
          </div>
          <div className="col-span-3">
            <label className="block text-[16px] text-gray-700 mb-1 font-semibold">
              Address Line 3
            </label>
            <Input placeholder="Enter Address" />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 mt-4">
          <div className="col-span-3">
            <label className="block text-[16px] text-gray-700 mb-1 font-semibold">
              City
            </label>
            <Input placeholder="Enter City" />
          </div>
          <div className="col-span-3">
            <label className="block text-[16px] text-gray-700 mb-1 font-semibold">
              State/Prov
            </label>
            <Select>
              <option value="">Select State/Prov</option>
              <option value="CA">California</option>
              <option value="NY">New York</option>
            </Select>
          </div>
          <div className="col-span-3">
            <label className="block text-[16px] text-gray-700 mb-1 font-semibold">
              Postal/Zip (Code)
            </label>
            <Input placeholder="Enter Postal/Zip (Code)" />
          </div>
          <div className="col-span-3">
            <label className="block text-[16px] text-gray-700 mb-1 font-semibold">
              Country
            </label>
            <Select>
              <option value="">Select Country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
            </Select>
          </div>
        </div>
      </div>
    </CollapsibleCard>
  );
}
