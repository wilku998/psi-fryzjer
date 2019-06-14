import styled from "styled-components";
import media from "../../../../styledComponents/breakPoints";
import { ButtonWithShadow } from "../../../Abstracts/Button";

export default Offer => styled(Offer)`
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, max-content);
`;

export const Button = styled(ButtonWithShadow)`
  grid-column: 1/2;
  justify-self: start;
`;

export const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: 3.5rem;
  letter-spacing: 0.3rem;
`;

export const Image = styled.img`
  grid-row: 1/4;
  grid-column: 2/3;
  border-radius: 0.3rem;
  box-shadow: 0 3rem 2rem rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  object-fit: cover;
  width: 100%;
  height: 100%;

  ${media.medium_2`
  height: 30rem;
  grid-row: 2/4;
`};

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.15);
  }
`;

export const Paragraph = styled.p`
  grid-column: 1/2;
  text-align: justify;
  line-height: 2;
  margin-bottom: 4rem;

  ${media.medium_2`
  margin-top: 4rem;
`}
`;
