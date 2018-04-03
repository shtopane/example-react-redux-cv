import { CV_SKILLS_UPDATE, CVSkillList, CVSkillsUpdateAction } from '../actions/skills';

export type CVSkillsState = CVSkillList;

const initialState: CVSkillsState = ([
    {
        group: 'Technologies',
        items: 'HTML, CSS, jQuery'
    },
    {
        group: 'Others',
        items: 'Lolz, haha'
    }
]);

export const cvSkills = (state = initialState, action: CVSkillsUpdateAction): CVSkillsState => {
    switch (action.type) {
        case CV_SKILLS_UPDATE:
            return {...action.skills};
        default:
            return state;
    }
};
