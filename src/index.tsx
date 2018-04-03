import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import { cvReducers } from './cv/reducers';
import { CVSummaryState } from './cv/reducers/summary';
import { CVPrivateLifeState } from './cv/reducers/private_life';
import { CVProjectsState } from './cv/reducers/projects';
import { CVEducationState } from './cv/reducers/education';
import { CVExperienceState } from './cv/reducers/experience';
import { CVSkillsState } from './cv/reducers/skills';
import { CVBaseDataState } from './cv/reducers/base_data';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__: any;
    }
}

export interface AppState {
    cv: {
        baseData: CVBaseDataState,
        summary: CVSummaryState;
        skills: CVSkillsState,
        experience: CVExperienceState,
        projects: CVProjectsState;
        education: CVEducationState;
        privateLife: CVPrivateLifeState;
    };
}

const reducers = combineReducers({
    cv: cvReducers,
    form: formReducer
});

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
