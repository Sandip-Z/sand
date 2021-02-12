import "./index.css";
const NavSection = () => {
  return (
    <nav className="bg-gray-900 flex justify-between shadow-2xl">
      <div>logo</div>
      <div className="menu-wrapper flex">
        <ul className="flex">
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
        <ul className="flex social-media">
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
