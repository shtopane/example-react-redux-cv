import { CV_PRIVATE_LIFE_UPDATE, CVPrivateLifeObj, CVPrivateLifeUpdateAction } from '../actions/private_life';

export type CVPrivateLifeState = CVPrivateLifeObj;

const initialState: CVPrivateLifeState = (
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, lolz.'
);

export const cvPrivateLife = (state = initialState, action: CVPrivateLifeUpdateAction): CVPrivateLifeState => {
    switch (action.type) {
        case CV_PRIVATE_LIFE_UPDATE:
            return action.privateLife;
        default:
            return state;
    }
};
