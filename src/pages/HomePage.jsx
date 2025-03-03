import axios from "../api/axios";
import { useEffect, useState } from "react";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";
import { useLoaderContext } from "../contexts/LoaderContext";

export default function HomePage() {
  const [books, setBooks] = useState([]);
  const { setIsLoading } = useLoaderContext();

  const fetchBooks = () => {
    setIsLoading(true);
    axios
      .get("/books/")
      .then((res) => {
        setBooks(res.data);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(fetchBooks, [setIsLoading]);

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
