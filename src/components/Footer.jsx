import { Link } from "react-router";

function Footer() {
  return (
    <footer>
      <div className="container">
        <img
          src="/restaurant.jpg"
          width={162}
          height={279}
          alt="A nice restaurant"
        />
        <div>
          <div>
            <h5>Doormat Navigation</h5>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <span style={{ color: "gray", cursor: "not-allowed" }}>
                  About
                </span>
              </li>
              <li>
                <span style={{ color: "gray", cursor: "not-allowed" }}>
                  Menu
                </span>
              </li>
              <li>
                <Link to="/booking">Reservations</Link>
              </li>
              <li>
                <span style={{ color: "gray", cursor: "not-allowed" }}>
                  Order Online
                </span>
              </li>
              <li>
                <span style={{ color: "gray", cursor: "not-allowed" }}>
                  Login
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <ul>
              <li>Address</li>
              <li>Phone number</li>
              <li>Email</li>
            </ul>
          </div>
          <div>
            <h5>Social Media Links</h5>
            <ul>
              <li>
                <Link to="https://www.instagram.com" target="_blank">
                  Instagram
                </Link>
              </li>
              <li>
                <Link to="https://www.facebook.com" target="_blank">
                  Facebook
                </Link>
              </li>
              <li>
                <Link to="https://www.x.com" target="_blank">
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
