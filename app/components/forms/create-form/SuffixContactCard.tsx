import Button from "@/components/ui/Button";
import CardActions from "@/components/ui/collapsibleCard/CardActions";
import CollapsibleCard from "@/components/ui/collapsibleCard/CollapsibleCard";
import Select from "@/components/ui/Select";
import { useState } from "react";

const counts = {
  primary: 5,
  secondary: 3,
  optional: 2,
};

const total = Object.values(counts).reduce((sum, count) => sum + count, 0);

export default function SuffixContactCard() {
  const [filter, setFilter] = useState("primary");

  return (
    <CollapsibleCard title="Suffix Contact">
      <CardActions
        sortable={true}
        filter={filter}
        setFilter={setFilter}
        counts={counts}
        total={total}
        action={<Button variant="form">+ Add Another Contact</Button>}
      />
      <div className="w-full bg-white border-2 border-[#383838] rounded-[2px] p-4">
        <label className="w-full block text-base text-[#5A5A5A] font-semibold mb-2">
          Select from Supplier Contact
        </label>
        <Select className="w-full my-4">
          <option value="">Select Contact</option>
          <option value="primary">Primary</option>
          <option value="secondary">Secondary</option>
        </Select>
      </div>
    </CollapsibleCard>
  );
}
