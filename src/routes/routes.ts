import { LazyExoticComponent } from 'react';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import InformationScreen from '../screens/InformationScreen';
// import AboutScreen from '../screens/AboutScreen';

type JSXComponent =  () => JSX.Element;

interface Route {
    to: string,
    path: string,
    component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string,
}

// const lazyHomeScreen = lazy(() => import('../screens/HomeScreen'));
// const lazyMapScreen = lazy(() => import('../screens/MapScreen'));
// const lazyInformationScreen = lazy(() => import('../screens/InformationScreen'));
// const lazyAboutScreen = lazy(() => import('../screens/AboutScreen'));

export const routes: Route[] = [
    {
        to: '/',
        path: '',
        component: HomeScreen,
        name: 'Home'
    },
    {
        to: '/agro-map',
        path: 'agro-map',
        component: MapScreen,
        name: 'Map'
    },
    {
        to: '/information',
        path: 'information',
        component: InformationScreen,
        name: 'Information'
    },
    // {
    //     to: '/about',
    //     path: 'about',
    //     component: AboutScreen,
    //     name: 'About'
    // }
];