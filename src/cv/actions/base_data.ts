import { Action } from 'redux';

export const CV_BASE_DATA_UPDATE = 'CV_BASE_DATA_UPDATE';

export interface CVBaseDataObj {
    fullName: string;
    position: string;
    phone: string;
    email: string;
    address: string;
}

export interface CVBaseData {
    baseData: CVBaseDataObj;
}

export interface CVBaseDataUpdateAction extends CVBaseData, Action {}

export const cvBaseDataUpdate = (baseData: CVBaseDataObj): CVBaseDataUpdateAction => {
    return {
        type: CV_BASE_DATA_UPDATE,
        baseData
    };
};
