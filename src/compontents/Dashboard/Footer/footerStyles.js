import styled from "styled-components";
import media from "../../../styledComponents/breakPoints";

export default Footer => styled(Footer)`
  padding: 8rem 8rem 6rem 8rem ;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  grid-gap: 8rem;
  color: white;

  ${media.big`
    padding: 8rem 4rem 6rem 4rem;
    grid-gap: 4rem;
  `}

  ${media.small`
    grid-auto-flow: row;
  `}
`;

export const Item = styled.span`
  text-align: center;
  padding: 1rem 1rem 0 1rem;
  border-top: 1px solid white;
`;
