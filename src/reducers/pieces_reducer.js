import { MOVE_PIECE } from '../actions/move-piece'

const defaultState = [
  {
    pieceId: 1,
    image: 'src/images/monk-01.jpg',
    initialpositionX: 0,
    initialpositionY: 0,
    positionX: 0,
    positionY: 0,
    isEmpty: false
  },
  {
    pieceId: 2,
    image: 'src/images/monk-02.jpg',
    initialpositionX: 150,
    initialpositionY: 0,
    positionX: 150,
    positionY: 0,
    isEmpty: false
  },
  {
    pieceId: 3,
    image: 'src/images/monk-03.jpg',
    initialpositionX: 300,
    initialpositionY: 0,
    positionX: 300,
    positionY: 0,
    isEmpty: false
  },
  {
    pieceId: 4,
    image: 'src/images/monk-04.jpg',
    initialpositionX: 0,
    initialpositionY: 150,
    positionX: 0,
    positionY: 150,
    isEmpty: false
  },
  {
    pieceId: 5,
    image: 'src/images/monk-05.jpg',
    initialpositionX: 150,
    initialpositionY: 150,
    positionX: 150,
    positionY: 150,
    isEmpty: false
  },
  {
    pieceId: 6,
    image: 'src/images/monk-06.jpg',
    initialpositionX: 300,
    initialpositionY: 150,
    positionX: 300,
    positionY: 150,
    isEmpty: false
  },
  {
    pieceId: 7,
    image: 'src/images/monk-07.jpg',
    initialpositionX: 0,
    initialpositionY: 300,
    positionX: 0,
    positionY: 300,
    isEmpty: false
  },
  {
    pieceId: 8,
    image: 'src/images/monk-08.jpg',
    initialpositionX: 150,
    initialpositionY: 300,
    positionX: 150,
    positionY: 300,
    isEmpty: false
  },
  {
    pieceId: 9,
    initialpositionX: 300,
    initialpositionY: 300,
    positionX: 300,
    positionY: 300,
    isEmpty: true
  }
]

export default (state = defaultState, action) => {
  switch(action.type) {
    case MOVE_PIECE:
      var sourcePiece = state.find((piece) => {
        return piece.pieceId === action.sourceId
      })
      var targetPiece = state.find((piece) => {
        return piece.pieceId === action.targetId
      })
      return state.map((piece) => {
        if (piece.pieceId === action.sourceId) {
          return Object.assign(
            {}, piece, { positionX: targetPiece.positionX, positionY: targetPiece.positionY }
          )
        }
        if (piece.pieceId === action.targetId) {
          return Object.assign(
            {}, piece, { positionX: sourcePiece.positionX, positionY: sourcePiece.positionY }
          )
        }
        return piece
      }
    )
    default:
  return state
  }
}
