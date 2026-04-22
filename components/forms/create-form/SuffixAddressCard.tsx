import CollapsibleCard from "@/components/ui/collapsibleCard/CollapsibleCard";
import Select from "@/components/ui/Select";

export default function SuffixAddressCard() {
  return (
    <CollapsibleCard title="Suffix Address">
      <div className="w-full bg-white border-2 border-[#383838] rounded-[2px] p-4">
        <label className="w-full block text-base text-[#5A5A5A] font-semibold mb-2">
          Select from Supplier Address
        </label>
        <Select className="w-full my-4">
          <option value="">Select Address</option>
          <option value="primary">Primary</option>
          <option value="secondary">Secondary</option>
        </Select>
      </div>
    </CollapsibleCard>
  );
}
