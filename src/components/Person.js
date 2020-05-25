import React from 'react'

export default function Person(props) {
    return (
        <div>
            <div><h1>My name is {props.person.name}</h1><p>I am {props.person.age} years old.</p></div>
        </div>
    )
}
