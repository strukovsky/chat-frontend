import React, {Component} from 'react'
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import Col from "react-bootstrap/Col";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Feedback from "react-bootstrap/Feedback";
import "bootstrap/dist/css/bootstrap.min.css"
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Login from "../../ajax/Login";


export default class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: null,
            password: null,
            status: 'sign_up',
            validated: false,
            setValidated: false,
        }
    }


    render() {
        return (
            <Container>
                <ToggleButtonGroup name="status" onChange={(element) => {
                    this.setState({status: element})
                }}>
                    <ToggleButton value="sign_up">Sign up</ToggleButton>
                    <ToggleButton value="sign_in">Sign in</ToggleButton>
                </ToggleButtonGroup>

                <Form noValidate validated={this.state.validated} >
                    <FormGroup as={Col} md="4" controlId="validation_telephone">
                        <FormLabel>Phone number</FormLabel>
                        <FormControl required type='tel' onChange={(e) => {
                            let value = e.target.value;
                            if (value.length !== 11) {
                                e.target.className = "is-invalid"
                            } else {
                                let exists = Login.checkIfUserExists(value);
                                switch (this.state.status) {
                                    case "sign_in":
                                        if (exists) {
                                            e.target.className = "is-valid";
                                           this.setState({phone: value})
                                        } else
                                            e.target.className = "is-invalid";
                                        break;
                                    case "sign_up":
                                        if (!exists) {
                                            e.target.className = "is-valid";
                                            this.setState({phone: value})
                                        } else
                                            e.target.className = "is-invalid";
                                        break;

                                }
                            }

                        }} name="telephone" placeholder="+7(800)555-35-35"/>
                        <Feedback type="invalid">Phone number is not correct or
                            {(this.state.status === 'sign_up') ? " this phone number is already used" :
                                " there is no user with such phone number"}
                        </Feedback>
                        <Feedback type="valid">Nice!</Feedback>

                    </FormGroup>
                    <FormGroup as={Col} md="4" controlId="validation_password">
                        <FormLabel>Password</FormLabel>
                        <FormControl name="password" required type='password' onChange={(e) => {
                            if (e.target.value.length < 5)
                                e.target.className = "is-invalid";
                            else {
                                e.target.className = "is-valid";
                                let value = e.target.value;
                                console.log(this.state.phone);
                                this.setState( {password: value})
                            }

                        }}/>
                        <Feedback type="invalid">Password is too short. Min 5 symbols.</Feedback>
                        <Feedback type="valid">Nice!</Feedback>
                    </FormGroup>






                    <Button onClick={() => {
                        if(this.state.status === 'sign_up')
                        {
                            if(Login.signUp(this.state.phone, this.state.password))
                            {
                                this.props.changeState("CHAT")
                            }
                            else
                            {
                                this.setState({validated: false})
                            }
                        }
                        else if(this.state.status === 'sign_in')
                        {
                            //alert("I try to sign in");
                            if(Login.signIn(this.state.phone, this.state.password))
                            {
                                //alert("My attempt is good");
                                this.props.changeState("CHAT");
                                //alert("I changed the state");

                            }
                            else{
                                this.setState({validated: false})
                            }
                        }
                    }}>Lets go!</Button>
                </Form>
            </Container>
        );
    }


}