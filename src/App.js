import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from "./common/components/Auth/Auth";

class Clock extends Component{
    constructor(props) {
        super(props);
        this.state = {
            date : props.date
        }
    }

    componentDidMount() {
        this.timerID = setInterval(() =>
           this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick()
    {
        this.setState((state, props)=>({
            date: new Date()
        }))
    }

    render() {
        return <h1>{this.state.date.toLocaleTimeString()}</h1>
    }
}

class App extends Component {
  render() {
    return (
        <Auth/>
    );
  }
}

export default App;
