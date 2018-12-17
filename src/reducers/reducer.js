import { INCREMENT_VALUE, DECREMENT_VALUE, SET_LAST_ACTION } from "../actions/actions";

const initialState = {
    lastAction: "",
    value: 1212,
    lastAction: "",
}

export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_VALUE:
            return { ...state, value: action.value, lastAction: action.lastAction }

        case DECREMENT_VALUE:
            return { ...state, value: action.value, lastAction: action.lastAction }

        case SET_LAST_ACTION:
            return { ...state, lastAction: action.value }

        default:
            return state
    }
}
