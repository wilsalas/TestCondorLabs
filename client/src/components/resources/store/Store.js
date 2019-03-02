import { createStore } from 'redux';

const reducer = (state, action) => {
    switch (action.type) {
        case 'COUNT_LIST_TO_USER':
            return {
                ...state,
                count: action.count
            };
        default:
            return state;
    }
}

export default createStore(reducer, { count: 0 });