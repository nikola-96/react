import React, { Component } from 'react';


class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Welcome visitor!'
        }
    }/* da bi promenili tekst iz state moramo da iskoristimo ugradjenu fnj setState */
    changeMessage() {
        this.setState({
            message: 'Thanks for subscribing!'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()} >subscribe</button>{/*na klik se kaci objekat koji ima fnj, na klik se ta
                fnj poziva */}
            </div>
        )
    }
}
export default Message