import React from 'react';


function Tile(props) {
    const handleClick = e => {
        e.preventDefault()
        props.handleClick(props.tileNum)
    }
    return (
      <div onClick = {handleClick}>
        <span>
           {props.emoji}
        </span>
      </div>
    )
}

export default Tile