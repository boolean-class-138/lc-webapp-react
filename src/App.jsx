import { BrowserRouter, Routes, Route } from "react-router";
// Layouts
import DefaultLayout from "./layouts/DefaultLayout";
// Pages
import DesignSystem from "./pages/DesignSystem";
import HomePage from "./pages/HomePage";
import BookPage from "./pages/BookPage";
import PageNotFound from "./pages/PageNotFound";
// Backoffice Pages
import CreateBook from "./pages/CreateBook";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/design-system" element={<DesignSystem />} />
        <Route element={<DefaultLayout />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="/books/create" element={<CreateBook />} />
          <Route path="/books/:id" element={<BookPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
