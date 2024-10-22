import Link from 'next/link';
import { TfiAlignJustify } from "react-icons/tfi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-4 shadow-lg">
      <nav className="container mx-auto flex flex-wrap justify-between items-center px-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">My Portfolio</h1>
        
        {/* Mobile Navigation Trigger */}
        <Sheet>
          <SheetTrigger>
            <TfiAlignJustify className="text-2xl cursor-pointer md:hidden" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Navbar</SheetTitle>
              <SheetDescription>
                <ul className="flex flex-col space-y-3 mt-4">
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
                      Projects
                    </Link>
                  </li>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        {/* Desktop Navigation Links */}
        <ul className='hidden md:flex space-x-4'>
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
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
