import React from 'react'

function Columns() {
    const items = [{
        id: 1,
        name: 'Nikola'
    },
    {
        id: 2,
        name: "Viktor"
    },
    {
        id: 3,
        name: "Pera"
    }]
    return (
        <React.Fragment>
            {
                items.map(item => (
                    <td key={item.id}>{item.name}</td> /*kada vracamo iz map  moramo da vratimo sa() a ne objekar-{} */
                ))
            }
        </React.Fragment>
    )
}

export default Columns
