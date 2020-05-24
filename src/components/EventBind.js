import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: 'Hello'
        }
        this.clickHandler = this.clickHandler.bind(this)// ovde u samom konstruktoru kacimo referencu klase this
    }
    clickHandler() {
        this.setState({
            message: 'Goodbay'
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler}>Click</button> ova verizija ne radi zato sto referecna this izbacuje
                undifined, ovo je klasicno ponasanje za js, potrtebno je "nakaciti klasu"*/ }
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                <button onClick={() => this.clickHandler()}>Click</button> {/*ovako radi zato sto je u pitanju 
                arrow fnj i ima povratnu vrednost. */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
