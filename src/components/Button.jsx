export default function Button({
  variant = "primary",
  className = "",
  color = "black",
  children,
  ...rest
}) {
  const classList =
    variant === "primary"
      ? "bg-blue border border-blue text-white hover:bg-blue/70 hover:border-blue/40 "
      : `bg-transparent border ${color === "black" ? "border-gray-400 text-black  hover:bg-black/10 hover:border-black/10" : "border-gray-400 text-white  hover:bg-white/20 hover:border-white/10"} `;
  return (
    <button
      className={`flex items-center text-lg h-8.75 px-4 py-2  rounded-xl transition-colors duration-300 ${classList} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
