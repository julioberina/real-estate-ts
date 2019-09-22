import React from 'react';
import './Header.scss';

type HeaderProps = {
    items: string[];
};

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <ul>
        {props.items.map((item, index) => <li key={index}>{item}</li> )}
        </ul>
    );
}

export default Header;