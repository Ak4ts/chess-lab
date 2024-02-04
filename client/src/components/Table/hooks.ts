import { useState } from 'react'
import Bishop from '../../assets/bishop.svg'
import King from '../../assets/king.svg'
import Knight from '../../assets/knight.svg'
import Pawn from '../../assets/pawn.svg'
import Queen from '../../assets/queen.svg'
import Rook from '../../assets/rook.svg'
import WhiteBishop from '../../assets/whiteBishop.svg'
import WhiteKing from '../../assets/whiteKing.svg'
import WhiteKnight from '../../assets/whiteKnight.svg'
import WhitePawn from '../../assets/whitePawn.svg'
import WhiteQueen from '../../assets/whiteQueen.svg'
import WhiteRook from '../../assets/whiteRook.svg'

export const piecesArray = () => {
  return [
    [{ type: 'Rook', svg: Rook }, { type: 'Knight', svg: Knight }, { type: 'Bishop', svg: Bishop }, { type: 'King', svg: King }, { type: 'Queen', svg: Queen}, { type: 'Bishop', svg: Bishop }, { type: 'Knight', svg: Knight }, { type: 'Rook', svg: Rook }],
    [{ type: 'Pawn', svg: Pawn }, { type: 'Pawn', svg: Pawn }, { type: 'Pawn', svg: Pawn }, { type: 'Pawn', svg: Pawn }, { type: 'Pawn', svg: Pawn }, { type: 'Pawn', svg: Pawn }, { type: 'Pawn', svg: Pawn }, { type: 'Pawn', svg: Pawn }],
    [{}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}],
    [{ type: 'Pawn', svg: WhitePawn }, { type: 'Pawn', svg: WhitePawn }, { type: 'Pawn', svg: WhitePawn }, { type: 'Pawn', svg: WhitePawn }, { type: 'Pawn', svg: WhitePawn }, { type: 'Pawn', svg: WhitePawn }, { type: 'Pawn', svg: WhitePawn }, { type: 'Pawn', svg: WhitePawn }],
    [{ type: 'Rook', svg: WhiteRook }, { type: 'Knight', svg: WhiteKnight }, { type: 'Bishop', svg: WhiteBishop }, { type: 'Queen', svg: WhiteQueen }, { type: 'King', svg: WhiteKing }, { type: 'Bishop', svg: WhiteBishop }, { type: 'Knight', svg: WhiteKnight }, { type: 'Rook', svg: WhiteRook }],
  ]
}

export const PiecesState = () => {
  const [pieces, setPieces] = useState(piecesArray())

  return {
    pieces,
    setPieces,
  }
}