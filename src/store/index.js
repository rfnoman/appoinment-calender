import { createStore } from 'redux';

const INITIAL_STATE = {
    data: {}
};

function tasks(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_TASK':
            if (state[action.title.dateIndex]) {
                let data={
                    ...state,
                    [action.title.dateIndex]: [...state[action.title.dateIndex], action.title]
                }
                localStorage.setItem("data", JSON.stringify(data))
                return data
            }
            else {
                let data={
                    ...state,
                    [action.title.dateIndex]: [action.title]
                }
                localStorage.setItem("data", JSON.stringify(data))
                return data;
            }
        case 'GET_DATA_FROM_STORE':
            let data = JSON.parse(localStorage.getItem("data"));
            return {
                 ...data
            }
        default:
            return state
    }
}

const store = createStore(tasks, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;