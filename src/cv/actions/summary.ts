import { Action } from 'redux';

export const CV_SUMMARY_UPDATE = 'CV_SUMMARY_UPDATE';

export type CVSummaryObj = string;

export interface CVSummaryUpdateAction extends Action {
    summary: CVSummaryObj;
}

export const cvSummaryUpdate = (summary: CVSummaryObj): CVSummaryUpdateAction => {
    return {
        type: CV_SUMMARY_UPDATE,
        summary
    };
};
