import { Action } from 'redux';

export const CV_EDUCATION_UPDATE = 'CV_EDUCATION_UPDATE';

export interface CVEducationObj {
    specialization: string;
    school: string;
    start: string;
    end: string;
}

export type CVEducationList = CVEducationObj[];

// Damn, I have no idea for this interface name
export interface CVEducations {
    education: CVEducationList;
}

export interface CVEducationUpdateAction extends CVEducations, Action {}

export const cvEducationUpdate = (education: CVEducationList): CVEducationUpdateAction => {
    return {
        type: CV_EDUCATION_UPDATE,
        education
    };
};
