import { Map, Marker, Popup } from 'mapbox-gl';
import { useEffect, useRef } from 'react';
import { usePlaces } from '../hooks/usePlaces';

import 'mapbox-gl/dist/mapbox-gl.css';

export const MapScreen = () => {

    // const {setMap} = useContext(MapContext);

    const mapDiv = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<Map | null>(null);
    const {isLoading, currentPosition} = usePlaces();
    // const circleId = useRef<string>('');

    useEffect(() => {
        if(!isLoading && !mapInstance.current) {

            mapInstance.current = new Map({
                container: mapDiv.current!, // container ID
                style: 'mapbox://styles/mapbox/satellite-v9', // style URL
                center: [currentPosition.lng, currentPosition.lat], // starting position [lng, lat]
                zoom: 15, // starting zoom
                accessToken: import.meta.env.VITE_MAPBOX_KEY,
            });

            mapInstance.current.on('click', (e) => {
                console.log(e);
                const {lng, lat} = e.lngLat;
                console.log(lng, lat);

            });

        }

    }, [isLoading]);

    if(isLoading) {
        return (
            <h1>
                esta cargando...
                
            </h1>
        );
    }

    return (
        <div
            id='map-container'
            ref={mapDiv}
            style={{
                height: '90vh',
                width: '100vw',
                // position: 'fixed',
                top: 0,
                left: 0,
            }}
        >
            {/* {[currentPosition.lng, currentPosition.lat]} */}
        </div>
    );
};


export default MapScreen;
