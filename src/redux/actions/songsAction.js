import { SELECTED_SONGS } from "./actionTypes";

export const selectedsongs = (songs) => {
    return {
        type : SELECTED_SONGS,
        payLoad : songs
    }
}