import React, { Component, useState, useEffect } from "react";

export default class Header extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div id="header">
                <button onClick={() => this.props.navigate('home')}>Home</button>
                <br className="linebreak"></br>
                <button onClick={() => this.props.navigate('projects')}>Projects</button>
                <br className="linebreak"></br>
                <button onClick={() => this.props.navigate('skills')}>Skills</button>
                <br className="linebreak"></br>
                <button onClick={() => this.props.navigate('contact')}>Contact</button>
            </div>
            );
    }
}