import { CV_PRIVATE_LIFE_UPDATE, CVPrivateLifeObj, CVPrivateLifeUpdateAction } from '../actions/private_life';

export type CVPrivateLifeState = CVPrivateLifeObj;

const initialState: CVPrivateLifeState = (
    'Short loin kobe Burger ground round brisket shoulder meatball Cheeseburger ribeye tenderloin bresaola. Short' +
    'rib brisket ground round wagyu, beef cow Hamburger bresaola shoulder porterhouse shank filet mignon chuck.' +
    'Tri-tip porterhouse spare ribs bresaola Angus ground round ribeye flank wagyu short loin meatloaf beef brisket' +
    'corned beef Burger. Angus chuck ribeye bacon Burger.'
);

export const cvPrivateLife = (state = initialState, action: CVPrivateLifeUpdateAction): CVPrivateLifeState => {
    switch (action.type) {
        case CV_PRIVATE_LIFE_UPDATE:
            return action.privateLife;
        default:
            return state;
    }
};
