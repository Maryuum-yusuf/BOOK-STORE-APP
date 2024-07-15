import { Link } from "react-router-dom";
import { useContext } from "react";

const HeaderTop = ({ setToggle, toggle,cartInfoLength }) => {
  return (
    <div className="header-top">
      <div
        onClick={() => setToggle((prev) => !prev)}
        className="header-top-menu"
      >
        {toggle ? <i className="bi bi-x"></i> : <i className="bi bi-list"></i>}
      </div>
      <Link to="/" className="header-middle-logo">
        <b>Book</b>
        <i className="bi bi-book"></i>
        <b>Store</b>
      </Link>
      <div className="header-top-text">Welcome To Book Store</div>
      <div>
      <Link to="/login" className="header-top-link">
        <i className="bi bi-person-fill"></i> Login
      </Link>
      <Link to="/cart" className="header-middle-cart-wrapper">
        {cartInfoLength > 0 && (
          <b className="cart-notification">{cartInfoLength}</b>
        )}
        <i className="bi bi-cart2"></i>
      </Link>
    </div>
    </div>
    
  );
};

export default HeaderTop;
