import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class HoverCounter extends Component {

    render() {
        return (
            <div>
                <h1 onMouseOver={this.props.incrementCount}> {this.props.name} Hovered {this.props.count}</h1>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter) 
