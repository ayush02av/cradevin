import React, { Component } from "react";

export default class Skills extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <>
                <span className="page-heading">Skills still counting...</span>
                <div className="page-body">
                    {
                        Object.entries(this.props.skills).map(skill => {
                            return (
                                <div className="page-entry">
                                    <div className="page-entry-heading">
                                        {
                                            skill[1].title
                                        }
                                    </div>
                                    <div className="page-entry-body">
                                        {
                                            skill[1].abstract
                                        }
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