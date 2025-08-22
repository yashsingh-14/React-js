import { Component } from "react";
export class WELCOME extends Component{

    constructor (props){
        super (props)
        this.state ={
            name: 'Tony  Stark'
            
            
            
        }
    }



    changename = () =>{
        this.setState({name:'Steve Roger', heroic_name:'captain American'})
    }



    render (){
        return <>
        <h1>Hello {this.state.name}and Your herioc nmae is {this.state.heroic_name}</h1>
    <button type="button" onClick={this.changename}>changename</button>

        </>
    }
}