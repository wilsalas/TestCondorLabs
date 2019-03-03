import { createStore } from 'redux';

const reducer = (state, action) => {
    switch (action.type) {
        case 'COUNT_LIST_TO_USER':
            return {
                ...state,
                countUsers: action.countUsers,
                listUsers: action.listUsers
            };
        default:
            return state;
    }
}

export default createStore(reducer, { countUsers: 0, listUsers: [] });