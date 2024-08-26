import { ProjectProps } from "../../components/Project/Project";

let projects: ProjectProps[] = [
    {
        imageUrl: 'travel-wheels.png',
        projectTitle: 'TravelWheels',
        projectDescription: 'Full-stack car dealership web app using React (TypeScript) for the front-end and Java Spring Boot for the back-end, with secure JWT authentication and role-based access for dealers, users, and admins. Dealers could manage cars with CRUD functionalities, image uploads, and geolocation for map display. I also integrated an AI-powered chatbot via FastAPI, voice recognition, social media sharing, 360° car views, and QR code generation for dealer info. The app was deployed on AWS EC2 using Docker containers, with AWS RDS MySQL for data management. End-to-end testing ensured functionality and scalability.\nTechnologies used included React, TypeScript, Java Spring Boot, FastAPI, AWS, Docker, and MySQL.',
        projectLinks: [
            {
                placeholder: 'Frontend',
                linkUrl: 'https://github.com/Grecu-Narcis/MPP-FrontEnd',
            },
            {
                placeholder: 'Backend',
                linkUrl: 'https://github.com/Grecu-Narcis/MPP-Backend'
            }
        ]
    },

    {
        imageUrl: 'toy-language-interpreter.png',
        projectTitle: 'Toy Language Interpreter',
        projectDescription: 'Static-typed toy language interpreter in Java, following the Model-View-Controller (MVC) architecture. The interpreter includes support for procedures, variable handling, and efficient memory management using both stack and heap structures. I implemented multithreading capabilities with synchronization mechanisms like semaphores and barriers to ensure smooth execution. To enhance usability, I designed a JavaFX-based graphical user interface (GUI), allowing users to visualize and debug the interpreter\'s execution step-by-step. This project focused on building a robust and interactive tool for interpreting and managing complex language features.',
        projectLinks: [
            {
                placeholder: 'Learn more',
                linkUrl: 'https://github.com/Grecu-Narcis/Toy-Language-Interpreter'
            }
        ]    
    },

    {
        imageUrl: 'python-console-games.png',
        projectTitle: 'Python Console Based Games',
        projectDescription: 'This project features a set of classic console games implemented in Python, demonstrating modular design with layered architecture. The games include Game of Life, Hangman, Order and Chaos, Quiz Master and Scramble. Each game is designed for terminal interaction, showcasing clean code and effective game logic in a text-based format.',
        projectLinks: [
            {
                placeholder: 'Learn more',
                linkUrl: 'https://github.com/Grecu-Narcis/Python-Console-Based-Games'
            }
        ]
    },

    {
        imageUrl: 'tutor-track.png',
        projectTitle: 'TutorTrack',
        projectDescription: 'Tutorial Management Application, developed with C++ and the Qt framework, provides a solution for organizing and managing tutorials. It features distinct admin and user modes: administrators can add, update and delete tutorial entries, while users can browse tutorials, create and manage personalized watch lists, and export them to CSV or HTML formats. The application integrates an SQLite database for efficient data storage and retrieval. The modular, layered architecture of the project supports scalability and maintainability.',
        projectLinks: [
            {
                placeholder: 'Learn more',
                linkUrl: 'https://github.com/Grecu-Narcis/TutorTrack'
            }
        ]
    },

    {
        imageUrl: 'keylogger.png',
        projectTitle: 'Keylogger',
        projectDescription: 'C++ Keylogger project designed to capture keystrokes on Windows systems with advanced functionality for educational and ethical use. It operates in stealth mode, allowing it to run covertly without user detection. The keylogger logs each pressed key to a designated file, ensuring detailed record-keeping. It includes a persistence feature to ensure automatic execution at system startup, providing consistent monitoring. For added security, the logged data is encrypted, and encrypted email notifications can be sent to a specified address. This project aims to demonstrate keylogging techniques while emphasizing responsible and authorized use.',
        projectLinks: [
            {
                placeholder: 'Learn more',
                linkUrl: 'https://github.com/Grecu-Narcis/Keylogger'
            }
        ]
    },

    {
        imageUrl: 'aproximating-pi.png',
        projectTitle: 'Approximating Pi Using Probabilistic Methods',
        projectDescription: 'This project estimates Pi using a probabilistic approach implemented in C++ with the SFML library. It generates random points within a square containing an inscribed circle, visualizing the process and approximating Pi through the ratio of points inside the circle to the total number of points. The application showcases the Monte Carlo method for numerical approximation and graphical representation.',
        projectLinks: [
            {
                placeholder: 'Learn more',
                linkUrl: 'https://github.com/Grecu-Narcis/Aproximating-Pi-using-probabilistic'
            }
        ]
    }
]

export default projects;