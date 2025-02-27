export default function Paragraph({ children, size = "md" }) {
  const sizes = {
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
  };

  return <p className={sizes[size]}>{children}</p>;
}
