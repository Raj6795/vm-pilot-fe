type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input(props: InputProps) {
  return (
    <input
      {...props}
      className="w-full border-3 border-gray-800 rounded px-3 py-3 text-sm
                 focus:outline-none bg-white text-gray-800"
    />
  );
}
