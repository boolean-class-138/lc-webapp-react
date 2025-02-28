import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../components/ui/Loader";
import { useLoaderContext } from "../contexts/LoaderContext";

export default function DefaultLayout() {
  const { isLoading } = useLoaderContext();

  return (
    <>
      <Header />
      <main className="py-12 grow">{isLoading ? <Loader /> : <Outlet />}</main>
      <Footer />
    </>
  );
}
