import { Award } from './awards';

export default function AwardItem({ year, position, contest, domain }: Award) {
    return (
        <div className='award'>
            <strong>{year}</strong>
            {' - '}
            <strong>{position}</strong>
            {' in '}
            <strong>{contest}</strong>
            {' in '}
            <strong>{domain}</strong>
        </div>
    );
}
