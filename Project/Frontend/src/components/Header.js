import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark mb-4 header__navbar"
    >
      <div
        className="container-fluid"
      >
        <a
          className="navbar-brand"
          href="/"
        >
          Contact Management
        </a>
        <button
          className="btn btn-primary header__add-button"
          onClick={() => navigate('/add-contact')}
        >
          Add Contact
        </button>
      </div>
    </nav>
  );
};

export default Header;
