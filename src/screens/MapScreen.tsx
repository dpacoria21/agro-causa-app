import { Map } from 'mapbox-gl';
import { useEffect, useRef } from 'react';

export const MapScreen = () => {

    // const {setMap} = useContext(MapContext);

    const mapDiv = useRef<HTMLDivElement>(null);
    // const circleId = useRef<string>('');

    useEffect(() => {

        const map = new Map({
            container: mapDiv.current!, // container ID
            style: 'mapbox://styles/mapbox/satellite-v9', // style URL
            // center: userLocation, // starting position [lng, lat]
            zoom: 18, // starting zoom
        });

    }, []);

    return (
        <div>
            MapScreen
        </div>
    );
};


export default MapScreen;
