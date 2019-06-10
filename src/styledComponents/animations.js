import { keyframes } from "styled-components";

const activeNavLink = keyframes`
    from {
        transform: translateX(-50%) scaleX(50%);

    }
    to {
        transform: translateX(-50%) scaleX(100%);
    }
`