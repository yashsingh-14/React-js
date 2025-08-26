import { useEffect,useState } from "react";
export function AvengerEffect(){
const [power,setPower] = useState(100)
const [vilpower,setvilpower] = useState(100)

const increase = () => {
    setPower (power+1)

}
const decrease = () => {
    setvilPower (vilpower-1)

}
useEffect(
    ()=>{
        console.log("useEffect is called")
        return ()=> {
            console.log("Clean up is called")
        }
    },[]
)
return<>
<h1>Power of Hero: {power}</h1>
<button type="button"onClick={increase} >Increase Power</button>

<h1>Power of villian: {vilpower}</h1>
<button type="button"onClick={decrease} >Decrease Power</button>
</>

}