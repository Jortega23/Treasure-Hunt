import React, { Component } from 'react';
import Board from './Board.js'
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      board:false,
      squares:0,
    }
    this.handleChange=this.handleChange.bind(this)
  }
  
  
  handleChange(e){
    this.setState({squares: parseInt(e.target.value)})
  }
  


  render(){
    return (
      <div className="App">
        <button onClick={() => this.setState({board: true})}> New Game</button>
        <button onClick={() => this.setState({board: false})}> End Game</button>
        {this.state.board ? (<Board size={this.state.squares}/>) : 'Please create a board of length'}
        {!this.state.board ? <input type="number" value={this.state.squares} onChange={this.handleChange}></input> : ''}
      </div>
    );
  }
}

export default App