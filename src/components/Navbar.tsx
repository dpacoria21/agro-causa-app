import { routes } from '../routes/routes';
import { NavbarLink } from './NavbarLink';

export const Navbar = () => {
    return (
        <nav>
            <div>
                <a href=""></a>
                <button></button>
                <div>
                    <ul>
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
