import skills from './skills';
import './SkillsSection.css';

export default function SkillsSection() {
    console.log(skills);
    return (
        <ul id='skills-content'>
            {[...skills.keys()].map((skillCategory, index) => (
                <li key={index} className='skill-item'>
                    <strong>{skillCategory}: </strong>
                    {skills.get(skillCategory)?.join(', ')}
                </li>
            ))}
        </ul>
    );
}
