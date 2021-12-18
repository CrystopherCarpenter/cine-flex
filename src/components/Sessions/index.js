import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components'
import Footer from "../Footer/index";

export default function Sessions() {
        const id = 0;
        return (
                <>   <PageTitle>Selecione o horário</PageTitle>
                        <Main>
                                <ul>
                                        <Showtime key={id}>
                                                <p>Quarta-feira - 24/06/2021</p>
                                                <Times>
                                                        <li>15:00</li>
                                                        <li>19:00</li>
                                                </Times>
                                        </Showtime>
                                </ul>
                                <Footer>{`One night in Bangkok`}{``}</Footer>
                        </Main>
                </>
        )
}


const PageTitle = styled.div`
        position: fixed;
        left: 0px;
        top: 67px;
        width: 100vw;
        height: 110px;
        z-index: 5;
        font-size: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #293845;
        background - color: #FFFFFF;
        `
const Main = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-arround;
        padding: 185px 24px 117px 24px;
`

const Showtime = styled.li`
        p{
                height: 35px;
                font-family: Roboto;
                font-size: 20px;
                line-height: 23px;
                display: flex;
                align-items: center;
                color: #293845;
                margin-top: 24px;
                margin-bottom: 24px;
        }
`

const Times = styled.ul`
        margin: 24 auto;
        display: flex;
        flex-wrap: wrap;
        li{
                width: 83px;
                height: 43px;
                background: #E8833A;
                border-radius: 3px;
                margin-right: 8px;
                margin-bottom: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                :hover{
                        cursor: pointer;
                        filter: brightness(0.9);
                }
        }
`