import { Link } from "react-router-dom";
import "./BackLink.css";

function BackLink({ to, label }) {
  return (
    <Link to={to} className="back-link">
      <span className="back-link__arrow" aria-hidden="true">
        ←
      </span>
      {label}
    </Link>
  );
}

export default BackLink;
