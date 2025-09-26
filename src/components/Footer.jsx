function Footer() {
  return (
    <footer>
      <div className="container">
        <img src="/restaurant.jpg" width={162} height={279} alt="A nice restaurant" />
        <div>
          <div>
            <h5>Doormat Navigation</h5>
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
          </div>
          <div>
            <h5>Contact</h5>
            <ul>
              <li>
                Address
              </li>
              <li>
                Phone number
              </li>
              <li>
                Email
              </li>
            </ul>
          </div>
          <div>
            <h5>Social Media Links</h5>
            <ul>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
