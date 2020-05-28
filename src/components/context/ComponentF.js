import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class ComponentF extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    username => {
                        return <h1>Pozdrav {username}</h1> //kozumer primi prop kroz fnj, ali isto tako mora da vrati JXS i t
                        //i to sto se vrati se izrenderuje
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentF
