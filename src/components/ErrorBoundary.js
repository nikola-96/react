import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) { // ukoliko greska postoji okinuce se ova fnj koja ce direkto promeniti state
        //u true i render fnj ce dobiti vrednost true i izrenderovace se polje koje je predvidjeno za gresku
        return {
            hasError: true
        }
    }
    render() {
        if (this.state.hasError) {
            return (<h1>Something went wrong!</h1>)
        }
        return this.props.children
    }
}

export default ErrorBoundary
