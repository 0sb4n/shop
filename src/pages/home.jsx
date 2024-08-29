
import React from 'react';
import motorWindingImage from "../assets/motor.jpeg"
import { Link } from 'react-router-dom';
function SearchBar() {
  return (
    <div className="relative max-w-xl mx-auto mt-8 lg:mt-12">
      <div className="flex items-center bg-transparent shadow-lg rounded-full py-2 pl-4 pr-2">
        <input
          type="text"
          placeholder="Search for motor winding services..."
          className="flex-grow bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none"
        />
        <button className="flex items-center justify-center p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 focus:outline-none">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m2.83-2.83a7.5 7.5 0 10-10.61-10.61 7.5 7.5 0 0010.61 10.61z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="relative bg-gray-50 overflow-hidden">
      <SearchBar/>
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-gray-50 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-50 transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Professional Motor Winding</span>{' '}
                <span className="block text-indigo-600 xl:inline">Services</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                We offer top-notch motor winding solutions for fans, washing machines, motors, and more.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={motorWindingImage}
          alt="Motor winding"
        />
      </div>
    </div>
  );
}

// function CatalogueSection() {
//   const categories = [
//     { name: 'Fans', image: fanImage },
//     { name: 'Washing Machines', image: washingMachineImage },
//     { name: 'Motors', image: motorImage },
//     // Add more categories as needed
//   ];

//   return (
//     <div className="bg-gray-100 py-12" id="services">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//           <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
//             Our Services
//           </h2>
//           <p className="mt-4 text-lg leading-6 text-gray-500">
//             We specialize in the following categories:
//           </p>
//         </div>
//         <div className="mt-10">
//           <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-6">
//             {categories.map((category) => (
//               <div key={category.name} className="group relative bg-white shadow-lg rounded-lg overflow-hidden">
//                 <div className="relative w-full h-56 bg-white overflow-hidden group-hover:opacity-75">
//                   <img
//                     src={category.image}
//                     alt={category.name}
//                     className="w-full h-full object-center object-cover"
//                   />
//                 </div>
//                 <div className="mt-4 flex justify-between px-4 py-2">
//                   <h3 className="text-lg font-medium text-gray-900">
//                     <a href="#">
//                       <span aria-hidden="true" className="absolute inset-0" />
//                       {category.name}
//                     </a>
//                   </h3>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

function Footer() {
  return (
    <footer className="bg-gray-800 py-6">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center space-x-6">
        <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook" className="h-6 w-6" />
        </a>
        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <img src="https://cdn-icons-png.flaticon.com/512/1409/1409946.png" alt="Instagram" className="h-6 w-6" />
        </a>
        <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <img src="https://cdn-icons-png.flaticon.com/512/124/124034.png" alt="WhatsApp" className="h-6 w-6" />
        </a>
      </div>
      <div className="mt-6 text-center text-gray-400">
        <p>&copy; 2024 MotorWinding. All rights reserved.</p>
      </div>
    </div>
  </footer>
  );
}

function Home() {
  return (
    <div>
    
      <HeroSection />
      {/* <CatalogueSection /> */}
      <Footer />
      {/* Other sections of your website can be added here */}
    </div>
  );
}

export default Home;
