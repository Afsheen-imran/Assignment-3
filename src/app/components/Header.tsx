import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-4 shadow-lg">
      <nav className="container mx-auto flex flex-wrap justify-between items-center px-4">
        
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">My Portfolio</h1>
        
        
        <ul className="hidden sm:flex space-x-3 md:space-x-6 text-center">
          <li>
            <Link href="/" className="text-base sm:text-lg md:text-xl hover:text-yellow-400 font-semibold">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="text-base sm:text-lg md:text-xl hover:text-yellow-400 font-semibold">
              About
            </Link>
          </li>
          <li>
            <Link href="#portfolio" className="text-base sm:text-lg md:text-xl hover:text-yellow-400 font-semibold">
              Portfolio
            </Link>
          </li>
        </ul>

        
        <ul className="sm:hidden flex space-x-3 mt-4 w-full justify-center">
          <li>
            <Link href="/" className="text-base hover:text-yellow-400 font-semibold">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="text-base hover:text-yellow-400 font-semibold">
              About
            </Link>
          </li>
          <li>
            <Link href="#portfolio" className="text-base hover:text-yellow-400 font-semibold">
              Portfolio
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
