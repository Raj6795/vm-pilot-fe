"use client";

import { useState } from "react";
import FilterDropdown from "../filter-dropdown/FilterDropdown";

type CardActionsProps = {
  sortable: boolean;
  action: React.ReactNode;
};

export default function CardActions({ sortable, action }: CardActionsProps) {
  const [filter, setFilter] = useState<"primary" | "secondary" | "optional">(
    "primary",
  );

  const counts = {
    primary: 3,
    secondary: 4,
    optional: 3,
  };

  return (
    <div className="w-full flex items-center justify-between mb-4">
      {sortable && (
        <div className="flex text-[#1E1E1E] font-semibold items-center gap-2 pl-4">
          <p>Sort by: </p>
          <FilterDropdown
            value={filter}
            counts={counts}
            total={10}
            onChange={setFilter}
          />
        </div>
      )}
      <div>{action}</div>
    </div>
  );
}
