"use client";

import { useState } from "react";

type FilterType = "primary" | "secondary" | "optional";

type FilterDropdownProps = {
  value: FilterType;
  counts: Record<FilterType, number>;
  total: number;
  onChange: (value: FilterType) => void;
};

export default function FilterDropdown({
  value,
  counts,
  total,
  onChange,
}: FilterDropdownProps) {
  const [open, setOpen] = useState(false);

  const label = `${capitalize(value)} (${counts[value]} of ${total})`;

  return (
    <div className="relative inline-block">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((prevVal) => !prevVal)}
        className="
          inline-flex items-center gap-1
          hover:text-gray-900
          focus:outline-none
        "
      >
        {label}
        <span className={`transition-transform ${open ? "" : "rotate-180"}`}>
          ▼
        </span>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute left-0 mt-2 w-40
            rounded-md border border-gray-200
            bg-white shadow-sm
            z-10
          "
        >
          {(["primary", "secondary", "optional"] as FilterType[]).map(
            (option) => (
              <button
                key={option}
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                className={`
                  w-full text-left px-3 py-2
                  hover:bg-gray-100
                  ${
                    value === option
                      ? "font-semibold text-gray-600"
                      : "font-normal"
                  }
                `}
              >
                {capitalize(option)}
              </button>
            ),
          )}
        </div>
      )}
    </div>
  );
}

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
