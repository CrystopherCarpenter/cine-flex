import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled, { createGlobalStyle } from 'styled-components';
import Home from "../Home/index";
import Sessions from "../Sessions/index";
import SeatSelection from "../SeatSelection/index";
import Success from "../Success";

const GlobalStyle = createGlobalStyle`
* {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font-weight: normal;
        vertical-align: baseline;
        font-family: "Roboto", sans-serif;
        box-sizing: border-box;
        -ms-overflow-style: none;   
        scrollbar-width: none;      
                &::-webkit-scrollbar {
                        display: none;      
                }
                & ul, li, button, input, a{
                        all: unset;
}
  }
`

export default function App() {
        return (
                <>
                        <GlobalStyle />
                        <Header>
                                <h1>CINEFLEX</h1>
                        </Header>
                        <BrowserRouter>
                                <Routes>
                                        <Route path="/" element={<Home />}></Route>
                                        <Route path="/sessoes/:idFilme" element={<Sessions />}></Route>
                                        <Route path="/assentos/:idSessao" element={<SeatSelection />}></Route>
                                        <Route path="/sucesso" element={<Success />}></Route>
                                </Routes>
                        </BrowserRouter>
                </>
        )
}

const Header = styled.div`
        width: 100vw;
        height: 67px;
        background-color: #c3cfd9;
        position: fixed;
        top: 0px;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
        h1{
                font-size: 34px;
                color: #E8833A;
        }
`
