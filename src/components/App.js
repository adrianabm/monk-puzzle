import React, { Component } from 'react'
import Pieces from './Pieces'

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>Puzzle Game</h2>
        <p>Press the 'Shuffle Pieces' button to start or restart the game.</p>
        <Pieces />
      </div>
    )
  }
}
