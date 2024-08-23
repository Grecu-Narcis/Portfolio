import React from 'react';
import './PersonalProject.css';

type PersonalProjectProps = {
    projectName: string;
    duration: string;
    children: React.ReactNode;
};

export default function PersonalProject({ projectName, duration, children }: PersonalProjectProps) {
    return (
        <div className='project'>
            <div className='project-details'>
                <div className='project-name'>
                    <strong>{projectName}</strong>
                </div>

                <div className='duration'>{duration}</div>
            </div>

            <div className='project-description'>{children}</div>
        </div>
    );
}
