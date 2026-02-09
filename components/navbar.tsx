import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 bg-white shadow-lg rounded-full max-w-sm mx-auto my-4 ">
      <ul className="flex space-x-4 justify-evenly">
        <li className="text-gray-700 hover:text-blue-500 cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="text-gray-700 hover:text-blue-500 cursor-pointer">
          <Link href="/about">About</Link>
        </li>
        <li className="text-gray-700 hover:text-blue-500 cursor-pointer">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="text-gray-700 hover:text-blue-500 cursor-pointer">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
