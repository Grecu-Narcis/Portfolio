import './Navbar.css';
import { IoMoon, IoSunnyOutline } from 'react-icons/io5';
import NavbarItems from './navbar-items';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

export default function Navbar() {
    const themeContext = useContext(ThemeContext)!;
    const isDark = themeContext.isDark;
    const setIsDark = themeContext.setIsDark;

    return (
        <div id='navbar'>
            <div id='name-initials'>GN</div>

            <div id='options'>
                {NavbarItems.map((item) => (
                    <span className='option-link'>{item}</span>
                ))}

                {isDark ? (
                    <IoSunnyOutline id='toggle' onClick={() => setIsDark(false)} />
                ) : (
                    <IoMoon id='toggle' onClick={() => setIsDark(true)} />
                )}
            </div>
        </div>
    );
}
