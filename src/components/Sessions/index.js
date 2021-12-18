import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components'
import Footer from "../Footer/index";

export default function Sessions() {
        const movieId = useParams();
        const [movie, setMovie] = useState();
        const selectedDay = ``;
        const selectedShowtime = ``;

        useEffect(() => {
                const promise = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${movieId.idFilme}/showtimes`);

                promise.then((answer) => {
                        setMovie(answer.data);
                });
        }, []);

        if (!movie) {
                return <Span>Carregando...</Span>
        }

        return (
                <>   <PageTitle>Selecione o horário</PageTitle>
                        <Main>
                                <ul>
                                        {movie.days.map(day => (
                                                <Days key={day.id}>
                                                        <p>{day.weekday} - {day.date}</p>
                                                        <Times>
                                                                {day.showtimes.map(showtime => (
                                                                        <Link to={`/assentos/${showtime.id}`}>
                                                                                <Showtime key={showtime.id}>{showtime.name}</Showtime>
                                                                        </Link>
                                                                ))}
                                                        </Times>
                                                </Days>
                                        ))}
                                </ul>
                                <Footer>{movie}{selectedDay}{selectedShowtime}</Footer>
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
        background-color: #FFFFFF;
`

const Main = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-arround;
        padding: 185px 24px 117px 24px;
`

const Days = styled.li`
        z-index:1;
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
`

const Showtime = styled.li`
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
`

const Span = styled.div`
        width: 250px;
        text-align: center;
        position: fixed;
        top: 200px;
        left: calc((100% - 250px)/2);
        font-size: 20px;
`