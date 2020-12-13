import Link from 'next/link';

const Header = (): JSX.Element => {
  return (
    <header className="text-gray-700 body-font">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <Link href="/">
          <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
            <img
              className="w-auto h-8 sm:h-10"
              src="/img/logo.png"
              alt="Serverless SaaS Boilerplate"
            />
          </a>
        </Link>
        <nav className="flex flex-wrap items-center justify-center text-base md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400">
          <a
            href="#features"
            className="mr-5 text-base text-gray-600 hover:text-gray-800"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="mr-5 text-base text-gray-600 hover:text-gray-800"
          >
            Pricing
          </a>
          <a
            href="#team"
            className="mr-5 text-base text-gray-600 hover:text-gray-800"
          >
            Team
          </a>
          <Link href="/blog">
            <a href="#" className="text-base text-gray-600 hover:text-gray-800">
              Blog
            </a>
          </Link>
        </nav>
        <div>
          <Link href="/login">
            <button className="inline-flex justify-center px-4 py-2 mt-4 mr-4 text-sm font-medium transition duration-150 ease-in-out bg-gray-200 border border-transparent rounded-md hover:bg-gray-300 focus:outline-none focus:border-gray-700 focus:shadow-outline-royal-blue active:bg-royal-blue-700 md:mt-0">
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button className="inline-flex justify-center px-4 py-2 mt-4 text-sm font-medium text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-royal-blue-600 hover:bg-royal-blue-500 focus:outline-none focus:border-royal-blue-700 focus:shadow-outline-royal-blue active:bg-royal-blue-700 md:mt-0">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
