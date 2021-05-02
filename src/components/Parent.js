import React, { Component } from 'react';
import Child from './Child';

export default class Parent extends Component {
    constructor(){

        super()
        this.greetParent=this.greetParent.bind(this)
    }
    // greetParent(){

    //     alert('call from child')
    // }
    greetParent(msg){

        alert(msg)
    }
    render() {
        return (
            <div>
                <Child greet={this.greetParent}></Child>
            </div>
        );
    }
}
