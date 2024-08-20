import * as React from "react";
import { Navigate } from "react-router-dom";

export class Login extends React.Component {
    state = { user: null, error: null };

    async handleSubmit(event) {
        event.preventDefault();
        try {
            console.log({ target: event.target });
            const [usernameInput, passwordInput] = event.target
            // let user = await login(event.target);
            this.setState({ user: { username: usernameInput.value, password: passwordInput.value } });
        } catch (error) {
            this.setState({ error });
        }
    }

    render() {
        let { user, error } = this.state;
        console.log({ state: this.state });

        return (
            <div>
                {error && <p>{error.message}</p>}
                {user && (
                    <Navigate to="/posts" replace={false} />
                )}
                <form
                    onSubmit={(event) => this.handleSubmit(event)}
                >
                    <input type="text" name="username" placeholder="Enter your username!" />
                    <input type="password" name="password" placeholder="Enter your password!" />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}