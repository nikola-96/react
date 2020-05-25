import React, { Component } from 'react'
import ChiledComp from './ChiledComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parentName: 'Parent'
        }
        this.greetParent = this.greetParent.bind(this)//moramo odraditi bind jer fnj alert nece raditi, jer ne zna  sta je this
        //jer ova fnj ima globalni scoupe
    }
    greetParent(props) {
        console.log('ovo radi')//ona fnj koja ima direktne veze sa ovim scopom, radice
        alert(`Helo from ${this.state.parentName}. Props coming from ${props} component.`)//ova nece, jer potice sa globalnog
    }

    render() {
        return (
            <div>
                <ChiledComp greetHandler={this.greetParent} />
            </div>
        )
    }
}

export default ParentComp
