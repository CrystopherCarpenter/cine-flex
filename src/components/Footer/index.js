import { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components'

export default function Footer({ children }) {
        const [title, session] = children

        return (
                <PageFooter>
                        <FooterImg><img src="https://image.tmdb.org/t/p/w500/i4kPwXPlM1iy8Jf3S1uuLuwqQAV.jpg" alt="" /></FooterImg>
                        <FooterTitle>
                                <p>{title}</p>
                                <p>{!session ? `` : session} </p>
                        </FooterTitle>
                </PageFooter>
        );
}

const PageFooter = styled.div`
        display:flex;
        align-items:center;
        justify-content: flex-start;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100vw;
        height: 117px;
        background: #DFE6ED;
        border: 1px solid #9EADBA;                      
        z-index: 10;
`

const FooterImg = styled.div`
        width: 64px;
        height: 89px;
        background: #FFFFFF;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        position:relative;
        margin: auto 14px auto 10px;
        img{
                width: 48px;
                height: 72px;
                position: absolute;
                top: calc((100% - 72px)/2);
                left: calc((100% - 48px)/2); 
        }
`

const FooterTitle = styled.div`
        height: 30px;
        font-size: 26px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #293845;
`