import { NavLink } from 'react-router-dom';

interface Props {
    path: string,
    label: string,
}


export const NavbarLink = ({label, path}: Props) => {
    return (
        <li>
            <NavLink 
                to={path}
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" 
                aria-current="page">{
                    label}
            </NavLink>
        </li>
    );
};
