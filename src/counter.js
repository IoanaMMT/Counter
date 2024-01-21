import React, { useState } from "react";


function Counter() {
    const [counter, setCounter] = useState(0);

    function increase() {
        setCounter(prevCounter => prevCounter + 1)
    }

    function decrease() {
        setCounter(prevCounter => prevCounter - 1)
    }


    return (
        <>
            <div className="masterContainer">
                <div className = "container">
                    <div className = "headingCounter">
                    <h1>Counter</h1>
                    <h2 className="counterNumber">{counter}</h2>
                    </div>
                    <div className = "buttons" >
                    <button onClick = {increase}>+</button>
                    <button onClick = {decrease}>-</button>
                    </div>
                    
                    
                </div>
            </div>
        </>
    )

}

export default Counter