import {SET_CARD_PARAMS} from './constants';

const initialState = {
  data: {},
  loading: false,
  error: false
}

const cardParamReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_CARD_PARAMS:
      return { ...state, data: action.params, loading: false };
    default:
      return state;
  }
}

export default cardParamReducer;