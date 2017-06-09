import { MenuItem } from '../fw/services/menu.service';

export let initialMenuItems: Array<MenuItem> = [
    {
        text: 'Dashboard',
        icon: 'glyphicon-dashboard',
        route: 'authenticated/dashboard',
        submenu: null
    },
    {
        text: 'Countries',
        icon: 'glyphicon-flag',
        route: null,
        submenu: [
            {
                text: 'Top 3',
                icon: 'glyphicon-flag',
                route: 'authenticated/country-list/3',
                submenu: null
            },
            {
                text: 'Top 10',
                icon: 'glyphicon-flag',
                route: 'authenticated/country-list/10',
                submenu: null
            },
            {
                text: 'All',
                icon: 'glyphicon-flag',
                route: 'authenticated/country-grid',
                submenu: null
            }
        ],
    },
    {
        text: 'Reports',
        icon: 'glyphicon-book',
        route: 'authenticated/reports',
        submenu: null
    }
];