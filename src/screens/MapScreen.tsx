import { Map, Marker, Popup } from 'mapbox-gl';
import { useEffect, useRef } from 'react';
import { usePlaces } from '../hooks/usePlaces';


import * as turf from '@turf/turf';
import 'mapbox-gl/dist/mapbox-gl.css';
import { usePositionStore } from '../store/position/position-store';
import { InformationScreen } from './InformationScreen';

export const MapScreen = () => {

    // const {setMap} = useContext(MapContext);

    const mapDiv = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<Map | null>(null);
    const {isLoading, currentPosition} = usePlaces();
    const setPosition = usePositionStore(state => state.setPosition);
    const circleId = useRef<string>('');
    const marker = useRef<Marker>(new Marker());

    useEffect(() => {
        if(!isLoading && !mapInstance.current) {

            mapInstance.current = new Map({
                container: mapDiv.current!, // container ID
                style: 'mapbox://styles/mapbox/satellite-v9', // style URL
                center: [currentPosition.lng, currentPosition.lat], // starting position [lng, lat]
                zoom: 16, // starting zoom
                accessToken: import.meta.env.VITE_MAPBOX_KEY,
            });

            mapInstance.current.on('click', (e) => {
                console.log(e);
                const {lng, lat} = e.lngLat;
                console.log(lng, lat);

            });

            const updateCircle = (e: Event) => {

                if(mapInstance.current===null) return;
                if(marker.current!=null) marker.current.remove();

                const {lat, lng} = e.lngLat;
                setPosition(lng, lat);

                const center = [lng, lat];
                const radius = 0.1;
                const options = { steps: 64, units: 'kilometers', properties: { foo: 'bar' } };
                const circle = turf.circle(center, radius, options);

                // add a circle on a map
                if (circleId.current) {
                    if (mapInstance.current.getLayer(circleId.current)) {
                        mapInstance.current.removeLayer(circleId.current);
                    }
                    if (mapInstance.current.getSource(circleId.current)) {
                        mapInstance.current.removeSource(circleId.current);
                    }
                }

                const newCircleId = `circle-${Date.now()}`; // ID único para el círculo

                // Agregar el círculo al mapa
                mapInstance.current.addSource(newCircleId, {
                    type: 'geojson',
                    data: circle,
                });

                const popup = new Popup()
                    .setHTML(`
                    <h6>$asdfdasfsd</h6>
                    <p>$asdfasdfsdafas</p>
                `);

                marker.current
                    .setPopup(popup)
                    .setLngLat([lng, lat])
                    .addTo(mapInstance.current);

                mapInstance.current.addLayer({
                    id: newCircleId,
                    type: 'fill',
                    source: newCircleId,
                    layout: {},
                    paint: {
                        'fill-color': '#00f', // Color del círculo
                        'fill-opacity': 0.5,
                    },
                });

                circleId.current = newCircleId;

            };

            mapInstance.current.on('click', updateCircle);
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
        <>
            <div
                id='map-container'
                ref={mapDiv}
                style={{
                    height: '70vh',
                    width: '100vw',
                    top: 0,
                    left: 0,
                }}
            >
                {/* {[currentPosition.lng, currentPosition.lat]} */}
            </div>
            <div className='p-5'>
                {/* Realizar la llamada de la api para mostrar la informacion */}
                <InformationScreen />
            </div>
        </>
    

    );
};


export default MapScreen;
