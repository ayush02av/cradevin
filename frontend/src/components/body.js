import React, { Component } from "react";
import Contact from "./body/contact";
import Home from "./body/home";
import Projects from "./body/projects";
import Skills from "./body/skills";

export default class Body extends Component{
    constructor(props){
        super(props);
        this.state = {
            admin:Object,
            skills:Object,
            projects:Object,
        }
        this.getAdmin();
        this.getSkills();
        this.getProjects();
    }
    
    getAdmin = () => {
        fetch("/api/admin")
        .then( (response) => response.json() )
        .then( (data) => {
            this.setState({admin:data});
        });
    }

    getSkills = () => {
        fetch("/api/skills")
        .then( (response) => response.json() )
        .then( (data) => {
            this.setState({skills:data});
        });
    }
    
    getProjects = () => {
        fetch("/api/projects")
        .then( (response) => response.json() )
        .then( (data) => {
            this.setState({projects:data});
        });
    }

    render(){
        return (
            <div id="body">
                {
                    this.props.activeState==="home"?<Home admin={this.state.admin}/>:
                    this.props.activeState==="skills"?<Skills skills={this.state.skills}/>:
                    this.props.activeState==="projects"?<Projects projects={this.state.projects}/>:
                    this.props.activeState==="contact"?<Contact/>:
                    "yeah, so you know javascript. Congrats!"
                }
            </div>
        );
    }

}