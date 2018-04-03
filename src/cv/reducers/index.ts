import { combineReducers } from 'redux';
import { cvSummary } from './summary';
import { cvPrivateLife } from './private_life';
import { cvProjects } from './projects';
import { cvEducation } from './education';
import { cvExperience } from './experience';
import { cvSkills } from './skills';
import { cvBaseData } from './base_data';

export const cvReducers = combineReducers({
    baseData: cvBaseData,
    summary: cvSummary,
    skills: cvSkills,
    experience: cvExperience,
    projects: cvProjects,
    education: cvEducation,
    privateLife: cvPrivateLife
});
