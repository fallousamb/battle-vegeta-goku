import logo from './logo.svg';
import './App.css';
import Vegeta from './Vegeta';
import Goku from './Goku';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       vegeta: 100,
       goku: 100
    }
  }

  reduceLife = (param1, param2) => {
    if(param1 === 'Goku') {
      this.setState({
        vegeta: this.state.vegeta - param2
      })
    } else {
      this.setState({
        goku: this.state.goku - param2
      })
    }

  }

  render() {
    return (
      <div className="container text-center">
        <h1>Goku Vs Vegata</h1>
        <hr />
  
        <div className="row">
          <Vegeta name="Vegeta" life={ this.state.vegeta } reduceHandler={ this.reduceLife }/>
          <Goku name="Goku" life={ this.state.goku } reduceHandler={ this.reduceLife }/>
  
        </div>
      </div>
    );
  }
  
}

export default App;
