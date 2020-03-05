import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Button from "react-bootstrap/Button";

export default class Conversation extends Component{
    constructor(props) {
        super(props);
    }



    render() {
        return(
            <div >
                <Button onClick={this.props.onClick}>{this.props.peer}</Button>
                <p>{this.props.last_message}</p>

            </div>
        )
    }
}