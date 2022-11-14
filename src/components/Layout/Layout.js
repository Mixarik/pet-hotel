import { Outlet } from "react-router";
import { Link } from "react-router-dom";

const Layout = () => (
  <div className="container">
    <nav className="bg-light p-3">
      <div className="me-3 d-inline-block">
        <Link to="/pets">Pets</Link>
      </div>
      <Link to="/pet-owners">Pet Owners</Link>
    </nav>
    <Outlet />
  </div>
);

export default Layout;
