import { PLAYINGNOW } from "../Type/actionsTypes";

// 2-create movies Reducer
const initialValue = {
    moviesPlayingNow:[],
    pageCount: 0,
};

export const nowPlayingReducer = (state =initialValue,action) => {
  switch (action.type) {
    case PLAYINGNOW:
      return { moviesPlayingNow:action.data,pageCount:action.pages}
      default:
        return state;
  }
};