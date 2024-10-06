import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Position {
    lng: number,
    lat: number,
}

interface State {
    position: Position,
    humidity: number | undefined,
    surface_temperature: number | undefined,
    surface_humidity: number | undefined,

    setPosition: (lng: number, lat: number) => void,
    setFeatures: (humidity: number, surface_temperature: number, surface_humidity: number) => void,
}


export const usePositionStore = create<State>()(
    persist(
        (set) => ({
            
            position: {} as Position,
            humidity: undefined,
            surface_humidity: undefined,
            surface_temperature: undefined,
        
            setPosition: (lng, lat) => set({
                position: {lng, lat},
            }),
        
            setFeatures: (humidity, surface_temperature, surface_humidity) => set({
                humidity,
                surface_temperature,
                surface_humidity,
            })
            
        }),
        {
            name: 'current-position'
        }
    )
);