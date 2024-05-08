import { createGlobalStyle } from "styled-components";
import PoppinsRegular from '../fonts/Poppins-Regular.ttf';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'PoppinsRegular';
        src: ${`url(${PoppinsRegular}) format('truetype')`};
        font-style: normal;
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        background-color: #ae9cff;
        font-family: 'PoppinsRegular';
    }
`;