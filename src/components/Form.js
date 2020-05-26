import React, { Component } from 'react'

class Forms extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comment: '',
            topic: ''
        }
    }
    handleUsernameChange = (event) => { //ovde se svakim unosom slova menja stanje steta, a vrednost se stavlja u value
        this.setState({
            username: event.target.value
        })
        console.log(this.state.username)
    }
    handleCommentChange = (event) => {
        this.setState({
            comment: event.target.value
        })
    }
    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }
    handelSubmit = event => {
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
        event.preventDefault()
    }


    render() {
        return (
            <form onSubmit={this.handelSubmit}>
                <div>
                    <div>
                        <label>Username</label>
                        <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
                    </div>
                    <div>
                        <label>Comment:</label>
                        <input type="text" value={this.state.comment} onChange={this.handleCommentChange}></input>
                    </div>
                    <div>
                        <label>Topic</label>
                        <select value={this.state.topic} onChange={this.handleTopicChange}>
                            <option value="React">React</option>
                            <option value="Angular">Angular</option>
                            <option value="Vue">Vue</option>
                        </select>
                    </div>
                </div>
                <button type="submit">Subimt</button>
            </form>
        )
    }
}

export default Forms
