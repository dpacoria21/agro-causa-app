import { lazy, LazyExoticComponent } from 'react';

type JSXComponent =  () => JSX.Element;

interface Route {
    to: string,
    path: string,
    component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string,
}

const lazyHomeScreen = lazy(() => import('../screens/HomeScreen'));
const lazyMapScreen = lazy(() => import('../screens/MapScreen'));
const lazyInformationScreen = lazy(() => import('../screens/InformationScreen'));
const lazyAboutScreen = lazy(() => import('../screens/AboutScreen'));

export const routes: Route[] = [
    {
        to: '/',
        path: '',
        component: lazyHomeScreen,
        name: 'Home'
    },
    {
        to: '/agro-map',
        path: 'agro-map',
        component: lazyMapScreen,
        name: 'Map'
    },
    {
        to: '/information',
        path: 'information',
        component: lazyInformationScreen,
        name: 'Information'
    },
    {
        to: '/about',
        path: 'about',
        component: lazyAboutScreen,
        name: 'About'
    }
];