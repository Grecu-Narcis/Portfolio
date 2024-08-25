import AwardItem from './AwardItem';
import awards from './awards';

import './AwardsSection.css';

export default function AwardsSection() {
    return (
        <div id='awards'>
            <ul>
                {awards.map((award) => (
                    <li>
                        <AwardItem {...award} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
