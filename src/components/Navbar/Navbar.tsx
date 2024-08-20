import './Navbar.css';
import { IoMoon, IoSunnyOutline } from 'react-icons/io5';
import NavbarItems from './navbar-items';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

export default function Navbar() {
    const [showSideMenu, setShowSideMenu] = useState<boolean>(false);

    const themeContext = useContext(ThemeContext)!;
    const isDark = themeContext.isDark;
    const setIsDark = themeContext.setIsDark;

    useEffect(() => {
        if (showSideMenu) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'auto';
    }, [showSideMenu]);

    return (
        <div id='navbar'>
            <div id='name-initials'>GN</div>

            <div id='options'>
                {NavbarItems.map((item, index) => (
                    <span className='option-link' key={index}>
                        {item}
                    </span>
                ))}

                {isDark ? (
                    <IoSunnyOutline id='toggle' onClick={() => setIsDark(false)} />
                ) : (
                    <IoMoon id='toggle' onClick={() => setIsDark(true)} />
                )}

                <GiHamburgerMenu id='side-menu-toggle' onClick={() => setShowSideMenu(true)} />
            </div>

            {showSideMenu && (
                <>
                    <div id='side-menu'>
                        <IoMdClose id='side-menu-close' onClick={() => setShowSideMenu(false)} />

                        <div>
                            {NavbarItems.map((item, index) => (
                                <div className='side-option-link' key={index}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
