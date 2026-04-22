import React, { useEffect, useRef, useState } from "react";
import { SearchFilterIcon } from "../icons/SearchFilterIcon";

type SearchableInputProps<T> = {
  items: T[];
  value?: T | null;
  onChange: (item: T) => void;
  placeholder?: string;
  getLabel: (item: T) => string;
  debounceMs?: number;
};

export function SearchableInput<T>({
  items,
  value,
  onChange,
  placeholder = "Search...",
  getLabel,
  debounceMs = 0,
}: SearchableInputProps<T>) {
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState<T[]>(items);
  const [open, setOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number>(0);

  function handleBlur(e: React.FocusEvent<HTMLDivElement>) {
    if (!containerRef.current?.contains(e.relatedTarget as Node)) {
      setOpen(false);
    }
  }

  useEffect(() => {
    if (!query) {
      setFilteredItems(items);
      return;
    }

    if (debounceMs > 0) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(filter, debounceMs);
    } else {
      filter();
    }

    function filter() {
      const lowerQuery = query.toLowerCase();
      setFilteredItems(
        items.filter((item) =>
          getLabel(item).toLowerCase().includes(lowerQuery),
        ),
      );
    }

    return () => window.clearTimeout(timeoutRef.current);
  }, [query, items, debounceMs, getLabel]);

  function handleSelect(item: T) {
    onChange(item);
    setQuery(getLabel(item));
    setOpen(false);
  }

  return (
    <div
      className="relative w-full"
      ref={containerRef}
      tabIndex={-1}
      onBlur={handleBlur}
    >
      <div className="relative">
        <input
          type="text"
          value={query}
          placeholder={placeholder}
          onFocus={() => setOpen(true)}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          className="
        w-full border-2 border-[#383838] rounded-[2px] p-3 text-[16px] pr-10
        focus:outline-none bg-white text-gray-800 placeholder-gray-800 font-semibold
        "
          aria-autocomplete="list"
          aria-expanded={open}
        />

        {/* Search icon */}
        <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <SearchFilterIcon />
        </span>
      </div>
      {open && filteredItems.length > 0 && (
        <ul
          className="
            absolute z-10 mt-1 max-h-60 w-full overflow-auto
            border border-gray-800 bg-white"
        >
          {filteredItems.map((item, index) => (
            <li
              key={index}
              onMouseDown={() => handleSelect(item)}
              className="
                cursor-pointer px-3 py-2 text-[16px]
                hover:bg-blue-50 hover:bg-gray-600 hover:text-white
              "
            >
              {getLabel(item)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
