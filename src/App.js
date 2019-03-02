import React, { Component } from "react";
import { Grommet } from "grommet";
import styled from "styled-components";
// import logo from "./logo.svg";
// import "./App.css";
// import MainPage from './Containers/MainPage';
import SearchBox from './Components/SearchBox';
import axios from 'axios';
import BooksContainer from "./Containers/BooksContainer";
import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearch,
    faBook
} from '@fortawesome/free-solid-svg-icons';

library.add(
    faSearch,
    faBook
    )

const theme = {
    global: {
        font: {
            family: "Montserrat",
            size: "14px",
            height: "20px"
        }
    }
};

const MainWindow = styled.div`
    display: flex;
    flex-flow: column;
    width: 100%;
    height: 100vh;
    justify-content: flex-start;
    align-items: center;
`

class App extends Component {

    state = {
        searchQuery: '',
        bookData: null,
        err: null,
        loading: false
    }

    inputChangeHandler = e => {
        this.setState({searchQuery: e.target.value})
    }

    submitHandler = () => {
        this.setState({loading: true})
        axios.get('https://www.googleapis.com/books/v1/volumes', {
            params: {
                q: this.state.searchQuery
            }
        })
        .then(res => this.setState({bookData: res.data.items, loading: false, searchQuery: ''}))
        .catch(err => this.setState({err: err, loading: false, searchQuery: ''}))
    }

    render() {
        return (
            <Grommet theme={theme}>
                <MainWindow>
                    <h1 >Book Finder</h1>
                    <SearchBox
                        changeHandler={e => this.inputChangeHandler(e)}
                        submitHandler={this.submitHandler}
                        searchQuery={this.state.searchQuery}
                    />
                    <BooksContainer {...this.state}/>
                </MainWindow>
            </Grommet>
        );
    }
}

export default App;
