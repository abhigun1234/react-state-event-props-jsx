import React, { Component } from 'react';

class Login extends Component {
     constructor(){
        super()
             this.state={name:'abhishek',email:'abhi@gmail.com'}
             this.changeData=this.changeData.bind(this)
     }
     changeData(){
         console.log("this",this)
          this.setState({name:'amol',email:'amlya@gmail.com'})
     }
    render() {
        return (
            
            <div>
               <h1> {this.state.name} </h1>
            
              <h2>  {this.state.email}</h2>
              <button onClick={this.changeData}>changeData</button>
            </div>
        );
    }
}

export default Login;