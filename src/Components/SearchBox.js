import React, { Component } from 'react';
import styled from 'styled-components';
import { Form, TextInput, Button } from "grommet";

const FormContainer = styled.div`
    margin: 2rem;
    width: 50%;
    text-align: center;
    align-self: center;
`

class SearchBox extends Component {

    render() {
        return (
            <FormContainer>
                <Form onSubmit={this.props.submitHandler}>
                    <div>
                        <TextInput
                            placeholder="Search by Title or Author"
                            onChange={this.props.changeHandler}
                        />
                        <Button style={{marginTop: "1rem"}} type="submit" primary label="Search"/>
                    </div>
                </Form>
            </FormContainer>
        )
    }
}

export default SearchBox;
