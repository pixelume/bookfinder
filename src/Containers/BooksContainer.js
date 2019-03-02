import React from 'react';
import styled from 'styled-components';
import Card from '../Components/Card';
import noImg from '../Assets/Images/noImg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { flip } from '../animations';

const ContainerDiv = styled.div`
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    max-width: 1450px;
    justify-content: center;
`

const LoadingAnim = styled(FontAwesomeIcon)`
    margin-top: 100%;
    animation: ${flip} 1s linear infinite;
    color: lightgrey;
`

const BooksContainer = props => {

    let display = null;
    if (props.loading) {
        display = <LoadingAnim icon="book" size="6x"/>
    } else if (props.bookData) {
        display = props.bookData.map((book, idx) => {
            const bookInfo = book.volumeInfo;
            return (
                <Card
                    key={book.id}
                    imgSrc={bookInfo.imageLinks? bookInfo.imageLinks.thumbnail: noImg}
                    title={bookInfo.title}
                    authors={
                        (bookInfo.authors)
                            ? (bookInfo.authors.length > 1)
                                ? bookInfo.authors.join(', ')
                                : bookInfo.authors
                            : "--None Found--"
                        }
                    publisher={bookInfo.publisher? bookInfo.publisher: "--None Found--"}
                    link={bookInfo.previewLink}
                />
            )
        })
    }
    if (props.err) {
        display = <h3>Unable to Fetch Book Data</h3>
    }

    return (
        <ContainerDiv>
            {display}
        </ContainerDiv>
    )
}

export default BooksContainer;
