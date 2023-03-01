import { ALLTRENDING } from "../Type/actionsTypes";

// 2-create movies Reducer
const initialValue = {
    trendingMovies:[],
    pageCount: 0,
};

export const trendReducer = (state =initialValue,action) => {
  switch (action.type) {
    case ALLTRENDING:
      return { trendingMovies:action.data,pageCount:action.pages}
      default:
        return state;
  }
};