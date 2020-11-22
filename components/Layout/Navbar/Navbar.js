import { useState } from 'react';
import {} from 'prop-types';
import { Transition } from '@headlessui/react';
import Link from 'next/link';

import MenuIcon from 'components/Icons/MenuIcon';
import MobileMenu from './elements/MobileMenu';
import NAV_ITEMS from './NAV_ITEMS';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className='relative bg-white dark:bg-dim'>
      <div className='flex items-center justify-between max-w-6xl px-4 py-6 mx-auto border-b border-gray-200 dark:border-gray-700 sm:px-6 md:justify-start md:space-x-10 lg:space-x-0'>
        {/* logo */}
        <div className='flex justify-start lg:w-0 lg:flex-1'>
          <Link href='/'>
            <a>
              <span className='sr-only'>monoppa</span>
              <h1 className='text-2xl tracking-widest'>
                <span className='text-gray-900 dark:text-gray-50'>mon</span>
                <span className='text-gray-400 dark:text-gray-400'>oppa</span>
              </h1>
            </a>
          </Link>
        </div>

        {/* mobile menu button */}
        <div className='-my-2 -mr-2 md:hidden'>
          <button
            type='button'
            className='inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md dark:text-gray-100 dark:bg-dim hover:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-500'
            onClick={() => setShowMobileMenu(true)}
          >
            <span className='sr-only'>Open menu</span>
            <MenuIcon className='w-6 h-6' />
          </button>
        </div>

        {/* nav items */}
        <div className='hidden md:flex'>
          <nav className='space-x-10 md:flex'>
            {NAV_ITEMS.map(({ label, path }) => (
              <Link key={label} href={path}>
                <a className='text-base font-medium text-gray-500 dark:text-gray-50 hover:text-gray-900 dark:hover:text-gray-300'>
                  {label}
                </a>
              </Link>
            ))}
          </nav>
        </div>

        <div className='items-center justify-end hidden md:flex md:flex-1 lg:w-0'></div>
      </div>

      <Transition
        show={showMobileMenu}
        enter='duration-200 ease-out'
        enterFrom='opacity-50 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <MobileMenu closeMobileMenu={() => setShowMobileMenu(false)} />
      </Transition>
    </div>
  );
};

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
