import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components'

export default function Home() {
        const [movies, setMovies] = useState();

        useEffect(() => {
                const promise = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies");

                promise.then((res) => {
                        setMovies(res.data);
                });
        }, []);

        if (!movies) {
                return <span>Carregando...</span>
        }

        return (
                <>
                        <PageTitle>Selecione o filme</PageTitle>
                        <Main>
                                <Movies>{movies.map((movie) => (
                                        <Movie key={movie.id}>
                                                <Link to={`/sessoes/${movie.id}`}>
                                                        <img src={movie.posterURL} alt={movie.title} />
                                                </Link>
                                        </Movie>
                                ))}
                                </Movies>
                        </Main>
                </>
        );
}

const Main = styled.div`
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 185px;
        padding-bottom: 117px;
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

const Movies = styled.ul`
        max-width: 50vw;
        row-gap: 11px;
        column-gap: 30px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
`

const Movie = styled.li`
        width: 145px;
        height: 209px;
        background: #FFFFFF;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        position:relative;
        img{
                width: 129px;
                height: 193px;
                position: absolute;
                top: calc((100% - 193px)/2);
                left: calc((100% - 129px)/2); 
        }
        :hover{
                cursor: pointer;
        }
`