import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-5 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-2xl hover:text-yellow-400 font-semibold">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="text-2xl hover:text-yellow-400 font-semibold">
              About
            </Link>
          </li>
          <li>
            <Link href="#portfolio" className="text-2xl hover:text-yellow-400 font-semibold">
              Portfolio
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
