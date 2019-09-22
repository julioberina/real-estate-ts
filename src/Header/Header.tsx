import React from 'react';
import './Header.scss';

type HeaderProps = {};
type HeaderState = {};

export default class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props);
    }

    render() {
        return (
            <header>
                <div>Logo</div>

                <nav>
                    <a href="#">create ads</a>
                    <a href="#">about us</a>
                    <a href="#">log in</a>
                    <a href="#" className="register-btn">Register</a>
                </nav>
            </header>
        );
    }
};