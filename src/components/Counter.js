import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }
    }
    // incremnet() {
    //     this.setState({
    //         counter: this.state.counter + 1
    //     })
    // }
    incremnet() {
        this.setState(prethodnoStanje => ({ // ovde kao parametar prima ceo state
            counter: prethodnoStanje.counter + 1 /* kro ovu fnj mozemo da pristupimo samom statu, pa taj isti state
           pozivamo i nad njim opet uzimamo taj state koji smo prosledili i referenciramo na brojac i taj isti brojac povecamo 
           za 1 i tako povecamo */
        }))
    }
    incremnetFive() {
        this.incremnet()
        this.incremnet()
        this.incremnet()
        this.incremnet()
        this.incremnet()
    }


    render() {
        return (
            <div>
                <div>
                    Counter = {this.state.counter}
                </div>
                <button onClick={() => this.incremnetFive()}>Incremnet</button>
            </div>
        )
    }
}

export default Counter
