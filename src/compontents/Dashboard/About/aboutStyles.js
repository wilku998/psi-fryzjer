import styled from "styled-components";
import media from "../../../styledComponents/breakPoints";

export default About => styled(About)`
  background-color: ${props => props.theme.colorPrimary1};
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 3rem), 0 100%);
`;

export const Content = styled.div`
  clip-path: polygon(0 3rem, 100% 0, 100% calc(100% - 3rem), 0 100%);
  padding: 7rem 4rem;
  background-color: ${props => props.theme.colorGreyLight2};
  color: ${props => props.theme.colorGreyDark1};

`;



