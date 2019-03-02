import React from 'react';
import styled from 'styled-components';
// import { Button } from 'grommet';
// import { bounce } from '../animations';

const CardContainer = styled.div`
    position: relative;
    font-size: 0.9rem;
    margin: 20px;
    background-color: white;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 128px 1fr;
    grid-template-rows: 1fr;
    width: 600px;
    height: 208px;
    padding: 5px 20px;
    overflow: visible;
    box-sizing: border-box;
    box-shadow: 2px 2px 18px -1px rgba(191,191,191,1);
    transition: transform 0.2s ease-out;
    &:hover {
        transform: scale(1.05);
        transition: transform 0.2s ease-out;
    }

    @media(max-width: 650px) {
        @media(min-width: 421px) {
            width: 550px;
            font-size: 0.7rem;
        }
        @media(max-width: 420px) {
        width: 320px;
        font-size: 0.6rem;
        }
    }
`

const CoverImg = styled.img`
    margin-top: -25px;
    /* grid-row: 1 / span 2; */
    grid-column: 1 / span 1;
    display: block;
    width: 128px;
    height: 198px;
    box-shadow: 2px 2px 18px -1px rgba(191,191,191,1);
`

const InfoPane = styled.div`
    /* width: 100%; */
    /* grid-row: 1 / span 2; */
    padding-left: 20px;
    grid-column: 2 / span 1;
`

const MoreBtn = styled.a`
    display: block;
    position: absolute;
    bottom: 4px;
    right: 4px;
    padding: 5px;
    border-radius: 10px;
    background-color: #6fd696;
    font-size: 0.6rem;
    text-decoration: none;
    color: black;
`

const Card = props => {
    return (
        <CardContainer>
            <CoverImg src={props.imgSrc} alt={props.title}/>
            <InfoPane>
                <h3>{props.title}</h3>
                <p><em>By:</em> {props.authors}</p>
                <p><em>Publisher:</em> {props.publisher}</p>
                {/* <a href={props.link}>More Info</a> */}
            </InfoPane>
            <MoreBtn href={props.link}>More Info</MoreBtn>
        </CardContainer>
    )
}

export default Card;