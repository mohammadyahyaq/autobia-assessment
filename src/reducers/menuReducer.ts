import { TOGGLE_MENU } from "../actions/actionTypes";

export const menuReducer = (state = false, action: { type: string }): boolean => {
    switch(action.type) {
        case TOGGLE_MENU:
            return !state;
        default:
            return state;
    }
}