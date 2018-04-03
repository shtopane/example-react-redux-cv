import { CV_EDUCATION_UPDATE, CVEducationList, CVEducationUpdateAction } from '../actions/education';

export type CVEducationState = CVEducationList;

const initialState: CVEducationState = ([
    {
        specialization: 'Another specialization',
        school: 'Example school',
        start: 'January 2018',
        end: 'Till now'
    },
    {
        specialization: 'Example specialization',
        school: 'Example school',
        start: 'January 2010',
        end: 'December 2017'
    }
]);

export const cvEducation = (state = initialState, action: CVEducationUpdateAction): CVEducationState => {
    switch (action.type) {
        case CV_EDUCATION_UPDATE:
            return [...action.education];
        default:
            return state;
    }
};
