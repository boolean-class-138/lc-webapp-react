import axios from "../api/axios";
import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Container from "../components/ui/Container";
import Heading from "../components/ui/Heading";
import Paragraph from "../components/ui/Paragraph";
import Stars from "../components/ui/Stars";
import { Link } from "react-router";

export default function BookPage() {
  const [book, setBook] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchBook = () => {
    axios
      .get(`/books/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => {
        if (err.status === 404) {
          navigate("/404");
        }
      });
  };

  useEffect(fetchBook, [id, navigate]);

  return (
    <Container>
      <Link to="/">
        <i className="fa-solid fa-house"></i> Home page
      </Link>
      <section className="grid grid-cols-12 gap-4 mt-4">
        <div className="col-span-12 md:col-span-4">
          <img src={book.image} alt={book.title} />
        </div>
        <div className="col-span-12 md:col-span-8 space-y-4 bg-white p-4">
          <Heading level={1}>{book.title}</Heading>
          <Heading level={3}>{book.author}</Heading>
          <Paragraph>{book.abstract}</Paragraph>
        </div>
      </section>
      <section className="mt-4 bg-white p-4 space-y-4">
        <Heading level={2}>Recensioni</Heading>
        <ul>
          {book?.reviews?.map((review) => (
            <li className="py-2 border-b border-neutral-200" key={review.id}>
              <Heading level={4}>{review.name}</Heading>
              <Stars vote={review.vote} />
              <Paragraph>{review.text}</Paragraph>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}
