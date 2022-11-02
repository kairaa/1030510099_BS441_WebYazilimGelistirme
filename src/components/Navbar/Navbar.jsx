import "./Navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        RPS GAME
      </Link>
      <ul>
        <CustomLink to="/normal">Normal Mode</CustomLink>
        <CustomLink to="/memory">Memory Mode</CustomLink>
      </ul>
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
