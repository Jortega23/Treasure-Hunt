import React from 'react'
import Tile from './Tile.js'


//bomb and treasure can be same number


class Board extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      boardState: new Array(parseInt(this.props.size)).fill(null).map((x, ind )=> <Tile key={ind} tileNum={ind} handleClick={this.checkTile} emoji=" ⬛ "/>),
      bomb: Math.floor(Math.random() * this.props.size),
      treasure: Math.floor(Math.random() * this.props.size)
      // counter: [5]
    }
  }
  
  componentDidMount() {
    console.log(this.state)
  }
  
  updateBoard = (emoji, tileIndex) => {
    let temp = [...this.state.boardState]
    temp[tileIndex] = (<Tile key={tileIndex} tileNum={tileIndex} handleClick={()=>{}} emoji={emoji}/>)
    this.setState({boardState: temp})
  }
  
  
  checkTile = tileIndex => {
      if(tileIndex === this.state.treasure){
        this.updateBoard("💰", tileIndex)
      }else if (tileIndex === this.state.bomb){
        this.updateBoard("💣", tileIndex)
      }else{
        this.updateBoard("🌲", tileIndex)
      }
  }

  render(){
    return (
      <>
        This board {this.state.boardState}
      </>
    );
  }
}

export default Board