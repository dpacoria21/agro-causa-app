import { useEffect } from 'react';
import { getUserLocation } from '../helpers/getUserLocation';

export const usePlaces = () => {

    

    useEffect(() => {
        getUserLocation()
            .then((lngLat: [number, number]) => {
                console.log(lngLat);
                // funcion de zustand para guardar posicion
            });
    }, []);

    return {
        
    };
};