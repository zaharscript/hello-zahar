import React, { Component } from 'react'

class Welcome extends Component {
    render(){
        return <h1>I am {this.props.name} a.k.a {this.props.siblingName}</h1>
    }
}


export default Welcome