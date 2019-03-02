import React from 'react';
import styled, { css } from 'styled-components';
// import { Button } from 'grommet';
import { flip } from '../animations';

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
        /* transform: scale(1.03);
        transition: transform 0.15s ease-out; */
        background: radial-gradient(ellipse at center, rgba(237,247,222,1) 0%,rgba(254,254,253,1) 100%); 
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
    ${props => props.animate
        ? css`animation: ${flip} 1s linear;`
        : null
    }
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
    bottom: 10px;
    right: 10px;
    padding: 5px;
    border-radius: 10px;
    background-color: #6fd696;
    font-size: 0.6rem;
    text-decoration: none;
    color: black;
`

class Card extends React.Component {

    state = {animate: false}

    render() {
        const {
            props,
        } = this;

        return (
            <CardContainer
                onMouseEnter={() => this.setState(() => ({animate: true}))}
                onMouseLeave={() => this.setState(() => ({animate: false}))}
            >
                <CoverImg src={props.imgSrc} alt={props.title} animate={this.state.animate}/>
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
}

export default Card;