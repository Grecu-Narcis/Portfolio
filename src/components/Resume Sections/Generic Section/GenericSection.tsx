import './GenericSection.css';

type GenericSectionProps = {
    title: string;
    Content: React.FC;
};

export default function GenericSection({ title, Content }: GenericSectionProps) {
    return (
        <div className='resume-section'>
            <div className='section-title'>{title}</div>
            <div className='section-content'>
                <Content />
            </div>
        </div>
    );
}
