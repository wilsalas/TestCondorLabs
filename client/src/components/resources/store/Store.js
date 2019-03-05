import { createStore } from 'redux';

//create storage of global states in the application
const reducer = (state, action) => {
    switch (action.type) {
        case 'USERS':
            return {
                ...state,
                users: action.users
            };
        case 'GROUPS':
            return {
                ...state,
                groups: action.groups
            };

        case 'GROUP_NAME':
            return {
                ...state,
                groupname: action.groupname
            };

        case 'LOAD_MESSAGE':
            return {
                ...state,
                messages: action.messages
            };
        default:
            return state;
    }
}

export default createStore(reducer, {
    users: [],
    groups: [],
    groupname: "",
    messages: []
});