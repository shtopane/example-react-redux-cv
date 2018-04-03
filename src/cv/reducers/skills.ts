import { CV_SKILLS_UPDATE, CVSkillList, CVSkillsUpdateAction } from '../actions/skills';

export type CVSkillsState = CVSkillList;

const initialState: CVSkillsState = ([
    {
        group: 'Cooking',
        items: 'Burgers, pizza, sushi'
    },
    {
        group: 'Drinks',
        items: 'Coffee, tea, coffee-tea, beer, whiskey, vodka'
    },
    {
        group: 'Bresaola',
        items: 'Porterhouse, ribs, ground, brisket, filet'
    },
    {
        group: 'Meatball',
        items: 'Tri-tip, mignon, chuck, tenderloin'
    }
]);

export const cvSkills = (state = initialState, action: CVSkillsUpdateAction): CVSkillsState => {
    switch (action.type) {
        case CV_SKILLS_UPDATE:
            return [...action.skills];
        default:
            return state;
    }
};
