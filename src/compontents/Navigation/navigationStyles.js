import styled from 'styled-components';

export default (Navigation) => styled(Navigation)`
    color: white;
    font-size: 1.8rem;
    font-weight: 600;
    display: grid;
    justify-content: end;
    padding: 0 6rem;
    width: 100%;
`;

export const NavigationContent = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, max-content);

    & > li {
        padding: .5rem 2rem;

    }
`