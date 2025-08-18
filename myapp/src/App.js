import { Component } from "react"

export function Avenger(){
    return <h1> Avanger Assemble</h1>
    // return React.createElement('h1',null,'Avanger Assemble')
}

export class Avengerclass extends Component{
    render() {
        return<h1>Avenger Assemble By class</h1>
    }
}