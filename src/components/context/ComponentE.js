import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'

class ComponentE extends Component {
    render() {
        return (
            <div>
                <p>Componenta E sa direktnim kontekstom {this.context}</p>
                <ComponentF />
            </div>
        )
    }
}
ComponentE.contextType = UserContext //uvozimo direktno kontekst i nakacimo na komponentu i mozemo ga i ovako koristiti "bolje ovako"

export default ComponentE
