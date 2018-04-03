import { Action } from 'redux';

export const CV_PROJECTS_UPDATE = 'CV_PROJECTS_UPDATE';

export interface CVProjectObj {
    name: string;
    summary: string;
}

export type CVProjectsList = CVProjectObj[];

export interface CVProjects {
    projects: CVProjectsList;
}

export interface CVProjectsUpdateAction extends CVProjects, Action {}

export const cvProjectsUpdate = (projects: CVProjectsList): CVProjectsUpdateAction => {
    return {
        type: CV_PROJECTS_UPDATE,
        projects
    };
};
