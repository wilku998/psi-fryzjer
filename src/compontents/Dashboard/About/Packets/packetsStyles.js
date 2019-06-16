import styled from "styled-components";
import media from "../../../../styledComponents/breakPoints";

export default Packets => styled(Packets)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, max-content);
  margin: 12rem 0;
  grid-gap: 0 4rem;
  align-items: start;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  padding: 4rem 4rem 6rem 4rem;
  position: relative;
  color: ${props => props.theme.colorGreyLight2};

  ${media.medium_2`
    grid-auto-flow: column;
    grid-gap: 4rem 0;
    margin: 6rem 0;
  `}

  & > * {
    z-index: 10;

    ${media.medium_2`
        grid-column: 1/4;
    `}
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export const Title = styled.h1`
  grid-column: 1/4;
  text-align: center;
  font-size: 4rem;
  font-weight: 300;
  margin-bottom: 2rem;
  ${media.medium_2`
    margin-bottom: -2rem;
  `}
`;
