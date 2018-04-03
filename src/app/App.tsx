import * as React from 'react';
import { CV } from '../cv/components/CV';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <CV />

                <footer className="footer">
                    <p>
                        Created by <a href="https://github.com/sigo/">Mateusz Jagiełło</a>,
                        view <a href="https://github.com/sigo/example-react-redux-cv">source code</a></p>
                </footer>
            </div>
        );
    }
}

export default App;
