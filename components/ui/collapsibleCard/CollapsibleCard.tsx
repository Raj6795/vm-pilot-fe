"use client";

import { useState } from "react";

type CollapsibleCardProps = {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

export default function CollapsibleCard({
  title,
  children,
  defaultOpen = true,
}: CollapsibleCardProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="w-full">
      {/* Header */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="
          w-full flex items-center justify-between bg-[#B3B3B3]
          px-4 py-[3px]
          text-left font-semibold text-gray-800 border-2 rounded-[2px] border-[#383838]
        "
      >
        <span>{title}</span>

        {/* Toggle Icon */}
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      {/* Body */}
      {open && <div className="pt-4">{children}</div>}
    </div>
  );
}
