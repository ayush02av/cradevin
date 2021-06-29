import React, {Component} from "react";
import {render} from "react-dom";
import Body from "./components/body";
import Header from "./components/header";

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            activeState:"home",
        }
        this.getAdmin();
    }

    getAdmin = () => {
        fetch("/api/admin")
        .then( (response) => response.json() )
        .then( (data) => {
            this.setState({admin:data});
        });
    }

    navigate = (newActiveState) => {
        this.setState(
            {
                activeState:newActiveState
            }
        )
    }

    render(){
        return (
            <>
                <Header activeState={this.state.activeState} navigate={this.navigate}/>
                <Body activeState={this.state.activeState}/>
            </>
        );
    }

}

const appDiv = document.getElementById("app");

render(<App/>, appDiv);