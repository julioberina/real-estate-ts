import React, { Component } from 'react';
import Header from './Header/Header';
import Filter from './Filter/Filter';
import Listings from './Listings/Listings';
import './App.scss';

type AppProps = {};
type AppState = {};

export default class App extends Component<AppProps, AppState> {
  
  constructor(props: AppProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <section id="content-area">
          <Filter />
          <Listings />
        </section>
      </div>
    )
  }

}
