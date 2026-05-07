type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

export default function Select({ children, ...props }: SelectProps) {
  return (
    <div className="relative">
      <select
        {...props}
        className="w-full border-2 border-[#383838] rounded-[2px] pl-3 pr-5 py-3 text-[16px]
      focus:outline-none bg-white text-gray-800 appearance-none font-semibold"
      >
        {children}
      </select>

      <span
        className="
          pointer-events-none absolute right-3 top-1/2
          -translate-y-[55%] rotate-180
          text-gray-800 text-[16px] font-semibold
        "
      >
        ^
      </span>
    </div>
  );
}
