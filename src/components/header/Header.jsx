import { useState } from "react";
import "./header.css";
import HeaderTop from "./HeaderTop";
import Navbar from "./Navbar";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="header">
        <HeaderTop toggle={toggle} setToggle={setToggle} />
        <Navbar setToggle={setToggle} toggle={toggle} />
    </header>
  );
};

export default Header;
