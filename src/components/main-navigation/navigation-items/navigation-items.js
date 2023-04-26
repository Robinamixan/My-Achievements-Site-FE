import React from 'react';

const navigationLinks = [
    {id: 'main', url: '/', text: 'Main'}
];

const NavigationItems = () => [
    ...navigationLinks.map((link) => (
        <li
            key={link.id}
        >
            <a href={link.url}>
                {link.text}
            </a>
        </li>
    ))
];

export default NavigationItems;