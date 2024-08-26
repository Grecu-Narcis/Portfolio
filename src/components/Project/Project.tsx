import './Project.css';

type Links = {
    placeholder: string;
    linkUrl: string;
};

export type ProjectProps = {
    imageUrl: string;
    projectTitle: string;
    projectDescription: string;
    projectLinks?: Links[];
};

export default function Project({ imageUrl, projectTitle, projectDescription, projectLinks }: ProjectProps) {
    return (
        <div className='project'>
            <img className='project-cover' src={imageUrl} />

            <div className='project-details'>
                <div className='project-title'>{projectTitle}</div>
                <div className='project-description'>{projectDescription}</div>

                <div className='links'>
                    {projectLinks?.map((link, index) => (
                        <a href={link.linkUrl} target='_blank' className='learn-more' key={index}>
                            {link.placeholder}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
