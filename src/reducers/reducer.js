import { ACTION_ONE } from "../actions/actions";

const initialState = {
    value: null
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ACTION_ONE:
            return { ...state, ...payload };

        default:
            return state;
    }
};
