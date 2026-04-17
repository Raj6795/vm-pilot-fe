type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input(props: InputProps) {
  return (
    <input
      {...props}
      className="w-full border-2 border-[#383838] rounded-[2px] p-3 text-[16px]
                 focus:outline-none bg-white font-semibold"
    />
  );
}
