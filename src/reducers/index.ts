import { combineReducers } from "redux";
import { menuReducer } from "./menuReducer";

export interface reducersType {
    menu: any;
};

export const reducers = combineReducers({ menu: menuReducer });