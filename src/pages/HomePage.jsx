import axios from "../api/axios";
import { useEffect, useState } from "react";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";

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
      <Container>
        <div className="grid grid-cols-12 gap-4">
          {books.map((book) => (
            <div
              key={book.id}
              className="col-span-12 md:col-span-6 lg:col-span-4"
            >
              <Card
                image={book.image}
                title={book.title}
                content={book.abstract}
                author={book.author}
                vote={book.avg_vote}
                link={`/books/${book.id}`}
              />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
