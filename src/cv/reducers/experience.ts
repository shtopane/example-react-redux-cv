import { CV_EXPERIENCE_UPDATE, CVExperienceList, CVExperienceUpdateAction } from '../actions/experience';

export type CVExperienceState = CVExperienceList;

const initialState: CVExperienceState = ([
    {
        position: 'Example position',
        company: 'Example company',
        start: 'January 2018',
        end: 'September 2019',
        summary: 'Lorem ipsum'
    },
    {
        position: 'Example position',
        company: 'Example company 2',
        start: 'January 2018',
        end: 'September 2019',
        summary: 'Lorem ipsum sjhdgfjshgfjhsdg'
    }

]);

export const cvExperience = (state = initialState, action: CVExperienceUpdateAction): CVExperienceState => {
    switch (action.type) {
        case CV_EXPERIENCE_UPDATE:
            return {...action.experience};
        default:
            return state;
    }
};
