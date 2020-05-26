import React from 'react'

function ClickFunction() {
    function handlerClick() {
        console.log('Clicked.')//unutar funkcije mozemo da definisemo fnj i da istu koristimo.
    }
    return (
        <div>
            <button onClick={handlerClick}>Click</button>
        </div>
    )
}

export default ClickFunction
