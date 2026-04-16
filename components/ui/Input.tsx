type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input(props: InputProps) {
  return (
    <input
      {...props}
      className="w-full border-3 border-gray-800 rounded p-3 text-[16px]
                 focus:outline-none bg-white text-gray-800 placeholder-gray-800 font-semibold"
    />
  );
}
