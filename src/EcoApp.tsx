import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { routes } from './routes/routes';
import { Footer } from './components/Footer';

export const EcoApp = () => {
    return (
        <>
            <BrowserRouter>
        
                <header className='w-full'>
                    <Navbar/>
                </header>

                <main>
                    <Routes>
                        {
                            routes.map((route, i) => (
                                <Route key={route.name+i} path={route.path} element={<route.component />}/>
                            ))
                        }
                        <Route path='/*' element={<Navigate to={'/'}/>} />
                    </Routes>
                </main>


            </BrowserRouter>
            <Footer />
        </>
    );
};
