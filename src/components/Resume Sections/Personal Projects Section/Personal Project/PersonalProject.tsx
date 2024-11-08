import React from 'react';
import './PersonalProject.css';

type PersonalProjectProps = {
    projectName: string;
    duration: string;
    children: React.ReactNode;
};

export default function PersonalProject({ projectName, duration, children }: PersonalProjectProps) {
    return (
        <div className='personal-project'>
            <div className='personal-project-details'>
                <div className='personal-project-name'>
                    <strong>{projectName}</strong>
                </div>

                <div className='duration'>{duration}</div>
            </div>

            <div className='personal-project-description'>{children}</div>
        </div>
    );
}
