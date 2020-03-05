import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from "./common/components/Auth/Auth";
import Conversations from "./common/components/Chat/Conversations";

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: props.date
        }
    }

    componentDidMount() {
        this.timerID = setInterval(() =>
            this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState((state, props) => ({
            date: new Date()
        }))
    }

    render() {
        return <h1>{this.state.date.toLocaleTimeString()}</h1>
    }
}


class App extends Component {
    constructor(props) {
        super(props);
        this.state = ({current: "AUTH"})
        this.handleChangeWidget = this.handleChangeWidget.bind(this);
    }

    handleChangeWidget(currentWidget) {
        this.setState({current: currentWidget});
        console.log(this.state.current);
    }

    render() {
        //alert(this.state.current);
        if (this.state.current === "AUTH")
            return (<Auth changeState={this.handleChangeWidget}/>);
        else if (this.state.current === "CHAT")
            return (<Conversations changeState={this.handleChangeWidget}/>);

    }
}

export default App;
