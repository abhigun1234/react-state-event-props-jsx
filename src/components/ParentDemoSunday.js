import React, { Component } from 'react';
import ChildDemoSunday from './ChildDemoSunday';

class ParentDemoSunday extends Component {

    constructor(props) {
        super(props);
      this.greetToParent=this.greetToParent.bind(this)  
    }
    // greetToParent(msg){

    //     alert(msg)
    // }
    // greetParent=() =>{


    // }
    render() {
        return (
            <div>
                

               <ChildDemoSunday greet={this.greetToParent}   name="amol"></ChildDemoSunday>
            </div>
        );
    }
}

export default ParentDemoSunday;