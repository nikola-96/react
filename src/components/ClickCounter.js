import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class ClickCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.incrementCount}>Clicked {this.props.count}</button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter) /*prilikom eksportovanja same klase, nad klasom se poziva fnj
koja ce izvrsiti isti kod */
