"use client";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <div className="min-w-full flex p-4 bg-transparent">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-sm text-gray-800 hover:text-gray-600 font-semibold"
      >
        <span className="translate-x-[25%] -translate-y-[5%] font-extrabold">
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="20" y1="12" x2="6" y2="12" />
            <polyline points="12 18 6 12 12 6" />
          </svg>
        </span>
        Back
      </button>
    </div>
  );
}
