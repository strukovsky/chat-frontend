import React, {Component} from 'react'
import Container from "react-bootstrap/Container";
import Chat from "../../ajax/Chat";
import Message from "./Message";
export default class Messages extends Component{
    constructor(props) {
        super(props);
        this.state = {
            current:"89245768348"
        }
        if(this.props.current)
            this.setState({current: this.props.current})
    }



    render() {
        return (
            <Container>
                {Chat.loadMessages(this.state.current).map((elem, i) => (
                    <Message key={i} sender={elem.sender} message={elem.message} time={elem.time}/>
                    )
                )}
            </Container>
        );
    }
}