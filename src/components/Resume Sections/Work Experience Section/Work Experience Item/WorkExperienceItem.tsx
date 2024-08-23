import './WorkExperienceItem.css';

type WorkExperienceItemProps = {
    jobTitle: string;
    company: string;
    workPeriod: string;
    location: string;
    children: React.ReactNode;
};

export default function WorkExperienceItem({ jobTitle, company, workPeriod, location, children }: WorkExperienceItemProps) {
    return (
        <div className='work-experience-item'>
            <div className='work-details'>
                <div className='position'>
                    <strong>{`${jobTitle} @${company}`}</strong>
                </div>

                <div className='location'>{location}</div>
                <div className='date'>{workPeriod}</div>
            </div>

            <div className='job-description'>{children}</div>
        </div>
    );
}
