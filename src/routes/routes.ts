import { LazyExoticComponent } from 'react';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';

type JSXComponent =  () => JSX.Element;

interface Route {
    to: string,
    path: string,
    component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string,
}

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
];