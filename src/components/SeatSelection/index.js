import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components'
import Footer from "../Footer/index";

let request = { ids: [], name: ``, cpf: `` };
let seats = [];

export default function SeatSelection() {
        const legend = [
                { text: "Selecionado", bgColor: `#8DD7CF`, borderColor: `#1AAE9E` },
                { text: "Disponível", bgColor: `#C3CFD9`, borderColor: `#7B8B99` },
                { text: "Indisponível", bgColor: `#FBE192`, borderColor: `#F7C52B` }
        ];
        const sessionId = useParams();
        const [session, setSession] = useState();
        const [renderAux, setRenderAux] = useState(false);
        const [name, setName] = useState(``);
        const [CPF, setCPF] = useState(``);
        const isFilled = name !== `` && CPF !== `` && CPF.length === 14 && request.ids.length > 0
        let movie = ``;
        let selectedDay = ``;
        let selectedShowtime = ``;

        useEffect(() => {
                request = { ids: [], name: ``, cpf: `` };
                seats = [];
                const promise = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${sessionId.idSessao}/seats`);

                promise.then((answer) => {
                        setSession(answer.data);
                });
        }, []);

        function setSeat(seat) {
                if (!seat.isAvailable) {
                        alert("Esse assento não está disponível")
                } else if (request.ids.includes(seat.id)) {
                        request.ids.splice(request.ids.indexOf(seat.id), 1)
                        seats.splice(seats.indexOf(seat.name), 1)
                } else {
                        request.ids.push(seat.id)
                        seats.push(seat.name)
                }
                setRenderAux(!renderAux);
        }

        if (!session) {
                return <Span>Carregando...</Span>
        }

        movie = session.movie;
        selectedDay = session.day.weekday;
        selectedShowtime = session.name;

        return (
                <>
                        <PageTitle>Selecione o(s) assento(s)</PageTitle>
                        <Main>
                                <Seats>
                                        {session.seats.map(seat => (
                                                <Seat key={seat.id} available={seat.isAvailable} selected={request.ids.includes(seat.id) ? true : false} onClick={() => setSeat(seat)}>
                                                        <p>{seat.name}</p>
                                                </Seat>
                                        ))}
                                </Seats>
                                <Legend>
                                        {legend.map(legend => (
                                                <div>
                                                        <SeatLegend bgColor={legend.bgColor} borderColor={legend.borderColor}></SeatLegend>
                                                        <p>{legend.text}</p>
                                                </div>
                                        ))}
                                </Legend>
                                <DivInput>
                                        <p>Nome do comprador:</p>
                                        <Input placeholder="Digite seu nome" onChange={e => setName(e.target.value)} value={name}></Input>
                                </DivInput>
                                <DivInput>
                                        <p>CPF do comprador:</p>
                                        <Input placeholder="Digite seu CPF" onChange={e => setCPF(e.target.value)} value={CPF}></Input>
                                </DivInput>
                                <Link to={"/sucesso"} state={{ buyer: request, seats: seats, session: session }}>
                                        <Button isFilled={isFilled} onClick={() => {
                                                request.name = name;
                                                request.cpf = CPF;
                                                const promise = axios.post(`https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many`, request);
                                                promise.then((answer) => {
                                                });
                                        }}>{isFilled ? `Reservar assento(s)` : `Preencha todos os campos`}</Button>
                                </Link>
                                <Footer>{movie}{selectedDay}{selectedShowtime}</Footer>
                        </Main>
                </>
        )
}

const Span = styled.div`
        width: 250px;
        text-align: center;
        position: fixed;
        top: 200px;
        left: calc((100% - 250px)/2);
        font-size: 20px;
`

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
        row-gap: 18px;
        column-gap: 7px;
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
        /*pointer-events: ${props => (props.available ? `` : `none`)};*/                 /*substituto para o alert*/
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
        pointer-events: ${props => props.isFilled ? `` : `none`};
        filter: ${props => props.isFilled ? `brightness(1)` : `brightness(1.5)`};
        :hover{
                cursor: ${props => props.isFilled ? `pointer` : ``};
                filter: ${props => props.isFilled ? `brightness(0.9)` : `none`};
                }
`