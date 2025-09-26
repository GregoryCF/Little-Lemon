function Nav() {
  return (
    <nav className="container">
      <button>
        <img src="Hamburguer_Icon.svg" alt="Hamburguer icon" />
      </button>
      <img src="/Logo.svg" alt="Little Lemon's logo" />
      <button>
        <img src="Shopping_Basket_Icon.svg" alt="Shopping basket icon" />
      </button>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Reservations</a>
        </li>
        <li>
          <a href="#">Order Online</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
