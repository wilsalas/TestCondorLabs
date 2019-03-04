import { createStore } from 'redux';

//create storage of global states in the application
const reducer = (state, action) => {
    switch (action.type) {
        case 'COUNT_LIST_TO_USER':
            return {
                ...state,
                listUsers: action.listUsers
            };
        case 'LIST_GROUPS':
            return {
                ...state,
                listGroups: action.listGroups
            };
        default:
            return state;
    }
}

export default createStore(reducer, {
    listUsers: [],
    listGroups: []
});