import { Action } from 'redux';

export const CV_PRIVATE_LIFE_UPDATE = 'CV_PRIVATE_LIFE_UPDATE';

export type CVPrivateLifeObj = string;

export interface CVPrivateLifeUpdateAction extends Action {
    privateLife: CVPrivateLifeObj;
}

export const cvPrivateLifeUpdate = (privateLife: CVPrivateLifeObj): CVPrivateLifeUpdateAction => {
    return {
        type: CV_PRIVATE_LIFE_UPDATE,
        privateLife
    };
};
