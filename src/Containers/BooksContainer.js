import React from 'react';
import styled from 'styled-components';
import Card from '../Components/Card';
import Spinner from '../Components/Spinner';
import noImg from '../Assets/Images/noImg.png';

const ContainerDiv = styled.div`
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    max-width: 1000px;
    justify-content: center;
`

const BooksContainer = props => {

    let display = null;
    if (props.loading) {
        display = <Spinner />
    } else if (props.bookData) {
        display = props.bookData.map((book, idx) => {
            const bookInfo = book.volumeInfo;
            return (
                <Card
                    key={book.id}
                    imgSrc={bookInfo.imageLinks? bookInfo.imageLinks.thumbnail: noImg}
                    title={bookInfo.title}
                    authors={bookInfo.authors.join(', ')}
                    publisher={bookInfo.publisher}
                    link={bookInfo.previewLink}
                />
            )
        })
    } else if (props.err) {
        display = <h3>Unable to Fetch Book Data</h3>
    }

    return (
        <ContainerDiv>
            {display}
        </ContainerDiv>
    )
}

export default BooksContainer;
