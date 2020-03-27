import React, { Component } from 'react';

class ToDoApp extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div>
                <h2>ToDoApp:</h2>

                <input type="checkbox" />
                <p>Placeholder text here</p>

                <input type="checkbox" />
                <p>Placeholder text here</p>

                <input type="checkbox" />
                <p>Placeholder text here</p>

                <input type="checkbox" />
                <p>Placeholder text here</p>
            </div>
        )
    }
}

export default ToDoApp