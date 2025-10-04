import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router";

const routes = [
  { name: "Home", disabled: false, to: "/" },
  { name: "About", disabled: true },
  { name: "Menu", disabled: true },
  { name: "Reservations", disabled: false, to: "/booking" },
  { name: "Order Online", disabled: true },
  { name: "Login", disabled: true },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1080px)",
  });
  const navigate = useNavigate();

  const handleNavigation = (to) => {
    setOpen(false);
    navigate(to);
  };

  return (
    <nav className="container">
      <button onClick={() => setOpen(!open)}>
        <img src="Hamburguer_Icon.svg" alt="Hamburguer icon" />
      </button>
      <img src="/Logo.svg" alt="Little Lemon's logo" />
      <button>
        <img src="Shopping_Basket_Icon.svg" alt="Shopping basket icon" />
      </button>
      <ul style={{ height: isDesktopOrLaptop ? "auto" : open ? 288 : 0 }}>
        {routes.map(({ name, disabled, to }) => (
          <li key={name}>
            {disabled ? (
              <span style={{ color: "gray", cursor: "not-allowed" }}>
                {name}
              </span>
            ) : (
              <button onClick={() => handleNavigation(to)}>{name}</button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
