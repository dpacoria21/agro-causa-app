import { useState } from 'react';
import { useForm } from 'react-hook-form';
import chatApi from '../apis/chatApi';
import { usePositionStore } from '../store/position/position-store';
import Markdown from 'react-markdown';

interface FormInputs {
    question: string,
    nitrogeno: string,
    potacio: string
}

const getResponse = async(question: string, temperatura: string, humedad: string, suelo: string, nitrogeno: string, potacio: string) => {
    const body = {
        question,
        conditions: {
            temperatura,
            humedad,
            suelo,
            nitrogeno,
            potacio
        }
    };
    const data = await chatApi('/chat/response', {
        data: body
    });
    console.log(data);
    return data.data.result;
};

export const ChatComponent = () => {

    const {register, handleSubmit} = useForm<FormInputs>();

    const humidity = usePositionStore(state => state.humidity);
    const surfaceTemperature = usePositionStore(state => state.surface_temperature);
    const surfaceHumidity = usePositionStore(state => state.surface_temperature);
    const [aiResponse, setAiResponse] = useState<string>('');

    const onSubmit = async (data: FormInputs) => {
        console.log(data);
        const result = await getResponse(data.question, surfaceTemperature?.toFixed(2)+'grados', humidity?.toFixed(2)+'%', surfaceHumidity!.toFixed(2), data.nitrogeno, data.potacio);
        setAiResponse(result);
        console.log(result);
    };

    return (
        
        <div className='flex flex-col p-4'>
    
            <form className='flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
                <div className=''>
                    <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Pregunta</label>
                    <input placeholder='alguna pregunta?' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" {...register('question')} />
                </div>
                <div className='flex gap-4'>
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Nitrogeno</label>
                        <input placeholder='50%' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" {...register('nitrogeno')} />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Potacio</label>
                        <input placeholder='50%' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" {...register('potacio')} />
                    </div>
                    
                </div>

                <button className='bg-blue-600 mt-2 rounded-md py-1 text-white' type='submit'>
                    Consultar
                </button>
            </form>

            {
                aiResponse=='' &&
                (
                    <div className="mt-6 p-4 bg-gray-100 rounded-md">
                        <h3 className="font-semibold mb-2">Respuesta de la IA:</h3>
                        <Markdown>{aiResponse}</Markdown>
                    </div>
                )
            }
        </div>
    );
};
