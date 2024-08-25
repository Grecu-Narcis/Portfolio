import PersonalProject from './Personal Project/PersonalProject';
import './PersonalProjectsSection.css';

export default function PersonalProjectsSection() {
    return (
        <div id='projects'>
            <PersonalProject projectName='TravelWheels' duration='3/2024 - 06/2024'>
                <ul>
                    <li>
                        <strong>Developed</strong> a full-stack car dealership app with <strong>React (TypeScript)</strong> and{' '}
                        <strong>Java Spring Boot</strong>, featuring <strong>user roles</strong> (dealer, user, admin) with{' '}
                        <strong>JWT authentication</strong> for secure access.
                    </li>

                    <li>
                        <strong>Implemented</strong> comprehensive car management for dealers, including CRUD functionalities, geolocation{' '}
                        <strong>integration for map display</strong> and the ability to upload images.
                    </li>

                    <li>
                        <strong>Enhanced</strong> user experience with <strong>AI-powered chatbot</strong> (via FastAPI{' '}
                        <strong>microservice</strong>) with <strong>voice recognition</strong>, social media sharing for car listings, 360°
                        car view and QR code generation with details about the dealer.
                    </li>

                    <li>
                        <strong>Leveraged</strong> end-to-end tests, <strong>deployment on AWS EC2</strong> with <strong>Docker</strong>{' '}
                        containers, and an <strong>AWS RDS MySQL</strong> database for robust functionality, <strong>scalability</strong>,
                        and secure data management.
                    </li>
                </ul>
            </PersonalProject>

            <PersonalProject projectName='Toy Language Interpreter' duration='11/2023 - 01/2024'>
                <ul>
                    <li>
                        <strong>Implemented</strong> a <strong>static-typed</strong> toy language interpreter using <strong>Java</strong>{' '}
                        following the <strong>Model-View-Controller</strong> architecture.
                    </li>

                    <li>
                        <strong>Developed</strong> robust support for <strong>procedures, stack and heap</strong> memory management,
                        variable handling, file reading, and <strong>multithreading</strong> with{' '}
                        <strong>synchronization mechanisms</strong> such as <strong>semaphores and barriers</strong>.
                    </li>

                    <li>
                        <strong>Designed</strong> a <strong>user-friendly JavaFX GUI</strong> for the interpreter, enabling{' '}
                        <strong>step-by-step</strong> execution visualization and <strong>debugging</strong>.
                    </li>
                </ul>
            </PersonalProject>

            <PersonalProject projectName='TutorTrack' duration='03/2023 - 06/2023'>
                <ul>
                    <li>
                        <strong>Built</strong> a feature-rich tutorial management application using <strong>C++</strong> and the{' '}
                        <strong>Qt framework</strong>, which employs a <strong>layered architecture</strong>, featuring distinct admin and
                        user modes
                    </li>

                    <li>
                        <strong>Integrated SQLite</strong> database, and designed an intuitive <strong>UI/UX</strong> to enhance tutorial
                        organization and personalized learning
                    </li>

                    <li>
                        <strong>Enhanced</strong> functionality by <strong>enabling users</strong> to <strong>export</strong> their watch
                        lists to <strong>CSV or HTML files</strong>, promoting <strong>data portability</strong> and{' '}
                        <strong>user convenience</strong>
                    </li>
                </ul>
            </PersonalProject>
        </div>
    );
}
