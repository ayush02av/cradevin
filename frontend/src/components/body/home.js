import React, { Component } from "react";

export default class Home extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <>
                <span className="page-heading">Hey, I am {this.props.admin.first_name} {this.props.admin.last_name} </span>
                <div className="page-body">
                    Aspiring Full Stack Web Developer
                    <br/>
                    Networking Enthusiast
                    <br/>
                    <br/><br/>

                    <img src="/static/images/cradevin.jpg" id="cradevin-img" />
                    <br/>
                    <i>Do check my projects</i>

                    <div className="page-entry">
                        <div className="page-entry-heading">Socials</div>
                        <div className="page-entry-body">
                            <a href="https://linkedin.com/in/ayushverma02" target="blank">Linkedin</a>
                            <br/><br/>
                            <a href="https://github.com/ayush02av" target="blank">Github</a>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}