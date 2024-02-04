import { PiecesSvg, Cell as TableCell } from "./style";
interface Cell {
  odd: boolean;
  piece: any;
}

export default function Cell ({odd, piece}: Cell) {
  return (
    <>
      <TableCell odd={odd}>
        {piece ? <PiecesSvg src={piece} alt="piece" width={50} /> : null}
      </TableCell>
    </>
  );
}