import * as React from 'react';


class ErrorPageTemplate extends React.Component {
    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Oops...</h1>
                </header>
                <p className="App-intro">
                    Sorry I could not find what you were looking for.
                </p>
            </div>
        );
    }
}

export default ErrorPageTemplate;
