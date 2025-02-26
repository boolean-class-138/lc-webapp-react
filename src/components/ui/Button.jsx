export default function Button({
  variant = "primary",
  size = "md",
  children,
  ...props
}) {
  const baseStyle = "rounded-sm transition-all cursor-pointer";

  const variants = {
    primary: "bg-red-800 hover:bg-red-700 text-white",
    secondary: "bg-neutral-200 hover:bg-neutral-100",
  };

  const sizes = {
    sm: "py-1 px-2 text-sm",
    md: "py-2 px-4",
    lg: "py-4 px-6 text-lg",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${sizes[size]}`}
      {...props}
    >
      {children}
    </button>
  );
}
