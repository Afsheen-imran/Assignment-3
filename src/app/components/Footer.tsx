import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-5 shadow-lg">
      <div className="container mx-auto text-center text-2xl">
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
        <p>
          Follow me on {''}
          <Link href="https://www.linkedin.com/in/afsheen-imran-b623a42a2/">
            <span className="text-yellow-400 hover:text-green-400 cursor-pointer">
              LinkedIn
            </span>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
