import React, { Component } from "react";

export default class Contact extends Component{
    constructor(props){
        super(props);
    }

    sendMessage(){
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;
        
        if ( email === "" || !(email.includes("@")) || email.indexOf("@")+1 === email.length ){
            window.alert("Invalid Email");
            return;
        }else if ( message === "" ){
            window.alert("Please enter some message first");
            return;
        }else{
            const messageBody = {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({
                "email":email,
                "message":message,
                }),
            };
            
            fetch("/api/message/", messageBody)
            .then((response) => {
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
            })
            .then((response) => {
                window.alert("Thanks for contacting me, "+email+". I'll get back to you soon!");
            })
        }
    }

    render(){
        return (
            <>
                <span className="page-heading">Wish to contact me?</span>
                <div className="page-body">
                    <div className="page-entry">
                        <div className="page-entry-heading">
                            Reach out
                        </div>
                        <div className="page-entry-body">
                            Mail : <a href="mailto:ayush02av@gmail.com" target="blank">ayush02av@gmail.com</a>
                            <br/><br/>
                            Whatsapp : <a href="https://api.whatsapp.com/send?phone=+919315095046&text=Hey I checked your site cradevin" target="blank">+91 931-509-5046</a>
                            <br/><br/>
                            Call : <a href="tel:+919315095036" target="blank">+91 931-509-5046</a>
                        </div>
                    </div>
                    
                    <div id="message-form" className="page-entry">
                        <div className="page-entry-heading">
                            Or send a message
                        </div>
                        <div className="page-entry-body">
                            <input type="email" name="email" id="email" placeholder="Your email?"/>
                            <br/><br/>
                            <textarea type="name" name="message" id="message" placeholder="Your message"></textarea>
                            <br/><br/>
                            <button onClick={this.sendMessage} className="submitbutton">Send</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}