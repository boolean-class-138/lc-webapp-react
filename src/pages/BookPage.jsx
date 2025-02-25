import axios from "../api/axios";
import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";

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

  return <h1>Pagina del libro: {book.title}</h1>;
}
