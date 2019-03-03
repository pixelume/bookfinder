import React from 'react';
import styled, { css } from 'styled-components';
// import { Button } from 'grommet';
import { shake } from '../animations';
import overlay from '../Assets/Images/overlay.png';

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
        background: radial-gradient(ellipse at center, rgba(234,242,225,1) 0%,rgba(254,254,253,1) 68%);
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

const BookWrapper = styled.div`
    position: relative;
    right: 0px;
    bottom: 30px;
    transform: rotate(0deg);
    ${props => props.animate
        ? `transform: rotate(3deg);
        right: 20px;
        bottom: 40px;`
        : null
    }
    transition: right 0.2s ease-out, transform 0.2s ease-out, bottom 0.2s ease-out;
`

const Book = styled.div`
    position: relative;
    transform: perspective(100) rotateY(-3deg);
    outline: 1px solid transparent;
    box-shadow: none;
    margin: 0;
    /* transition: bottom 1s ease-out; */
    &::before, &::after {
        position: absolute;
        top: 2%;
        height: 94%;
        content: ' ';
        z-index: -1;
    }
    &::before {
        width: 100%;
        left: 7.5%;
        background-image: url(${props => props.imgSrc}), url(${overlay});
        background-blend-mode: overlay;
        /* background-color: #5a2d18; */
        box-shadow: 2px 2px 10px #333;
        border-radius: 0px 5px 5px 0px;
        ${props => props.animate
            ? `box-shadow: 20px 10px 45px #333;`
            : null
        }
        transition: box-shadow 0.2s ease-out;
    }
    &::after {
        width: 5%;
        left: 100%;
        background-color: #EFEFEF;
        box-shadow: inset 0px 0px 5px #aaa;
        /* -moz-transform: rotateY(20deg); */
        transform: perspective(100) rotateY(20deg);
    }
    /* ${props => props.animate
        ? css`animation: ${shake} 1s linear;`
        : null
    } */
`

const CoverImg = styled.img`
    position: relative;
    /* max-width: 100%; */
    width: 128px;
    height: 198px;
    border-radius: 0px 5px 5px 0px;
`

// const CoverImg = styled.img`
//     margin-top: -25px;
//     /* grid-row: 1 / span 2; */
//     grid-column: 1 / span 1;
//     display: block;
//     width: 128px;
//     height: 198px;
//     box-shadow: 2px 2px 18px -1px rgba(191,191,191,1);
//     ${props => props.animate
//         ? css`animation: ${flip} 1s linear;`
//         : null
//     }
// `

const InfoPane = styled.div`
    /* width: 100%; */
    /* grid-row: 1 / span 2; */
    padding-left: 20px;
    grid-column: 2 / span 1;
`

const MoreBtn = styled.a`
    display: block;
    position: absolute;
    bottom: 15px;
    right: 15px;
    padding: 3px 6px;
    border-radius: 10px;
    background-color: #6fd696;
    font-size: 0.8rem;
    text-decoration: none;
    color: white;
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
                <BookWrapper animate={this.state.animate}>
                    <Book animate={this.state.animate} imgSrc={props.imgSrc}>
                        <CoverImg src={props.imgSrc} alt={props.title} /*animate={this.state.animate}*//>
                    </Book>
                </BookWrapper>
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