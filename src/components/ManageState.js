import React  ,{Component} from 'react'

class ManageState extends Component{
    constructor(){

        super()
        this.state={
            message:"welcome students",
            count:0,
            
        }
    }
    changeMessage(){
        this.setState({message:"Thanks for attending the mern stack"})
    }
    changeMe(){
        this.setState({message:"thanks to join react as well"})
    }

    counter(){
        // this.state.count= this.state.count+1
    console.log("count",this.state.count)
    this.setState(({count:this.state.count+1}))
    }

    render(){
    return(
    
   <diV> <h1>{this.state.count}</h1>
   <button onClick={()=>this.counter()}>Counter</button></diV>)
    }   
}

export default ManageState