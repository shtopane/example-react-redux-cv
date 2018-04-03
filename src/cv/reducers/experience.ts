import { CV_EXPERIENCE_UPDATE, CVExperienceList, CVExperienceUpdateAction } from '../actions/experience';

export type CVExperienceState = CVExperienceList;

const initialState: CVExperienceState = ([
    {
        position: 'Example position',
        company: 'Example company 2',
        start: 'September 2018',
        end: 'Till now',
        summary: (
            'Shank steak tail cow kobe ribeye tenderloin meatball wagyu. Short loin ground round Burger Cheeseburger,' +
            'spare ribs corned beef tri-tip ribeye Hamburger Angus sirloin steak tail shank.'
        )
    },
    {
        position: 'Example position',
        company: 'Example company',
        start: 'January 1970',
        end: 'December 2017',
        summary: (
            'Shank kobe tenderloin beef ribs. Ribeye Cheeseburger chuck, meatloaf tenderloin beef beef ribs tri-tip' +
            'brisket. Brisket t-bone flank Hamburger, short rib bacon Cheeseburger meatball tenderloin.'
        )
    }
]);

export const cvExperience = (state = initialState, action: CVExperienceUpdateAction): CVExperienceState => {
    switch (action.type) {
        case CV_EXPERIENCE_UPDATE:
            return [...action.experience];
        default:
            return state;
    }
};
