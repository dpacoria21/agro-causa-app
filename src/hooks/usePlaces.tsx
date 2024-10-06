import { useEffect } from 'react';
import { getUserLocation } from '../helpers/getUserLocation';
import { usePositionStore } from '../store/position/position-store';

export const usePlaces = () => {

    const currentPosition = usePositionStore(state => state.position);
    const setPosition = usePositionStore(state => state.setPosition);
    const isLoading = usePositionStore(state => state.isLoading);

    useEffect(() => {
        getUserLocation()
            .then((lngLat: [number, number]) => {
                setPosition(lngLat[0], lngLat[1]);
            });
    }, []);

    return {
        currentPosition,
        isLoading
    };
};