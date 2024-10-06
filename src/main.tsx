import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { EcoApp } from './EcoApp.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <EcoApp />
    </StrictMode>,
);
