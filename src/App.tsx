import React from 'react';
import Header from './Header/Header';
import './App.scss';

type HelloProps = {
  person: string;
};

type Props = {};

type State = {
  appName: string;
};

const Hello: React.FC<HelloProps> = (props) => {
  return (
    <strong>Hello {props.person}. How are you</strong>
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
    let appItems: string[] = ['First item', 'Second item', 'Third item'];

    return (
      <div className="App">
        <h1>{this.state.appName}</h1>
        <Hello person="Julio"></Hello>
        <Header items={appItems} />
      </div>
    )
  }

}
