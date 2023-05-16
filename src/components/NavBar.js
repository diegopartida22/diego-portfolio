function NavBar() {
  return (
    <nav className="bg-gray-800">
      <ul className="flex justify-between items-center p-4">
        <li>
          <a href="/" className="text-gray-300 hover:text-white">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="text-gray-300 hover:text-white">
            About
          </a>
        </li>
        <li>
          <a href="/projects" className="text-gray-300 hover:text-white">
            Projects
          </a>
        </li>
        <li>
          <a href="/contact" className="text-gray-300 hover:text-white">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
