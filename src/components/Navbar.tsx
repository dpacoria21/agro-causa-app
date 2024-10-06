import { routes } from '../routes/routes';
import { useUIStore } from '../store/ui/ui-store';
import { NavbarLink } from './NavbarLink';

export const Navbar = () => {

    const isOpen = useUIStore(state => state.isMenuOpen);
    const openMenu = useUIStore(state => state.openMenu);
    const closeMenu = useUIStore(state => state.closeMenu);

    return (
        <nav className='bg-white border-gray-200 dark:bg-gray-900'>
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                <a className='flex w-fit items-center space-x-3 rtl:space-x-reverse' href="/">
                    <img src="./logoApp.jpeg" className="h-14" alt="Flowbite Logo" />
                    {/* Colocar el logo */}
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">EcoCausa</span>
                </a>
                <button
                    onClick={isOpen ? closeMenu : openMenu}
                    data-collapse-toggle="navbar-default" 
                    type="button" 
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
                    aria-controls="navbar-default" 
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div
                    className={`${isOpen ? '' : 'hidden'} w-full md:block md:w-auto`}              id='navbar-default'
                >
                    <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
                        {
                            routes.map((route, i) => (
                                <NavbarLink key={route.name+i} label={route.name} path={route.to} />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};
