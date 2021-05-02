import React  ,{Component} from 'react'

class State extends Component{
    constructor(){

        super()
        this.state={
            message:"welcome students"
        }
    }
    changeMessage(){
        this.setState({message:"Thanks for attending the mern stack"})
    }
    render(){
    return(
    
   <diV> <h1>{this.state.message}</h1>
   <button onClick={()=>this.changeMessage()}>Subscribe</button></diV>)
    }   
}

export default State