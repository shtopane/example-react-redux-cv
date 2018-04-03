import { CV_SUMMARY_UPDATE, CVSummaryObj, CVSummaryUpdateAction } from '../actions/summary';

export type CVSummaryState = CVSummaryObj;

const initialState: CVSummaryState = (
    'Burger ipsum dolor amet bacon strip steak chuck, t-bone beef Cheeseburger spare ribs. Bresaola corned beef' +
    'tenderloin spare ribs t-bone. Beef tenderloin chuck filet mignon t-bone, rump tri-tip brisket. Cheeseburger' +
    'shank meatloaf ribeye, ground round patties bacon porterhouse chuck rump Burger t-bone. Burger cow corned beef,' +
    'filet mignon kobe tenderloin bresaola short loin short rib meatloaf beef ribs shoulder patties.'
);

export const cvSummary = (state = initialState, action: CVSummaryUpdateAction): CVSummaryState => {
    switch (action.type) {
        case CV_SUMMARY_UPDATE:
            return action.summary;
        default:
            return state;
    }
};
