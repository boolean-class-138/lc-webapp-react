import { BrowserRouter, Routes, Route } from "react-router";
// Layouts
import DefaultLayout from "./layouts/DefaultLayout";
// Pages
import HomePage from "./pages/HomePage";
import BookPage from "./pages/BookPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="/books/:id" element={<BookPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
