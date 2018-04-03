import * as React from 'react';
import { CV } from '../cv/components/CV';
import './App.css';

const App: React.SFC = () => (
    <div className="App">
        <div className="description">
            <h1>Create your resume in few minutes</h1>
            <p>
                Hover over sections, click and edit details.
                {' '}
                <a href="#" onClick={window.print}>Print it</a> when its ready.
            </p>
        </div>

        <CV />

        <footer className="footer">
            <p>
                Created by <a href="https://github.com/sigo/">Mateusz Jagiełło</a>,
                view <a href="https://github.com/sigo/example-react-redux-cv">source code</a></p>
        </footer>
    </div>
);

export default App;
