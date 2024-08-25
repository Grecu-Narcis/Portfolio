import { MdEmail } from 'react-icons/md';
import './Footer.css';
import { FaGithub, FaLinkedin, FaRegCopyright } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer id='footer'>
            <div id='icons'>
                <a href='mailto:ngrecu09@gmail.com'>
                    <MdEmail />
                </a>
                <a href='https://www.linkedin.com/in/narcis-grecu-159145201/' target='_blank'>
                    <FaLinkedin />
                </a>
                <a href='https://github.com/Grecu-Narcis'>
                    <FaGithub />
                </a>
            </div>
            <div id='credits'>
                <div className='credits-item'>Narcis Grecu</div>
                <FaRegCopyright className='credits-item' />
                <div className='credits-item'>2024</div>
            </div>
        </footer>
    );
}
