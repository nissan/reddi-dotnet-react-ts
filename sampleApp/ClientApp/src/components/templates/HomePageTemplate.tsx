
import * as React from 'react';
import logo from '../../assets/images/Brady.svg';

class HomePageTemplate extends React.Component {
    public render() {
        return (
            <div className="App container">
                <div className="row">
                    <div className="col">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <h1 className="App-title">Welcome to Reddi React </h1>
                        </header>

                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h2 className="display-5">Leveraging .NET Core 2.1, TypeScript and Bootstrap</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col">

                        <div className="App-intro jumbotron">
                            To get started, review the tests in
                            <ul className="list-group">
                                <li className="list-group-item"><code>src/tests/App.test.tsx</code></li>
                                <li className="list-group-item"><code>src/routes/Routes.test.tsx</code></li>
                            </ul>
                            then explore their targets at
                            <ul className="list-group">
                                <li className="list-group-item"><code>src/components/App.tsx</code></li>
                                <li className="list-group-item"><code>src/routes/Routes.tsx</code></li>
                            </ul>
                            and save to reload.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePageTemplate;
