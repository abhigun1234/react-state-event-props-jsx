import React, { Component } from 'react';

class StateDemo extends Component {
    constructor(){
        super()
        this.state={name:'abhishek'}
        // this.changeName = this.changeName.bind(this)
    }
    changeName(){
      console.log("this",this)
        this.setState({name:'ravi'})
    }
    render() {

        return (
            <div>
                <h1>

                    {this.state.name}
                </h1>
                <button onClick={this.changeName}>Click</button>
            </div>
        );
    }
}

export default StateDemo;