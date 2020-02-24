import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import FormLabel from "react-bootstrap/FormLabel";
import Button from "react-bootstrap/Button";
import '/src/ajax/Login.js'
import checkIfUserExists from "../../ajax/Login";

export default class SignUp extends Component{
    constructor(props) {
        super(props);
        this.state = {
            canUserPress: false
        }
    }

    handleChangeUsername(item)
    {
        this.setState({canUserPress: checkIfUserExists(item.value)});
    }

    handleChangePassword(item)
    {
        this.setState({canUserPress: item.value.length > 4})
    }

    render() {
        return (
            <Container>
                <Form>
                    <h1>Please, sign up to use Chat. </h1>
                    <FormLabel>Your phone number</FormLabel>
                    <FormControl type="telephone" onChange={this.handleChangeUsername}/>
                    <FormLabel>Password</FormLabel>
                    <FormControl type="password" onChange={this.handleChangePassword}/>
                    <Button {this.state.canUserPress? 'variant="primary"' : 'variant="secondary"' }type="submit">Sign In!</Button>
                </Form>
            </Container>
        );
    }
}