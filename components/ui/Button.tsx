"use client";

import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "form";
  disabled?: boolean;
  className?: string;
};

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  className,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={(e) => {
        onClick?.();
      }}
      disabled={disabled}
      className={clsx(
        "py-2 px-3 rounded-[8px] transition border border-[#767676] text-[16px]",
        variant === "primary" && "bg-gray-800 text-white hover:bg-gray-500",
        variant === "secondary" &&
          "bg-[#e3e3e3] border border-[#767676] hover:bg-gray-50",
        variant === "form" &&
          "bg-[#B3B3B3] border-2 border-[#383838] hover:bg-[#a0a0a0] font-semibold py-1! px-4! rounded-[2px]!",
        disabled && "opacity-50 cursor-not-allowed",
        className,
      )}
    >
      {children}
    </button>
  );
}
