import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'

export default class Chat extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <Component >
                <h1>{this.props.peer}</h1>
                <p>{this.props.last_message}</p>
            </Component>
        )
    }
}