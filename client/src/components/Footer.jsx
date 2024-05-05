import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      <footer className="bg-white w-full py-8">
        <div className="max-w-screen-xl px-4 mx-auto">
          <ul className="flex flex-wrap justify-between max-w-screen-md mx-auto text-lg font-light">
            <li className="my-2">
              <a className="text-gray-400 hover:text-stone-400 dark:text-gray-300 dark:hover:text-stone-400 transition-colors duration-200" href="#">
                FAQ
              </a>
            </li>
            <li className="my-2">
              <a className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-stone-400 transition-colors duration-200" href="#">
                Configuration
              </a>
            </li>
            <li className="my-2">
              <a className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-stone-400 transition-colors duration-200" href="#">
                Github
              </a>
            </li>
            <li className="my-2">
              <a className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-stone-400 transition-colors duration-200" href="#">
                LinkedIn
              </a>
            </li>
          </ul>
          <div className="pt-8 flex max-w-xs mx-auto items-center justify-between">
            <a href="#" className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-stone-500">
              <svg width="20" height="20" fill="currentColor" className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-stone-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
              </svg>
            </a>
            {/* Add other social icons */}
          </div>
          <div className="text-center pt-10 sm:pt-12 font-light flex items-center justify-center">
            <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
              <div className="relative">
                <input type="text" id="form-subscribe-Subscribe" className="rounded-lg border-transparent flex-1 appearance-none border border-stone-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-700 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-transparent" placeholder="Email"/>
              </div>
              <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-stone-400 rounded-lg shadow-md hover:bg-stone-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                Subscribe
              </button>
            </form>
          </div>
          <div className="text-center text-gray-500 dark:text-gray-200 pt-10 sm:pt-12 font-light flex items-center justify-center">
            {/* Add footer content */}
          </div>
        </div>
      </footer>
    </div>
  );
}
