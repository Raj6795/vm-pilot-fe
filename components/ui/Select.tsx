type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

export default function Select({ children, ...props }: SelectProps) {
  return (
    <select
      {...props}
      className="w-full border-3 border-gray-800 rounded px-3 py-3 text-sm
                 focus:outline-none focus:ring-2 focus:ring-gray-800 bg-white"
    >
      {children}
    </select>
  );
}
