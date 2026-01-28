export default function Navbar() {
  return (
    <nav className="p-4 bg-white shadow-lg rounded-full max-w-sm mx-auto my-4 ">
      <ul className="flex space-x-4 justify-evenly">
        <li className="text-gray-700 hover:text-blue-500 cursor-pointer">
          Home
        </li>
        <li className="text-gray-700 hover:text-blue-500 cursor-pointer">
          About
        </li>
        <li className="text-gray-700 hover:text-blue-500 cursor-pointer">
          Projects
        </li>
        <li className="text-gray-700 hover:text-blue-500 cursor-pointer">
          Contact
        </li>
      </ul>
    </nav>
  );
}
