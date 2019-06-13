import styled from "styled-components";
import media from "../../../../styledComponents/breakPoints";

export default (Offer) => styled(Offer)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, max-content);
  grid-gap: 0 8rem;

  & > * {
    ${media.medium_2`
        grid-column: 1/3 !important;
    `}
  }
`;

export const Title = styled.h1`
margin-bottom: 2rem;
font-size: 3.5rem;
letter-spacing: 0.3rem;
`;

export const Image = styled.div`
background: url("./golden-retrivier.jpg") center/cover;
grid-row: 2/4;
grid-column: 2/3;
border-radius: 0.3rem;
box-shadow: 0 3rem 2rem rgba(0, 0, 0, 0.1);

${media.medium_2`
  height: 30rem;
`}
`;

export const Paragraph = styled.p`
grid-column: 1/2;
text-align: justify;
line-height: 2;

${media.medium_2`
  margin-top: 4rem;
`}
`;