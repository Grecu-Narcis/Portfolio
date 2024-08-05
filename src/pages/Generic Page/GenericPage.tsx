import React from 'react';

import './GenericPage.css';

interface GenericPageProps {
    Header: React.FC;
    Content: React.FC;
}

export default function GenericPage({ Header, Content }: GenericPageProps) {
    return (
        <>
            <div id='generic-header'>
                <Header />{' '}
            </div>

            <div id='border' />

            <div id='generic-content'>
                <Content />
            </div>
        </>
    );
}
