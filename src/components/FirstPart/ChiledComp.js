import React from 'react';

function ChiledComp(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}
export default ChiledComp