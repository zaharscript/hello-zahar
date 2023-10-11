import React from "react";

const Hello=() => {
    //this is jsx
    return (
        <div className="helloOne">
           <h1>Hello everything</h1> 
        </div>
    )
    // this is not jsx way
    // return React.createElement(
    //     'div',
    //     {id: 'hello', className: 'dummyClass'},
    //     React.createElement('h1',null,'Hello everything')
    // )


}

export default Hello