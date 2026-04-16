"use client";

import Button from "../ui/Button";

type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

function getVisiblePages(current: number, total: number): (number | "...")[] {
  // Small total → show everything
  if (total <= 5) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  // ✅ Special case: current page is 1
  if (current === 1) {
    return [1, 2, 3, "...", total];
  }

  // ✅ Special case: current page is 2
  if (current === 2) {
    return [1, 2, 3, "...", total];
  }

  // ✅ Special case: current page is last
  if (current === total) {
    return [1, "...", total - 2, total - 1, total];
  }

  // ✅ Special case: current page is second last
  if (current === total - 1) {
    return [1, "...", total - 2, total - 1, total];
  }

  // ✅ General case (middle pages)
  return [1, "...", current - 1, current, current + 1, "...", total];
}

export default function Pagination({
  page,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pages = getVisiblePages(page, totalPages);

  return (
    <div className="flex items-center gap-4 py-3 mt-4">
      {pages.map((item, index) =>
        item === "..." ? (
          <span key={`dots-${index}`} className="px-2 text-gray-500">
            ...
          </span>
        ) : (
          <Button
            key={item}
            onClick={() => onPageChange(item)}
            variant={item === page ? "primary" : "secondary"}
            className={`
              min-w-[32px] px-4 py-1 rounded text-md
              ${
                item === page
                  ? "text-white"
                  : "border-none bg-transparent text-gray-700 hover:bg-gray-300"
              }
            `}
          >
            {item}
          </Button>
        ),
      )}
    </div>
  );
}
