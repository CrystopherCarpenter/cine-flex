import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components'


export default function Success() {
        return (
                <>
                        <PageTitle>Pedido feito com sucesso!</PageTitle>
                        <Main>
                                <div>
                                        <P>Filme e sessão</P>
                                        <Data>Enola Holmes</Data>
                                        <Data>24/06/2021 15:00</Data>
                                </div>
                                <div>
                                        <P>ingressos</P>
                                        <Data>Assento 15</Data>
                                        <Data>Assento 15</Data>
                                </div>
                                <div>
                                        <P>Comprador</P>
                                        <Data>Nome: João da Silva Sauro</Data>
                                        <Data>CPF: 123.456.798-10</Data>
                                </div>
                                <Button>Voltar para home</Button>
                        </Main>
                </>
        );
}

const Main = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 185px 24px 117px 24px;
        div{
                display: flex;
                flex-direction: column;
        }
`

const PageTitle = styled.div`
        position: fixed;
        left: 0px;
        top: 67px;
        width: 100vw;
        height: 110px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 5;
        font-weight: bold;
        font-size: 24px;
        line-height: 30px;
        color: #247A6B;
        background-color: #FFFFFF;
`
const P = styled.p`
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        color: #293845;
        margin-top: 30px;
`

const Data = styled.span`
        font-size: 22px;
        line-height: 26px;
        display: flex;
        align-items: center;
        color: #293845;
`

const Button = styled.button`
        width: 225px;
        height: 42px;
        position: fixed;
        left: calc((100% - 225px)/2);
        bottom: 147px;
        z-index:2;
        background: #E8833A;
        border-radius: 3px;
        display:flex;
        justify-content:center;
        align-items:center;
        color: #fff;
        :hover{
                cursor: pointer;
                filter: brightness(0.9);
                }
`