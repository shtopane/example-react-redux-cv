import { Action } from 'redux';

export const CV_SKILLS_UPDATE = 'CV_SKILLS_UPDATE';

export interface CVSkillObj {
    group: string;
    items: string;
}

export type CVSkillList = CVSkillObj[];

export interface CVSkills {
    skills: CVSkillList;
}

export interface CVSkillsUpdateAction extends CVSkills, Action {}

export const cvSkillsUpdate = (skills: CVSkillList): CVSkillsUpdateAction => {
    return {
        type: CV_SKILLS_UPDATE,
        skills
    };
};
