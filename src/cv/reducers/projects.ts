import { CV_PROJECTS_UPDATE, CVProjectsList, CVProjectsUpdateAction } from '../actions/projects';

export type CVProjectsState = CVProjectsList;

const initialState: CVProjectsState = ([
    {
        name: 'Example project',
        summary: (
            'Spare ribs shank meatball beef ribs, ground round kobe bacon cow filet mignon t-bone Angus meatloaf' +
            'porterhouse ribeye. Cheeseburger shoulder short rib bresaola ribeye chuck patties wagyu corned beef' +
            'shank Angus short loin bacon. Ribeye tri-tip strip steak, beef ribs Angus ground round Burger patties' +
            'chuck tenderloin meatloaf.'
        )
    },
    {
        name: 'Another project',
        summary: (
            'Flank strip steak patties filet mignon meatloaf brisket Cheeseburger tri-tip steak tail bresaola' +
            'sirloin tenderloin. Angus tenderloin tri-tip steak tail spare ribs meatloaf sirloin cow corned beef' +
            'bresaola patties brisket flank shank.'
        )
    }
]);

export const cvProjects = (state = initialState, action: CVProjectsUpdateAction): CVProjectsState => {
    switch (action.type) {
        case CV_PROJECTS_UPDATE:
            return [...action.projects];
        default:
            return state;
    }
};
