import * as React from 'react';
import './CV.css';
import CVSummary from './sections/CVSummary';
import CVPrivateLife from './sections/CVPrivateLife';
import CVProjects from './sections/CVProjects';
import CVEducation from './sections/CVEducation';
import CVExperience from './sections/CVExperience';
import CVSkills from './sections/CVSkills';
import CVBaseData from './sections/CVBaseData';

export const CV: React.SFC = () => (
    <div className="cv">
        <CVBaseData />
        <CVSummary />
        <CVSkills />
        <CVExperience />
        <CVProjects />
        <CVEducation />
        <CVPrivateLife />

        <div className="color-squares" />
    </div>
);
