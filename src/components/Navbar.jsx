import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            className="font-medium hover:text-neutral-600 uppercase"
            to="/books/create"
          >
            Crea Libro
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
