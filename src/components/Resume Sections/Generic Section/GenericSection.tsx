import './GenericSection.css';

type GenericSectionProps = {
    title: string;
    children: React.ReactNode;
};

export default function GenericSection({ title, children }: GenericSectionProps) {
    return (
        <div className='resume-section'>
            <div className='section-title'>{title.toUpperCase()}</div>
            <div className='section-content'>{children}</div>

            <hr />
        </div>
    );
}
