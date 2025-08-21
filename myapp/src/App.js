// import { Component } from "react"

// export function Avenger(){
//     return <h1> Avanger Assemble</h1>
//     // return React.createElement('h1',null,'Avanger Assemble')
// }

// export class Avengerclass extends Component{
//     render() {
//         return<h1>Avenger Assemble By class</h1>
//     }
// }

import{ Avenger, Footer, Header, AvengerClass } from "./shield";

export function ShieldPass() {
    return <>
    <Header/>
    <Avenger fname='Steve' lname='Roger' />
    <Avenger fname='Tony' lname='Stark' />
    <AvengerClass fname='Bruce' lname='Banner' />
    <Footer/>
    </>
}