//This is an example how to create state component
//state  suitable to be use to create a dynamic component
import React, { Component } from 'react'

class Message extends Component {

    constructor(){
        super()
        this.state ={
            message: 'Welcome Visitor'
        }
    }   

    changeMessage(){
        this.setState({
            message:'Thank you for subscribing 🐣'
        })
    }



    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}> Subscribe</button>
            </div>

        ) 
    }
}


export default Message