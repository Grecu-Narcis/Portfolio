import './App.css';
import Layout from './components/Layout/Layout';
import ThemeContextProvider from './contexts/ThemeContext';
import ResumePage from './pages/Resume Page/ResumePage';

document.title = 'Narcis Grecu';

export default function App() {
    return (
        <ThemeContextProvider>
            <Layout>
                <ResumePage />
            </Layout>
        </ThemeContextProvider>
    );
}
