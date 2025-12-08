import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Médicos & Dentistas</h1>
      <nav>
        <Link>Home</Link>
        <Link>Seja voluntário</Link>
      </nav>
    </header>
  );
};

export default Header;
