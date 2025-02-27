import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <main className="py-12 grow">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
