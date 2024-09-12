import axios from "axios";
import React from "react";

export class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
        this.handleClick = this.handleClick.bind(this);
    }

    async handleClick() {
        try {
            const { data } = await axios('https://jsonplaceholder.typicode.com/p')
            console.log(data, 'data');

        } catch (error) {
            console.log('error', error);

            this.setState({ error });
        }
    }

    render() {
        console.log(this.state.error);
        
        if (this.state.error) {
            return <h1>{this.state.error?.message}</h1>
        }
        return <button onClick={this.handleClick}>Click Me</button>
    }
}