import Cell from "../Cell";
import { PiecesState } from "./hooks";
import { Column } from "./style";

export default function Table() {
  const {pieces} = PiecesState();
  return (
    <>
      {pieces.map((row, indexX) => (
        <Column>
          {row.map((piece: any, indexY) => (
            <Cell odd={(indexX + indexY) % 2 == 0} piece={piece.svg} />
          ))}
        </Column>
      ))}
    </>
  );
}
