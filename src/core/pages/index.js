import React from "react";
import { Container } from "./style";
import script from "../scripts/script";

export default function Main(){
    return(
        <>
            <audio id="sound"></audio>
            <Container>
                <div class="search-box">
                    <input type="text" placeholder="Type the word here..." id="inp-word"/>
                    <button id="search-btn">Search</button>
                </div>
                <div class="result" id="result">
                    {/*Javascript code will be here*/}
                </div>
            </Container>
        </>
    );
}