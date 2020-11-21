import React from 'react';
import { func } from 'prop-types';
import Link from 'next/link';
import XIcon from 'components/Icons/XIcon';
import NAV_ITEMS from '../NAV_ITEMS';

const MobileMenu = ({ closeMobileMenu }) => {
  return (
    <div className='absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden'>
      <div className='bg-white divide-y-2 rounded-lg shadow-lg dark:bg-dim ring-1 ring-black dark:ring-white ring-opacity-5'>
        <div className='px-5 pt-5 pb-6'>
          <div className='flex items-center justify-between'>
            <div>
              <img
                className='w-auto h-8'
                src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                alt='Workflow'
              />
            </div>

            <div className='-mr-2'>
              <button
                type='button'
                className='inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md dark:text-gray-100 dark:bg-dim hover:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-500'
                onClick={closeMobileMenu}
              >
                <span className='sr-only'>Close menu</span>
                <XIcon className='w-6 h-6' />
              </button>
            </div>
          </div>

          <div className='mt-6'>
            <nav className='grid grid-cols-1 gap-7'>
              {NAV_ITEMS.map(({ label, path }) => (
                <Link key={`${label}-mobile`} href={path}>
                  <a className='flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700'>
                    <div className='ml-4 text-base font-medium text-gray-900 dark:text-gray-50'>
                      {label}
                    </div>
                  </a>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

MobileMenu.propTypes = {
  closeMobileMenu: func.isRequired,
};

MobileMenu.defaultProps = {};

export default MobileMenu;
