import styled from 'styled-components';

export default (Navigation) => styled(Navigation)`
    position: fixed;
    top: 1rem;
    left: 1rem;
    width: calc(100% - 2rem);
    color: white;
    font-size: 1.8rem;
    font-weight: 600;
    display: grid;
    justify-content: end;
    padding: 0 6rem;
    background-color: ${props => props.theme.colorPrimary1};
    height: 6rem;
    align-items: center;
    z-index: 100;
`;

export const NavigationContent = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, max-content);
    & > li {
        padding: .5rem 2rem;
        line-height: 1;
    }
`