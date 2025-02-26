import Heading from "./Heading";
import Button from "./Button";
import { Link } from "react-router";
import Stars from "./Stars";

export default function Card({ image, title, author, content, link, vote }) {
  return (
    <div className="bg-white flex rounded-xl shadow h-full">
      <div className="w-1/2">
        <img className="h-full object-cover" src={image} alt={title} />
      </div>
      <div className="p-4 w-1/2 space-y-2 flex flex-col">
        <Heading level={4}>{title}</Heading>
        <Stars vote={vote} />
        <Heading level={6}>{author}</Heading>
        <p className="text-sm">{content}</p>
        <div className="mt-auto text-center">
          <Link to={link}>
            <Button>Leggi di più</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
