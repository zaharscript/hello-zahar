import React, {Component, component} from 'react'
const Greeting = (props)=> {
    console.log(props)
   return (
   <div>
        <h1>I am {props.name} a.k.a {props.siblingName}</h1>
        {props.children}
   </div>
   )
}
   


export default Greeting;
