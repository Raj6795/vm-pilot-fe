"use client";

import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
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
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "w-full py-2 rounded transition",
        variant === "primary" && "bg-gray-800 text-white hover:bg-gray-500",
        variant === "secondary" && "border border-gray-300 hover:bg-gray-50",
        disabled && "opacity-50 cursor-not-allowed",
        className,
      )}
    >
      {children}
    </button>
  );
}
