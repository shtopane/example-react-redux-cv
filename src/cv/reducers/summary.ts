import { CV_SUMMARY_UPDATE, CVSummaryObj, CVSummaryUpdateAction } from '../actions/summary';

export type CVSummaryState = CVSummaryObj;

const initialState: CVSummaryState = (
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, quidem.'
);

export const cvSummary = (state = initialState, action: CVSummaryUpdateAction): CVSummaryState => {
    switch (action.type) {
        case CV_SUMMARY_UPDATE:
            return action.summary;
        default:
            return state;
    }
};
