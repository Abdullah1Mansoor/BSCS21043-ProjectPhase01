
import './Footer.css';
//this is my footer component
const Footer = () => {
  return (
    <footer className="footer">
      <ul>
        <li><a href="#">Support</a></li>
        <li><a href="#">Community</a></li>
        <li><a href="#">Hosting</a></li>
        <li><a href="#">About</a></li>
      </ul>
      <div className="social-icons">
        {/* Social media icons */}
      </div>
      <p>© 2024 Airbnb, Inc. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
