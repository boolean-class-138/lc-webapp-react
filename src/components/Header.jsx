import Logo from "./ui/Logo";

export default function Header() {
  return (
    <header className="bg-white p-4 m-4 rounded-2xl shadow-xl text-center sticky top-4">
      <Logo />
    </header>
  );
}
