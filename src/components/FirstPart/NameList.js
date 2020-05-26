import React from 'react'
import Person from './Person'

export default function NameList() {
    const persons = [{
        id: 1,
        age: 23,
        name: "Nikola",
    },
    {
        id: 2,
        age: 16,
        name: "Viktor",

    },
    {
        id: 3,
        age: 33,
        name: "Pera"

    }]/*mozemo ovako da ispisujemo podatke, a takodje moze se to raditi i direktno u return vrednosti */
    const render = persons.map(person => <div><h1>My name is {person.name}</h1><p>I am {person.age} years old.</p></div>)
    // return (
    //     <div>
    //         {render}
    //     </div>
    // )
    return (
        <div> {/*ovo je drugi nacin kako je moguce odraditi ovo */}
            {persons.map(person => <Person key={person.id} person={person} />)}
        </div>
    )
}
