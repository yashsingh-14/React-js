import { Component } from "react";
import { useState } from "react";
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

// usestate.............



export function WelcomeFunction() {

    const [name, setName] = useState('Tony Stark')
    const [heroic_name, setheroicName] = useState('Ironman')

    const changeName = () => {
        setName('Steve Roger')
        setheroicName('Captain America')

    }
  
         render () 
         {
        return <>
        <h1>Hello {this.state.name}and Your herioc nmae is {this.state.heroic_name}</h1>
    <button type="button" onClick={this.changeName}>changeName</button>

        </>
    }
}
