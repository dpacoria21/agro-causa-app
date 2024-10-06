// import { useEffect } from 'react';
import featuresApi from '../apis/featuresApi';
import { IconFeature } from '../components/IconFeature';
import { usePositionStore } from '../store/position/position-store';

interface Feature {
    iconPath: string,
    label: string,
}

const features: Feature[] = [
    {
        label: 'Humidity',
        iconPath: './feature1.png'
    },
    {
        label: 'Surface Temperature',
        iconPath: './feature3.png'
    },
    {
        label: 'Surface Humidity',
        iconPath: './feature2.png'
    },
];

export const InformationScreen = () => {

    const position = usePositionStore(state => state.position);
    const setFeatures = usePositionStore(state => state.setFeatures);

    const getFeatures = async(lng: number, lat:number) => {
        const data = await featuresApi.post('/obtener-humedad', {
            latitud: lat,
            longitud: lng
        });
        setFeatures(data.data.humedad, data.data.temperatura_superficie, data.data.humedad_superficie);
    };

    const humidity = usePositionStore(state => state.humidity);
    const humiditySurface = usePositionStore(state => state.surface_humidity);
    const temperatureSurface = usePositionStore(state => state.surface_temperature);
    
    getFeatures(position.lng, position.lat);

    // useEffect(() => {

    // }, []);

    return (
        <div className='flex w-full bg-slate-200 rounded-md'>
            <div className='flex flex-col gap-1 w-1/2'>

                <div key={features[0].label} className='flex items-center justify-between px-8'>
                    <IconFeature {...features[0]}/>
                    <p className='text-lg font-bold'>{humidity?.toFixed(2)}%</p>
                </div>

                <div key={features[1].label} className='flex items-center justify-between px-8'>
                    <IconFeature {...features[1]}/>
                    <p className='text-lg font-bold'>{temperatureSurface?.toFixed(2)}%</p>
                </div>

                <div key={features[2].label} className='flex items-center justify-between px-8'>
                    <IconFeature {...features[2]}/>
                    <p className='text-lg font-bold'>{humiditySurface?.toFixed(2)}%</p>
                </div>
            </div>
            <div className='flex w-1/2 bg-slate-950'>
                
            </div>
        </div>
    );
};