import { CV_PROJECTS_UPDATE, CVProjectsList, CVProjectsUpdateAction } from '../actions/projects';

export type CVProjectsState = CVProjectsList;

const initialState: CVProjectsState = ([
    {
        name: 'Example project',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, dolore.'
    },
    {
        name: 'Example project2',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, dolore.'
    }
]);

export const cvProjects = (state = initialState, action: CVProjectsUpdateAction): CVProjectsState => {
    switch (action.type) {
        case CV_PROJECTS_UPDATE:
            return {...action.projects};
        default:
            return state;
    }
};
