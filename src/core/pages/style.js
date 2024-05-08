import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    width: 90vmin;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    padding: 80px 50px;
    border-radius: 10px;
    box-shadow: 0 20px 40px rgba(38, 33, 61, 0.2);

    @media screen and (max-width: 600px) {
        width: 95vmin;
    }

    .search-box {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .search-box input {
        padding: 5px;
        width: 70%;
        border: none;
        outline: none;
        border-bottom: 3px solid #ae9cff;
        font-size: 20px;

        @media screen and (max-width: 600px) {
            width: 70%;
            font-size: 23px;
        }
    }

    .search-box button {
        padding: 15px 0;
        width: 25%;
        background-color: #ae9cff;
        border: none;
        outline: none;
        color: #fff;
        border-radius: 5px;
        font-size: 20px;

        @media screen and (max-width: 600px) {
            width: 30%;
            font-size: 23px;
        }
    }

    .result {
        font-size: 40px;
        color: #1f194c;
    }

    .result .word {
        display: flex;
        justify-content: space-between;
        margin-top: 80px;

        @media screen and (max-width: 600px) {
            flex-direction: column;
        }
    }

    .result button {
        background-color: transparent;
        color: #ae9cff;
        border: none;
        outline: none;
        font-size: 24px;
    }

    .result .details {
        display: flex;
        gap: 10px;
        color: #b3b6d4;
        margin: 5px 0 20px 0;
        font-size: 24px;
    }

    .word-meaning {
        color: #575a7b;
        font-size: 26px;
    }

    .word-example {
        color: #575a7b;
        font-style: italic;
        border-left: 5px solid #ae9cff;
        padding-left: 20px;
        margin-top: 30px;
        font-size: 25px;
    }

    .error {
        margin-top: 80px;
        text-align: center;
    }
`;