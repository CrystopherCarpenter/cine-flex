import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components'
import Footer from "../Footer/index";


export default function SeatSelection() {
        const legend = [
                { text: "Selecionado", bgColor: `#8DD7CF`, borderColor: `#1AAE9E` },
                { text: "Disponível", bgColor: `#C3CFD9`, borderColor: `#7B8B99` },
                { text: "Indisponível", bgColor: `#FBE192`, borderColor: `#F7C52B` }
        ];

        let id = 0;

        const input = [`Nome`, `CPF`];

        return (
                <>
                        <PageTitle>Selecione o(s) assento(s)</PageTitle>
                        <Main>
                                <Seats>
                                        <Seat key={id} available={false} selected={false}>
                                                <p>01</p>
                                        </Seat>
                                </Seats>
                                <Legend>
                                        {legend.map(legend => (
                                                <div>
                                                        <SeatLegend bgColor={legend.bgColor} borderColor={legend.borderColor}></SeatLegend>
                                                        <p>{legend.text}</p>
                                                </div>
                                        ))}
                                </Legend>
                                {input.map(input =>
                                        <DivInput>
                                                <p>{input} do comprador:</p>
                                                <Input placeholder={`Digite seu ${input === `CPF` ? input : input.toLowerCase()}...`}></Input>
                                        </DivInput>
                                )}

                                <Button>Reservar assento(s)</Button>
                                <Footer>{`      `}{``}</Footer>
                        </Main>
                </>
        )
}

const Main = styled.div`
        display:flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 185px 24px 117px 24px;
`

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
        background-color: #FFFFFF;
`

const Seats = styled.ul`
        max-width: 330px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        row-gap: 7px;
        column-gap: 18px;
        margin-bottom: 16px;
`

const Seat = styled.li`
        box-sizing: border-box;
        width: 26px;
        height: 26px;
        border-radius: 12px;
        display:flex;
        justify-content: center;
        align-items: center;
        background: ${props => (props.selected ? `#8DD7CF` : props => props.available ? `#C3CFD9` : `#FBE192`)};
        border: 1px solid ${props => (props.selected ? `#1AAE9E` : props => props.available ? `#7B8B99` : `#F7C52B`)};
        :hover{
                cursor: pointer;
                filter: brightness(0.9);
        }
        p{
                font-size: 11px;
                display: flex;
                align-items: center;
                text-align: center;
                color: #000000;
        }
`

const SeatLegend = styled.div`
        box-sizing: border-box;
        width: 25px;
        height: 25px;
        background: ${props => props.bgColor};
        border: 1px solid ${props => props.borderColor};
        border-radius: 17px;
`

const Legend = styled.div`
        width: 325px;
        display: flex;
        justify-content: space-evenly;
        margin-bottom: 41px;
        div{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
        }
        div p{
                height: 28px;
                font-size: 13px;
                display: flex;
                align-items: center;
                color: #4E5A65;
        }
`

const DivInput = styled.div`
        margin-bottom: 7px;
        p{
                height: 25px;
                font-size: 18px;
                line-height: 21px;
                display: flex;
                align-items: center;
                color: #293845;
        }
`

const Input = styled.input`
        width: 327px;
        height: 51px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 3px;
        padding-left: 18px;
        padding-right: 18px;
        font-size: 18px;
        color: #293845;
        ::placeholder{
                font-style: italic;
                font-size: 18px;
                display: flex;
                align-items: center;
                color: #AFAFAF;
        }
        :focus{
                border: 3px solid #b2b2b2; 
        }
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
