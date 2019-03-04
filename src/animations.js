import { keyframes } from "styled-components";

export const bounce = keyframes`
    from,
    20%,
    53%,
    80%,
    to {
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        transform: translate3d(0, 0, 0);
    }

    40%,
    43% {
        animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
        transform: translate3d(0, -30px, 0);
    }

    70% {
        animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
        transform: translate3d(0, -15px, 0);
    }

    90% {
        transform: translate3d(0, -4px, 0);
    }
`;

export const flip = keyframes`
    from {
        transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
        animation-timing-function: ease-out;
    }

    40% {
        transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
        rotate3d(0, 1, 0, -190deg);
        animation-timing-function: ease-out;
    }

    50% {
        transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
        rotate3d(0, 1, 0, -170deg);
        animation-timing-function: ease-in;
    }

    80% {
        transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
        rotate3d(0, 1, 0, 0deg);
        animation-timing-function: ease-in;
    }

    to {
        transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
        animation-timing-function: ease-in;
    }
`;

export const shake = keyframes`
    from,
    to {
        transform: translate3d(0, 0, 0);
    }

    10%,
    30%,
    50%,
    70%,
    90% {
        transform: translate3d(-10px, 0, 0);
    }

    20%,
    40%,
    60%,
    80% {
        transform: translate3d(10px, 0, 0);
    }
`

export const pulsate = keyframes`
    0% {
        transform: scale(1);
        right: 0px;
    }
    50% {
        transform: scale(1.05);
        right: 6px;
    }
    100% {
        transform: scale(1);
        right: 0px;
    }
`

export const pulsateShadow = keyframes`
    0% {
        box-shadow: 2px 2px 10px #333;
    }
    50% {
        box-shadow: 8px 8px 25px #333;
    }
    100% {
        box-shadow: 2px 2px 10px #333;
    }
`