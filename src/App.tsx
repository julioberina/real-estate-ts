import React from 'react';
import Header from './Header/Header';
import './App.scss';

type AppProps = {};
type AppState = {};

export default class App extends React.Component<AppProps, AppState> {
  
  constructor(props: AppProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }

}
