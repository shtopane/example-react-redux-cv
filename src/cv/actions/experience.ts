import { Action } from 'redux';

export const CV_EXPERIENCE_UPDATE = 'CV_EXPERIENCE_UPDATE';

export interface CVExperienceObj {
    position: string;
    company: string;
    start: string;
    end: string;
    summary: string;
}

export type CVExperienceList = CVExperienceObj[];

// Damn, I have no idea for this interface name
export interface CVExperiences {
    experience: CVExperienceList;
}

export interface CVExperienceUpdateAction extends CVExperiences, Action {}

export const cvExperienceUpdate = (experience: CVExperienceList): CVExperienceUpdateAction => {
    return {
        type: CV_EXPERIENCE_UPDATE,
        experience
    };
};
