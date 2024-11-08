import WorkExperienceItem from './Work Experience Item/WorkExperienceItem';
import './WorkExperienceSection.css';

export default function WorkExperienceSection() {
    return (
        <div id='workplaces'>
            <WorkExperienceItem
                jobTitle='Software Engineer Intern'
                company='Microsoft'
                workPeriod='07/2024 - 10/2024'
                location='Iași, Romania'
            >
                <ul>
                    <li>
                        <strong>Contributed</strong>, in an <strong>Agile</strong> team, to the development of an{' '}
                        <strong>Android-based OS (AOSP)</strong> for <strong>dual-screen devices</strong> for conference rooms using{' '}
                        <strong>Kotlin, Java and XML</strong>, focusing on multi-screen interactions and system efficiency.
                    </li>
                    <li>
                        <strong>Replaced</strong> outdated widgets with custom UI components and added <strong>search functionality</strong>{' '}
                        for languages in the setup wizard improving <strong>performance by 10%</strong> and enhancing{' '}
                        <strong>user experience</strong> across dual screens.
                    </li>
                    <li>
                        <strong>Used Hilt</strong> for <strong>dependency injection</strong> and wrote comprehensive <strong>unit</strong>{' '}
                        and <strong>end-to-end tests</strong> using <strong>Espresso</strong> and <strong>Mockito</strong> achieving{' '}
                        <strong>over 98% test coverage</strong> to ensure robust functionality across the dual screens.
                    </li>
                </ul>
            </WorkExperienceItem>

            <WorkExperienceItem
                jobTitle='Security Researcher Intern'
                company='Bitdefender'
                workPeriod='07/2021 - 09/2021'
                location='Cluj-Napoca, Romania'
            >
                <ul>
                    <li>
                        Developed a <strong>client-server application in C</strong> to demonstrate how malware operates by allowing
                        communication between two systems, simulating real-world attack scenarios.
                    </li>
                    <li>
                        Implemented methods to <strong>transfer files between computers</strong>, including deploying files from the server
                        to the client and exfiltrating files from the client to the server, as well as infecting{' '}
                        <strong>Portable Executable (PE)</strong> files.
                    </li>
                    <li>
                        Enhanced knowledge of <strong>malware persistence techniques</strong> and system vulnerabilities by working directly
                        on real-world scenarios.
                    </li>
                </ul>
            </WorkExperienceItem>
        </div>
    );
}
