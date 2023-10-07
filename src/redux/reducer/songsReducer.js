import { SELECTED_SONGS } from "../actions/actionTypes";

const initialState = {}

const songsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SELECTED_SONGS : return action.payLoad
        default : return state
    }
}

export default songsReducer;