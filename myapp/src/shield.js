import { Component } from "react";

export function Header () {
    return <h1>Welcome to the shield </h1>
}

export function Avenger (props) {
    return <h2>Hello i am  {props. fname} {props.lname}  </h2>

}

export function Footer(){
    return <h3>Shield copyright@123455</h3>

}
export class AvengerClass extends Component{
    render() {
        return <h2>Hello i am {this.props.fname}{this.props.lname }By class  </h2>
    }

}