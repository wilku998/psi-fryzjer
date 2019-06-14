import styled from "styled-components";

import { Button } from "../Button";
export default Packet => styled(Packet)`
  border: ${props => props.theme.lightBorder};
  padding: 0 2rem 2rem 2rem;

`;

export const Title = styled.h2`
  font-size: 2.4rem;
  padding: 0.5rem 1rem;
  /* background-color: ${props => props.theme.colorGreyDark2}; */
  border-bottom: ${props => props.theme.lightBorder};
  font-weight: 300;
  text-align: center;
`;

export const List = styled.ul`
  margin: 2rem 0;

  & > li {
    padding: .5rem 0;

    &:not(:last-child){
        border-bottom: ${props => props.theme.lightBorder};
    }
  }
`;

export const PacketButton = styled(Button)`
  background: none;  
  border: ${props => props.theme.lightBorder};
`;