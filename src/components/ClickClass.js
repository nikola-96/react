import React, { Component } from 'react'

export class ClickClass extends Component {
    handleClick() {
        console.log('From class')
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click  me.</button>
            </div>
        )
    }
}

export default ClickClass
