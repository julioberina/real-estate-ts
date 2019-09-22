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
                <div className="logo">Logo</div>

                <nav>
                    <a href="#">Create Ads</a>
                    <a href="#">About Us</a>
                    <a href="#">Log In</a>
                    <a href="#" className="register-btn">Register</a>
                </nav>
            </header>
        );
    }
};