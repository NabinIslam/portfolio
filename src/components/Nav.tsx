import { Cabin_Sketch } from 'next/font/google';

const cabinSketch = Cabin_Sketch({
  weight: ['700'],
  subsets: ['latin'],
});

const Nav = () => {
  return (
    <nav className="bg-[#191C26] text-white py-4 sticky top-0 z-50 border-b-[1px] border-gray-700 shadow-2xl hidden lg:block">
      <div className="container flex justify-between items-center">
        <div className="basis-1/2">
          <a
            className={`font-bold text-4xl hover:text-green-600 ${cabinSketch.className} cursor-pointer duration-300`}
          >
            Nabin
          </a>
        </div>
        <div className="basis-1/2">
          <ul className="flex items-center justify-end gap-10">
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
