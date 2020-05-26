import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggin: true
        }

    }
    render() {
        return (
            this.state.isLoggin ?
                <div>Hello Nikola, welcome!</div> :
                <div>Hello User, pleasse login!</div>
        )
    }

    // render() {
    //     if (this.state.isLoggin) {
    //         return (
    //             <div>Hello Nikola, welcome!</div>
    //         )
    //     } else {
    //         return (
    //             <div>Hello user, pleasse login!</div>
    //         )
    //     }
    // }
}

export default UserGreeting
