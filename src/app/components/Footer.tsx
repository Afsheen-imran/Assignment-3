import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-4 sm:py-5 shadow-lg">
      <div className="container mx-auto text-center">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
          &copy; 2024 My Portfolio. All rights reserved.
        </p>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg lg:text-xl">
          Follow me on{' '}
          <Link href="https://www.linkedin.com/in/afsheen-imran-b623a42a2/">
            <span className="text-yellow-400 hover:text-green-400 cursor-pointer transition duration-300">
              LinkedIn
            </span>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
