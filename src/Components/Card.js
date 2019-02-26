import React from 'react';
import styled from 'styled-components';
// import { Button } from 'grommet';

const CardContainer = styled.div`
    font-size: 0.9rem;
    margin: 20px;
    background-color: white;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 128px 1fr;
    grid-template-rows: 1fr;
    width: 400px;
    height: 208px;
    padding: 20px;
    overflow: visible;
    box-sizing: border-box;
    box-shadow: 2px 2px 18px -1px rgba(191,191,191,1);

    @media(max-width: 375px) {
        width: 350px;
        font-size: 0.6rem;
    }
`

const CoverImg = styled.img`
    margin-top: -40px;
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

const Card = props => {
    return (
        <CardContainer>
            <CoverImg src={props.imgSrc} alt={props.title}/>
            <InfoPane>
                <h3>{props.title}</h3>
                <p>By: {props.authors}</p>
                <p>Publisher: {props.publisher}</p>
                <a href={props.link}>More Info</a>
            </InfoPane>
        </CardContainer>
    )
}

export default Card;