import styled from "styled-components";
import media from "../../../../styledComponents/breakPoints";

export default Salon => styled(Salon)`
  grid-template-columns: repeat(2, 1fr);
`;

export const ImagesContainer = styled.div`
  grid-row: 1/5;
  grid-column: 1/2;
  position: relative;
  ${media.medium_2`
    height: 40rem;
    grid-row: 3/4;
    margin-top: 4rem;
  `}
`;

export const Image = styled.img`
  width: 60%;
  height: 60%;
  object-fit: cover;
  position: absolute;
  border: 5px solid ${props => props.theme.colorGreyLight2};
  border-radius: 0.3rem;
  transition: all 0.2s;

  &:hover {
    z-index: 10;
    transform: scale(1.05);
  }
  
  ${props =>
    props.pos === 2
      ? `
        top: 20%;
        left: 40%;
    `
      : ""}

  ${props =>
    props.pos === 3
      ? `
        top: 40%;
        left: 10%;
    `
      : ""}
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  margin-bottom: 1.2rem;
  line-height: 1;
  &:not(:first-of-type) {
    margin-top: 4rem;
  }
`;

export const Paragraph = styled.p`
  padding-top: 1rem;
  text-align: justify;
  border-top: ${props => props.theme.lightBorder}
`;
