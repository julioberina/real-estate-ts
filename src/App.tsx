import React from 'react';
import './App.scss';

type HelloProps = {
  person: string;
};

type Props = {};

type State = {
  appName: string;
};

const Hello: React.FC<HelloProps> = ({ person }) => {
  return (
    <strong>Hello {person}. How are you</strong>
  )
}

export default class App extends React.Component<Props, State> {
  
  constructor(props: Props) {
    super(props);

    this.state = {
      appName: 'Real Estate App'
    }
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.appName}</h1>
        <Hello person="Julio"></Hello>
      </div>
    )
  }

}
