import React, { Component } from 'react'

class Piece extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { pieceId } = this.props;
    this.props.onClick(pieceId);
  }

  render() {
    const { image, initialpositionX, initialpositionY, positionX, positionY, isEmpty } = this.props
    let pieceStyle = {
      left: positionX,
      top: positionY,

    }

    let emptyStyle = {
      opacity: 0,
    }

    var style = {
      ...pieceStyle,
      ...(isEmpty === true ? emptyStyle : pieceStyle )
    }

    return (
      <div
        className="piece"
        onClick={ this.handleClick }
        style={ style } >
        <img
          className="image"
          src={ image } />
      </div>
    )
  }
}

export default Piece
