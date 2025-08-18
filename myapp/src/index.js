import { Avenger } from "./App";
import React from "react";
import ReactDom from "react-dom/client"
import { Avengerclass } from "./App";


const container = document.getElementById('root')
const root = ReactDom.createRoot(container)
//root.render(changer/>)
//reet.render(changerClass/>)
root.render(<>
    <Avenger/>
    <Avengerclass/>
</>)