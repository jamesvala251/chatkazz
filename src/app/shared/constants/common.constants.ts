export const MenuItems = [
    {
        state: '/admin/dashboard',
        name: 'Dashboard',
        type: 'link',
        icon: 'dashboard'
    },
    {
        state: '/admin/agency',
        name: 'Agency Management',
        type: 'link',
        icon: 'assignment'
    },
    {
        state: '/admin/meeting',
        name: 'AA/NA Meetings',
        type: 'link',
        icon: 'person'
    }
];

export const TableConfig = {
    'pageSizeOptions': [10, 15, 20, 25, 30],
    'pageIndex': 0,
    'pageSize': 10
};

export const MeetingType = [
    'AA',
    'NA'
];

export const MeetingDay = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

export const DateTimeFormat = 'MM-dd-yyyy & h:mm a';
export const DateTimeFormat2 = 'MM/dd/yyyy';
export const MinDate = new Date();

