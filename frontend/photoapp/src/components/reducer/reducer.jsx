import { GETPHOTOS, SINGLEPHOTO } from "../actions/action";

export function REDUCER(state, action) {
  switch (action.type) {    
      case GETPHOTOS:
        return { currentFilter: action.payload.filter, currentPage: action.payload.page, photos: action.payload.data}  
      case SINGLEPHOTO:
        return { ...state, singlePhoto: action.payload}  
      default:
          return state;
  }
}