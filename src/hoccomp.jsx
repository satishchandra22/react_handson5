import React from "react";
import Hoc from "./hoc";
import Purecomp from "./purecomp";
export default class Hoccomp extends React.PureComponent{
    
    state = {
        count: 1
    }
    increment=()=>{
    this.setState({count: this.state.count +1})
    console.log(this.state.count)
    }
    render(){
       if (this.state.count%5===0){
        const L = Hoc(Purecomp);
        return (
            <>
            <L/>
            <button onClick={this.increment}>Click for increment</button>
            </>
        );
       } else {
        return (
            <>
            <div>{this.state.count}</div>
            <button onClick={this.increment}>Click for increment</button>
            </>
        );
       }
      
    }
 }