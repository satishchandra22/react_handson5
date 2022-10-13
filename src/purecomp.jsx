import React from "react";
export default class Purecomp extends React.PureComponent{
    
    state = {
        count: 0
    }
    increment=()=>{
    this.setState({count: this.state.count +1})
    console.log(this.state.count)
    }
    render(){
       return (
        <>
        <div>{this.state.count}</div>
        <button onClick={this.increment}>Click for increment</button>
        </>
       );
    }
 }