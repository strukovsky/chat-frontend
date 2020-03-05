import React, {Component} from 'react'
import Chat from "../../ajax/Chat";
import Conversation from "./Conversation";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Messages from "./Messages";
import Button from "react-bootstrap/Button";
import Message from "./Message";
export default class Conversations extends Component {
    constructor(props) {
        super(props);
        this.currentConversationChanged = this.currentConversationChanged.bind(this);
        this.state = {
            current: "89245768348",
            convs: "",
        };
    }



    currentConversationChanged(conversation)
    {
        this.setState({current: conversation});
        console.log(this.state.current);
    }




    render() {
        let array = Array();
        let objects = Chat.loadConversations().conversations;
        let length = objects.length;
        for(let i = 0; i < length; i++)
        {
            let currentObject = objects[i];
            array.push(
                (<Button key={i} onClick={(e) => {this.currentConversationChanged(e.currentTarget.innerHTML)}}>{currentObject.peer}</Button>))
        }

        return (
            <Container>
                <Col>
                    <Container>
                        {array}
                    </Container>
                </Col>
                <Col>
                    <Container>
                        {Chat.loadMessages(this.state.current).map((elem, i) => (
                                <Message key={i} sender={elem.sender} message={elem.message} time={elem.time}/>
                            )
                        )}
                    </Container>
                </Col>

            </Container>
        )
    }
}