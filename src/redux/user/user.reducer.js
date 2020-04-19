import {UserActionTypes} from './user.type';

const INIT_STATE = {
    currentUser: null
}
export const UserReducer = (state = INIT_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            return state
    }
}