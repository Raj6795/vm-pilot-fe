"use client";

import FilterDropdown from "../filter-dropdown/FilterDropdown";

type BaseProps = {
  heading?: string;
  action?: React.ReactNode;
};

type SortableProps = {
  sortable: true;
  filter: string;
  setFilter: (value: string) => void;
  counts: Record<string, number>;
  total: number;
};

type NonSortableProps = {
  sortable?: false;
  filter?: never;
  setFilter?: never;
  counts?: never;
  total?: never;
};

type CardActionsProps = BaseProps & (SortableProps | NonSortableProps);

export default function CardActions({
  sortable,
  action,
  heading,
  filter,
  setFilter,
  counts,
  total,
}: CardActionsProps) {
  return (
    <div className="w-full flex items-center justify-between mb-4">
      {heading && (
        <h3 className="text-[24px] font-semibold text-[#1E1E1E]">{heading}</h3>
      )}
      {sortable && (
        <div className="flex text-[#1E1E1E] font-semibold items-center gap-2 pl-4">
          <p>Sort by: </p>
          <FilterDropdown
            value={filter}
            counts={counts}
            total={total}
            onChange={setFilter}
          />
        </div>
      )}
      {action && <div>{action}</div>}
    </div>
  );
}
