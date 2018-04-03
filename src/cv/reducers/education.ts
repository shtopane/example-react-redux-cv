import { CV_EDUCATION_UPDATE, CVEducationList, CVEducationUpdateAction } from '../actions/education';

export type CVEducationState = CVEducationList;

const initialState: CVEducationState = ([
    {
        specialization: 'Example spec',
        school: 'Example school',
        start: 'January 2018',
        end: 'September 2019'
    },
    {
        specialization: 'Example spec 2',
        school: 'Example school',
        start: 'January 2018',
        end: 'September 2019'
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
