import React, { Component } from 'react';

{/*kada klasu saljemo props, referenciramo sa this. Nijepotrebno naglasiti da ona prima neki props */ }

class Welcome extends Component {
    render() {
        return <h1>Welcome {this.props.name} a.k.a. {this.props.heroName}!</h1>
    }
}
export default Welcome