import React, { Component } from 'react'

export default class App extends Component {

    constructor() {
        super()
        this.state ={
            message: 'FAIL'
        }
    }
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => this.updateMessage(data.message))
    }

    updateMessage = msg => {
        this.setState({
            message: msg
        })
    }

    render() {
        return (
            <div>
                {this.state.message}
            </div>
        )
    }
}