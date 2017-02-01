import React, { Component } from 'react'
import { connect } from 'react-redux'
import movePiece from '../actions/move-piece'
import Piece from './Piece'

class Pieces extends Component {
  constructor(props) {
    super(props)
    this.checkAndMovePiece = this.checkAndMovePiece.bind(this)
    this.isAdjacent = this.isAdjacent.bind(this)
    this.difference = this.difference.bind(this)
    this.randomize = this.randomize.bind(this)
    this.isFinished = this.isFinished.bind(this)
  }

  isFinished() {
    const { pieces } = this.props
    var trueCount = 0
    for (var i = 0; i < pieces.length; i++) {
      if (pieces[i].positionX === pieces[i].initialpositionX && pieces[i].positionY === pieces[i].initialpositionY ) {
        trueCount = trueCount + 1
      }
    }
    if (trueCount === pieces.length ) {
      return true
    } else {
      return false
    }
  }

  randomize() {
    var rangeStart = 1;
    var rangeEnd = 9;
    var that = this;

    // to be sure that the puzzle is solvable, the randomize function is based on real player based actions
    // the 'setTimeOut' is a hacky way to make sure all the 300 random movements were made, otherwise
    // the actions will be async.
    for (var i = 0; i < 300; i++ ) {
      setTimeout(function() {
        var number = Math.floor(Math.random() * rangeEnd + rangeStart);
        that.checkAndMovePiece(number);
      }, 0.5)
    }
  }

  difference (a, b) {
    return Math.abs(a - b)
  }

  // checks if the clicked piece is adjacent to the emptyPiece
  isAdjacent(clickedPiece, emptyPiece) {
    var differenceX = this.difference(clickedPiece.positionX, emptyPiece.positionX)
    var differenceY = this.difference(clickedPiece.positionY, emptyPiece.positionY)
    if(differenceX === 150 && differenceY === 0 || differenceX === 0 && differenceY === 150) {
      return true
    } else {
      return false
    }
  }

  // move the piece when it is adjacent to the empty piece
  checkAndMovePiece(clickedPieceId) {
    const { movePiece, pieces } = this.props
    var emptyPiece = {}
    var clickedPiece = {}
    for (var i = 0; i < pieces.length; i++) {
      if (pieces[i].isEmpty === true) {
        emptyPiece = pieces[i]
      }
      if (pieces[i].pieceId === clickedPieceId) {
        clickedPiece = pieces[i];
      }
    }
    var pieceIsAdjacent = this.isAdjacent(clickedPiece, emptyPiece)
    if (pieceIsAdjacent) {
      movePiece(clickedPieceId, emptyPiece.pieceId)
    }
  }

  render() {
    // if the game is finished, it will display the full image.
    var gameFinished = this.isFinished()
    var finishedImage = (gameFinished ?
      <div className="grid"><img src="src/images/monks-complete.jpg" /></div> : ''
    )
    var finishedClass = (gameFinished ? 'none' : 'grid')

    return (
      <div>
        <div className="grid-bg"></div>
        { finishedImage }
        <div className={ finishedClass }>
          { this.props.pieces.map((piece, i) =>
            <Piece { ...piece }
              key={ i }
              onClick={ this.checkAndMovePiece }
            /> )
          }
        </div>
        <div>
          <button onClick={ this.randomize } className="btn">Shuffle Pieces</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    pieces: state.pieces,
  }
}

export default connect(mapStateToProps, { movePiece })(Pieces)
