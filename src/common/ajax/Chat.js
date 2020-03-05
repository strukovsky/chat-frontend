import React, {Component} from 'react'

export default class Chat {
    static loadConversations() {
        return {
            conversations:
                [
                {peer: "89245768348", lastMessage: "hello!"},
                {peer: "89245767648", lastMessage: "OK!"}
            ]
        }
    }

    static loadMessages(peer)
    {
        if(peer==="89245768348")
        {
            return [
                {
                    sender: "89245768348",
                    message: "test!",
                    time: new Date()
                },
                {
                    sender: "89255258020",
                    message: "dad!",
                    time: new Date()
                },
                {
                    sender: "89255258020",
                    message: "hello!",
                    time: new Date()
                }
            ]
        }
        if(peer==="89245767648")
        {
            return [
                {
                    sender: "89245767648",
                    message: "tesfsdafsdfsdt!",
                    time: new Date()
                },
                {
                    sender: "89245767648",
                    message: "sasda!",
                    time: new Date()
                },
                {
                    sender: "89255258020",
                    message: "OK!",
                    time: new Date()
                }
            ]
        }

    }
}