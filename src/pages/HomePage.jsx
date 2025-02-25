import axios from "../api/axios";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [books, setBooks] = useState([]);

  const fetchBooks = () => {
    axios.get("/books").then((res) => {
      setBooks(res.data);
    });
  };

  useEffect(fetchBooks, []);

  return (
    <>
      <h1>Home Page</h1>
      <hr />
      {books.map((book) => (
        <div key={book.id}>{book.title}</div>
      ))}
    </>
  );
}
