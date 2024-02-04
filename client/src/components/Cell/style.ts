import styled from "styled-components"

interface ICell {
  odd: boolean
}

export const Cell = styled.div<ICell>`
  width: 60px;
  height: 60px;
  padding-top: 5px;
  background-color: ${(props) => !props.odd ? "#b58863" : "#f0d9b5"};
`

export const PiecesSvg = styled.img`
  -webkit-filter: drop-shadow(1px 1px 0 black)
                  drop-shadow(1px 1px 0 black);
  filter: drop-shadow(1px 1px 0 black) 
          drop-shadow(-1px 1px 0 black);
`