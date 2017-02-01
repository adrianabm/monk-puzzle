export const MOVE_PIECE = 'MOVE_PIECE'

export default (sourceId, targetId) => {
  return {
    type: MOVE_PIECE,
    sourceId,
    targetId
  }
}
