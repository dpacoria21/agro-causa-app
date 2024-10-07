import { NavLink } from 'react-router-dom';
import { GoalComponent } from '../components/GoalComponent';
import { ParticipantComponent } from '../components/ParticipantComponent';

interface Goal {
    title: string,
    description: string,
    iconPath: React.ReactNode
}
const goals: Goal[] = [
    {
        title: 'Nuestro Objetivo',
        description: 'Poder brindar información en tiempo real sobre la ubicación seleccionada en el mapa y poder consultar a una IA dependiendo de esta información',
        iconPath: <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-crosshair" viewBox="0 0 16 16">
            <path d="M8.5.5a.5.5 0 0 0-1 0v.518A7 7 0 0 0 1.018 7.5H.5a.5.5 0 0 0 0 1h.518A7 7 0 0 0 7.5 14.982v.518a.5.5 0 0 0 1 0v-.518A7 7 0 0 0 14.982 8.5h.518a.5.5 0 0 0 0-1h-.518A7 7 0 0 0 8.5 1.018zm-6.48 7A6 6 0 0 1 7.5 2.02v.48a.5.5 0 0 0 1 0v-.48a6 6 0 0 1 5.48 5.48h-.48a.5.5 0 0 0 0 1h.48a6 6 0 0 1-5.48 5.48v-.48a.5.5 0 0 0-1 0v.48A6 6 0 0 1 2.02 8.5h.48a.5.5 0 0 0 0-1zM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
        </svg>,
    }, 
    {
        title: 'Por Qué Lo Hacemos',
        description: 'Queremos hacer que los diferentes agricultores puedan aprovechar al máximo la información sobre sus tierras. Mediante el uso de un mapa, buscamos ofrecer datos como humedad, temperatura, nitrógeno y potasio. Además, podrán consultar a una IA si es factible sembrar ciertos cultivos dependiendo de estas condiciones.',
        iconPath: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-exclamation-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
        </svg>
    },
    {
        title: 'Quiénes Somos',
        description: 'Somos estudiantes de Ingeniería de Sistemas que queremos ayudar a los agricultores peruanos para ver qué es lo que pueden sembrar según su ubicación',
        iconPath: <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="black" className="bi bi-people" viewBox="0 0 16 16"><path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/></svg>
    }
];

export interface Participant {
    fullName: string,
    university: string,
    role: string,
}

const participants: Participant[] = [
    {
        fullName: 'Diego Pacori',
        university: 'Universidad Nacional de San Agustin',
        role: 'Front-End Developer'
    },
    {
        fullName: 'Gustavo Ordoño',
        university: 'Universidad Nacional de San Agustin',
        role: 'Back-End Developer'
    },
    {
        fullName: 'Anthony Moroccoire',
        university: 'Universidad Nacional de San Agustin',
        role: 'Back-End Developer'
    },
    {
        fullName: 'Bryan Hancco',
        university: 'Universidad Nacional de San Agustin',
        role: 'Back-End Developer'
    },
    {
        fullName: 'Franco Cardenas',
        university: 'Universidad Nacional de San Agustin',
        role: 'Back-End Developer'
    },
    
];

export const HomeScreen = () => {



    return (
        <div className="flex flex-col">
            <div className='flex flex-col gap-2 w-full justify-center items-center h-96'>
                <h1 className='font-bold text-4xl text-center'>Bienvenido a Agro-Causa</h1>
                <p className='text-slate-500'>La aplicación que necesitas para tus cultivos</p>
                <div className='mt-3'>
                    <NavLink className={'px-3 py-2 bg-slate-800 rounded-md text-slate-200'} to={'/agro-map'}>
                        Explorar Mapa
                    </NavLink>
                </div>
            </div>
        
            <div className='flex flex-col md:flex-row'>
                {
                    goals.map((goal, i) => (
                        <GoalComponent key={goal.title+i} {...goal}/>
                    ))
                }
            </div>

            <div className='w-full my-20'/>

            
            <h1 className='text-center text-5xl font-bold mb-20'>Nuestro Equipo</h1>
            <div className='flex flex-col md:flex-row flex-wrap justify-center'>
                {
                    participants.map((participant, i) => (
                        <ParticipantComponent key={participant.fullName+i} {...participant}/>
                    ))
                }
            </div>

        </div>
    );
};

export default HomeScreen;
