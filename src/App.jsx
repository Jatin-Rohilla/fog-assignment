import "./App.css";
import logo from "./assets/logo.png";
import img1 from "./assets/1.jpeg";
import img2 from "./assets/2.jpeg";
import img3 from "./assets/3.jpeg";
import img4 from "./assets/4.jpeg";


function App() {
  return (
    <>
      <nav className="relative flex items-center justify-between sm:h-10 md:justify-center py-6 px-4 mt-2">
        <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href="" aria-label="Home">
              <img src={logo} height="40" width="40" />
            </a>
            Furniro
            <div className="-mr-2 flex items-center md:hidden">
              <button
                type="button"
                id="main-menu"
                aria-label="Main menu"
                aria-haspopup="true"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:space-x-10">
          <a
            href="#features"
            className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
          >
            Pricing
          </a>
          <a
            href="/blog"
            className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
          >
            Blog
          </a>
          <a
            href="https://docs.pingping.io"
            target="_blank"
            className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
          >
            Docs
          </a>
        </div>
        <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
          <span className="inline-flex">
            <a
              href="/login"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium text-blue-600 hover:text-blue-500 focus:outline-none transition duration-150 ease-in-out"
            >
              Login
            </a>
          </span>
          <span className="inline-flex rounded-md shadow ml-2">
            <a
              href="/signup"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 transition duration-150 ease-in-out"
            >
              Get started
            </a>
          </span>
        </div>
      </nav>

      <section className="bg-gray-200 py-20 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">Shop</h2>
          <p className="text-lg mb-6">Home </p>
        </div>
      </section>

      <div className="relative bg-gradient-to-br from-primary-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-2xl">
              <img
                src={img1}
                alt="Casual Wear"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-800 dark:text-white">
                  Casual Wear
                </h3>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-primary-600 font-bold">₹99.99</p>
                  <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-xs">
                    New
                  </span>
                </div>
                <button className="mt-4 w-full bg-primary-500 text-white py-2 px-4 rounded-lg hover:bg-primary-600 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-2xl">
              <img
                src={img2}
                alt="Summer Collection"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-800 dark:text-white">
                  Summer Collection
                </h3>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-primary-600 font-bold">₹79.99</p>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                    Sale
                  </span>
                </div>
                <button className="mt-4 w-full bg-primary-500 text-white py-2 px-4 rounded-lg hover:bg-primary-600 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-2xl">
              <img
                src={img3}
                alt="Winter Special"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-800 dark:text-white">
                  Winter Special
                </h3>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-primary-600 font-bold">₹129.99</p>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                    Limited
                  </span>
                </div>
                <button className="mt-4 w-full bg-primary-500 text-white py-2 px-4 rounded-lg hover:bg-primary-600 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-2xl">
              <img
                src={img4}
                alt="Premium Collection"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-800 dark:text-white">
                  Premium Collection
                </h3>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-primary-600 font-bold">₹199.99</p>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                    Premium
                  </span>
                </div>
                <button className="mt-4 w-full bg-primary-500 text-white py-2 px-4 rounded-lg hover:bg-primary-600 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="#"
            className="mx-1 px-3 py-2 bg-gray-200 text-gray-500 font-medium rounded-md cursor-not-allowed"
          >
            Previous
          </a>

          <a
            href="#"
            className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 font-medium hover:bg-blue-500 hover:text-gray-200 rounded-md"
          >
            1
          </a>

          <a
            href="#"
            className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 font-medium hover:bg-blue-500 hover:text-gray-200 rounded-md"
          >
            2
          </a>

          <a
            href="#"
            className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 font-medium hover:bg-blue-500 hover:text-gray-200 rounded-md"
          >
            3
          </a>

          <a
            href="#"
            className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 font-medium hover:bg-blue-500 hover:text-gray-200 rounded-md"
          >
            Next
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
