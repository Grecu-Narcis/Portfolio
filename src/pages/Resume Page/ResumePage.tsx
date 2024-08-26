import Layout from '../../components/Layout/Layout';
import AwardsSection from '../../components/Resume Sections/Awards Section/AwardsSection';
import GenericSection from '../../components/Resume Sections/Generic Section/GenericSection';
import PersonalProjectsSection from '../../components/Resume Sections/Personal Projects Section/PersonalProjectsSection';
import SkillsSection from '../../components/Resume Sections/Skills Section/SkillsSection';
import WorkExperienceSection from '../../components/Resume Sections/Work Experience Section/WorkExperienceSection';
import './ResumePage.css';

export default function ResumePage() {
    return (
        <Layout>
            <div id='resume-header'>
                <div id='resume-header-title'> Hi, I'm Grecu Narcis</div>
                <div id='resume-header-description'>
                    Welcome to my digital space! I am a Computer Science student with experience at Microsoft and Bitdefender. Passionate
                    about coding, football, and traveling, here I share insights from my tech journey and adventures off the screen.
                </div>
            </div>

            <div id='border' />

            <div id='resume-content'>
                <div id='details'>
                    <img id='profile-image' src='profile.jpg' />
                    <h1 id='name'>Grecu Narcis</h1>
                    <p id='position'>Software Developer</p>
                </div>

                <div id='resume-sections'>
                    <GenericSection title='Skills'>
                        <SkillsSection />
                    </GenericSection>

                    <GenericSection title='Work experience'>
                        <WorkExperienceSection />
                    </GenericSection>

                    <GenericSection title='Personal projects'>
                        <PersonalProjectsSection />
                    </GenericSection>

                    <GenericSection title='Awards'>
                        <AwardsSection />
                    </GenericSection>
                </div>
            </div>
        </Layout>
    );
}
