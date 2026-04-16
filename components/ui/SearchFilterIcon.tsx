export const SearchFilterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-7 w-7 text-gray-900 font-semibold"
  >
    {/* Horizontal lines */}
    <line x1="3" y1="7" x2="14" y2="7" />
    <line x1="3" y1="13" x2="7" y2="13" />
    <line x1="3" y1="19" x2="8" y2="19" />

    {/* Search icon */}
    <circle cx="14" cy="15" r="3.5" />
    <line x1="17" y1="18" x2="19" y2="20" />
  </svg>
);
