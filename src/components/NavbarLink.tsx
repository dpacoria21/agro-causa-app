import { NavLink } from 'react-router-dom';
import { useUIStore } from '../store/ui/ui-store';

interface Props {
    path: string,
    label: string,
}


export const NavbarLink = ({label, path}: Props) => {

    const closeMenu = useUIStore(state => state.closeMenu);

    return (
        <li>
            <NavLink
                onClick={closeMenu} 
                to={path}
                className={({isActive}) => isActive ? 'block py-2 px-3 text-blue-100 bg-blue-700 rounded dark:text-white ' : 'block py-2 px-3 text-blue-500 rounded  dark:text-white '} 
                aria-current="page">{
                    label}
            </NavLink>
        </li>
    );
};
