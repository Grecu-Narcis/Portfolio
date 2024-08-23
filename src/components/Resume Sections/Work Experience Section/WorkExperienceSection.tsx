import WorkExperienceItem from './Work Experience Item/WorkExperienceItem';
import './WorkExperienceSection.css';

export default function WorkExperienceSection() {
    return (
        <div id='workplaces'>
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
