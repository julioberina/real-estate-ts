import React, { Component } from 'react';
import './Listings.scss';

type ListingsProps = {};
type ListingsState = {};

export default class Listings extends Component<ListingsProps, ListingsState> {
    constructor(props: ListingsProps) {
        super(props);
    }

    render() {
        return (
            <section className="listings">
                Listings
            </section>
        );
    }
}