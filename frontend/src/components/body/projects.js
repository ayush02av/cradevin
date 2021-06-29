import React, { Component } from "react";

export default class Projects extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <>
                <span className="page-heading">Projects I have worked on</span>
                <div className="page-body">
                {
                        Object.entries(this.props.projects).map(project => {
                            return (
                                <div className="page-entry">
                                    <div className="page-entry-heading">
                                        {
                                            project[1].title
                                        }
                                    </div>
                                    <div className="page-entry-body">
                                        {
                                            project[1].abstract
                                        }
                                        <br/>
                                        <small>
                                            <a href={project[1].link} target="blank">
                                                Visit at : {project[1].link}
                                            </a>
                                        </small>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </>
        );
    }

}