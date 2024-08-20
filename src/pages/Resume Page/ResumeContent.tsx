import GenericSection from '../../components/Resume Sections/Generic Section/GenericSection';
import SkillsSection from '../../components/Resume Sections/Skills Section/SkillsSection';
import './ResumeContent.css';

export default function ResumeContent() {
    return (
        <div id='resume-content'>
            <div id='details'>
                <img id='profile-image' src='profile.jpg' />
                <h1 id='name'>Grecu Narcis</h1>
                <p id='position'>Software Developer</p>
            </div>

            <div id='resume-sections'>
                <GenericSection title='Skills' Content={SkillsSection} />
            </div>
        </div>
    );
}
