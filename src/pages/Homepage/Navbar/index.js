import "./index.css";
const NavSection = () => {
  return (
    <nav>
      <div>logo</div>
      <div className="menu-wrapper">
        <ul>
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>Blog</li>
          </a>
          <a href="#">
            <li>Portfolio</li>
          </a>
          <a href="#">
            <li>Services</li>
          </a>
          <a href="#">
            <li>Contact</li>
          </a>
        </ul>
        <ul className="social-media">
          <a href="#">
            <li>github</li>
          </a>
          <a href="#">
            <li>Twitter</li>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default NavSection;
