import { css } from 'styled-components';

export const sizes = {
    big: 71.25, //1140
    medium: 56.25, //900
    medium_2: 43.75, //700
    small: 28.125 //450
};

let media = {};

Object.keys(sizes).forEach((key) => {
	media[key] = (...args) => css`@media only screen and (max-width: ${sizes[key]}em){
        ${css(...args)}
    }`
});

export default media