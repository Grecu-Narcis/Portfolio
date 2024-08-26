import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import ThemeContextProvider from './contexts/ThemeContext';
import ResumePage from './pages/Resume Page/ResumePage';
import ProjectsPage from './pages/Projects Page/ProjectsPage';

document.title = 'Narcis Grecu';

export default function App() {
    return (
        <ThemeContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ResumePage />} />
                    <Route path='/resume' element={<ResumePage />} />
                    <Route path='/projects' element={<ProjectsPage />} />

                    <Route path='*' element={<Navigate to={'/'} />} />
                </Routes>
            </BrowserRouter>
        </ThemeContextProvider>
    );
}
