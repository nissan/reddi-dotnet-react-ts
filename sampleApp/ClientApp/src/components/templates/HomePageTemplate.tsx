
import * as React from 'react';
import logo from '../../assets/images/Brady.svg';

class HomePageTemplate extends React.Component {
    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to Reddi React on .NET, powered by TypeScript</h1>
                </header>
                <p className="App-intro">
                    To get started, review the tests in
                    <ul>
                        <li><code>src/tests/App.test.tsx</code></li>
                        <li><code>src/routes/Routes.test.tsx</code></li>
                    </ul>
                    then explore their targets at
                    <ul>
                        <li><code>src/components/App.tsx</code></li>
                        <li><code>src/routes/Routes.tsx</code></li>
                    </ul>
                    and save to reload.
</p>
            </div>
        );
    }
}

export default HomePageTemplate;
