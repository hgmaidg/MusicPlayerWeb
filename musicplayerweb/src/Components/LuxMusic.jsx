import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";

export default function LuxMusic() {
    return (
    <Container>
        <div className="luxmusic__body">
            <Sidebar/>
            <div className="body">
                <Header/>
                <div className="body__contents">
                    <Body/>
                </div>
            </div>
        </div>
        <div className="luxmusic__footer">
            <Footer/>
        </div>
    </Container>
    );
}

const Container = styled.div`
    max-width: 100vw;
    max-height: 100vh;
    overflow: hidden;
    display: grid;
    grid-template-rows: 85vh 15vh;
    color: white;
    .luxmusic__body {
        display: grid;
        grid-template-columns: 15vw 85vw;
        height: 100%;
        width: 100%;
        background-color: #17171f;
        .body {
            height: 100%;
            width: 100%;
            overflow: auto;
        }
    }
`;