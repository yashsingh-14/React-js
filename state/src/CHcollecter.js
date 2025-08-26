export function Main(){

    const power1 = useAvengerPower()
    const power2 = useAvengerPower()
     const power3 = useAvengerPower()
    
     return <>
     <h1>Power of custem 1 : {power1.power}</h1>
     <button type="button"onClick={power1.increase}>increase Power </button>
     <h1>Power of custem 2 : {power2.power}</h1>
     <button type="button"onClick={power2.increase}>increase Power </button>
     <h1>Power of custem 3: {power3.power}</h1>
     <button type="button"onClick={power3.increase}>increase Power </button>
     </>
}