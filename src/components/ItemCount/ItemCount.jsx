import { useState } from "react";
import './ItemCount.css'

function ItemCount() {
    const inicial = 1
    
    const stock = 9
    
    const [ count, setCount ] = useState(inicial)

    const addItem = () => {
        alert(`Agregaste ${count} productos`)
    }


    const addCount = () => {
        setCount (count + 1) 
    }

    const subsCount = () => {
        setCount (count - 1)
    } 

    return (
        <div className="counter">
            <label>{count}</label>
            <button className="counter-button" onClick={addCount} disabled={count === stock ? true:null}>+</button>
            <button className="counter-add" onClick={addItem}>Agregar</button>
            <button className="counter-button" onClick={subsCount} disabled={count === inicial ? true:null}>-</button>
        </div>
    )
}

export default ItemCount;