import { CV_BASE_DATA_UPDATE, CVBaseDataObj, CVBaseDataUpdateAction } from '../actions/base_data';

export type CVBaseDataState = CVBaseDataObj;

const initialState: CVBaseDataState = ({
    fullName: 'Mateusz Jagiełło',
    position: 'Frontend developer',
    phone: '+48500500501',
    email: 'spam@spam.pl',
    address: 'ul. Example 1, 00-000 Warszawa'
});

export const cvBaseData = (state = initialState, action: CVBaseDataUpdateAction): CVBaseDataState => {
    switch (action.type) {
        case CV_BASE_DATA_UPDATE:
            return {...action.baseData};
        default:
            return state;
    }
};
