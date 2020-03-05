import React, {Component} from 'react'
import Container from 'react-bootstrap/Container'

export  default class Message extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <Container>
            <h1>{this.props.sender}</h1> <p>{this.props.time.toString()}</p>
            <p>{this.props.message}</p>
        </Container>

    }
}