import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="h-screen bg-[url('https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3888.jpg?t=st=1729556265~exp=1729556865~hmac=774a8dab57b1505b0373b8ab6934fcef8f32be927710cd0776a8fe0722325045')] bg-cover bg-center flex items-center justify-center transition duration-500 ease-in-out">
          <div className="text-center text-blue-600 font-semibold p-8 bg-yellow-300 bg-opacity-50 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
              I Am a Web Developer, Social Media Marketer & Graphic Designer
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl mb-5 py-6">
              With a passion for crafting exceptional digital experiences, I leverage my skills in web development and design to deliver projects that not only meet client expectations but exceed them.
            </p>
            <p className="text-base sm:text-lg md:text-xl mb-8">
              I help businesses grow online through impactful web designs, innovative marketing strategies, and creative visuals tailored to their needs.
            </p>
            <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
              <Link href="#about" className="w-full sm:w-auto bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 transform hover:scale-105 text-center">
                Learn More
              </Link>
              <Link href="mailto:afsheen6441@gmail.com" className="w-full sm:w-auto bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300 transform hover:scale-105 text-center">
                Contact Me
              </Link>
              <Link href="https://github.com/Afsheen-imran" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 transform hover:scale-105 text-center">
                View My Repository
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 sm:py-20 bg-gradient-to-r from-yellow-200 to-blue-200 text-blue-600 text-center transition transform hover:scale-105">
          <div className="container mx-auto p-6 sm:p-10 rounded-lg shadow-lg transition duration-500 hover:shadow-xl bg-gradient-to-r from-purple-200 to-red-200">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">About Me</h3>
            <p className="text-lg sm:text-xl md:text-2xl leading-7 max-w-5xl mx-auto mb-6 sm:mb-8 font-semibold transition-transform duration-300 hover:text-blue-800 hover:scale-105 transform-gpu">
              I am a frontend web developer, social media marketer, Shopify store specialist, content writer, and graphic designer with over 2 years of experience. I specialize in creating responsive websites using HTML, CSS, JavaScript, TypeScript, React, and Next.js. My goal is to help businesses grow through effective social media campaigns and optimized Shopify stores, creating engaging solutions that connect with audiences and elevate brands.
            </p>
            <Link href="#portfolio" className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 transform hover:scale-105">
              View My Work
            </Link>
          </div>
        </section>

        {/* Projects Section */}
        <section id="portfolio" className="py-12 sm:py-16 bg-green-100 text-center">
          <div className="container mx-auto">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">My Projects</h3>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 font-semibold">
              A glimpse of my latest projects in web development. Explore a selection of projects that highlight my journey in web development. Each project showcases the skills I have honed and my dedication to creating exceptional web experiences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Project 1: Pizza Parlour Website */}
              <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105">
                <Image 
                  src="/images/pizza-parlour.jpg" 
                  alt="Pizza Parlour Website" 
                  width={500} 
                  height={300} 
                  className="w-full h-64 object-cover" 
                />
                <div className="p-4">
                  <h4 className="text-xl sm:text-2xl font-semibold mb-2">Pizza Parlour Website</h4>
                  <p className="text-gray-600 text-base sm:text-lg font-semibold">A modern and responsive website for a pizza restaurant built with Next.js.</p>
                </div>
              </div>

              {/* Project 2: Countdown Timer */}
              <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105">
                <Image 
                  src="/images/countdown-timer.gif" 
                  alt="Countdown Timer" 
                  width={500} 
                  height={300} 
                  className="w-full h-64 object-cover" 
                />
                <div className="p-4">
                  <h4 className="text-xl sm:text-2xl font-semibold mb-2">Countdown Timer</h4>
                  <p className="text-gray-600 text-base sm:text-lg">A sleek and interactive countdown timer made with Next.js and TypeScript.</p>
                </div>
              </div>

              {/* Project 3: My Portfolio */}
              <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105">
                <Image 
                  src="/images/my-portfolio.png" 
                  alt="My Portfolio" 
                  width={500} 
                  height={300} 
                  className="w-full h-64 object-cover" 
                />
                <div className="p-4">
                  <h4 className="text-xl sm:text-2xl font-semibold mb-2">My Portfolio</h4>
                  <p className="text-gray-600 text-base sm:text-lg">A personal portfolio website showcasing my skills and projects using Next.js.</p>
                </div>
              </div>

              {/* Project 4: Weather Widget */}
              <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105">
                <Image 
                  src="/images/weather-widget.jpg" 
                  alt="Weather Widget" 
                  width={500} 
                  height={300} 
                  className="w-full h-64 object-cover" 
                />
                <div className="p-4">
                  <h4 className="text-xl sm:text-2xl font-semibold mb-2">Weather Widget</h4>
                  <p className="text-gray-600 text-base sm:text-lg">A real-time weather widget created with Next.js and TypeScript.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
