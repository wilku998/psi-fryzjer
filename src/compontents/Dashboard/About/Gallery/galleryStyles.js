import styled from "styled-components";
import media from "../../../../styledComponents/breakPoints";

export default Gallery => styled(Gallery)`
  display: grid;
  height: calc(100vh - 6rem);
  margin-top: 12rem;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 2rem;
  padding: 4rem 8rem;

  ${media.big`
    padding: 4rem;
    grid-gap: 1rem;   
  `}

  ${media.medium_2`
    margin-top: 0;
  `}

  ${media.small`
    height: 50rem;
  `}
`;

export const Image = styled.img`
  &:nth-child(1) {
    grid-row: 1/2;
    grid-column: 1/2;
  }
  &:nth-child(2) {
    grid-row: 2/4;
    grid-column: 1/2;
  }
  &:nth-child(3) {
    grid-row: 1/4;
    grid-column: 2/3;
  }
  &:nth-child(4) {
    grid-row: 1/3;
  }
  &:nth-child(5) {
    grid-row: 1/3;
  }
  &:nth-child(6) {
    grid-column: 3/5;
  }
`;
