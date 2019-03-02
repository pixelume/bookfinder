import React, { Component } from 'react';
import styled from 'styled-components';
import { Form, TextInput, Button } from "grommet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                            value={this.props.searchQuery}
                        />
                        <Button
                            style={{marginTop: "1rem"}}
                            type="submit"
                            primary
                            label={<><FontAwesomeIcon icon="search"/>&nbsp;Search</>}/>
                    </div>
                </Form>
            </FormContainer>
        )
    }
}

export default SearchBox;
