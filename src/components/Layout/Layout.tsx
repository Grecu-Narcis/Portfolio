import { useContext } from 'react';
import Navbar from '../Navbar/Navbar';

import './Layout.css';
import Footer from '../Footer/Footer';
import { ThemeContext } from '../../contexts/ThemeContext';

export default function Layout({ children }: any) {
    const themeContext = useContext(ThemeContext)!;
    const isDark = themeContext.isDark;

    return (
        <div className='main' data-theme={isDark ? 'dark' : 'light'}>
            <Navbar />
            <div className='content'>{children}</div>
            <Footer />
        </div>
    );
}
