import { REQUEST_GIT_INFO, SUCCESS_GIT_INFO, ERROR_GIT_INFO } from './constants';

const initState = {
  data: null,
  loading: false,
  error: null
}

export default function gitUserReducer(state = initState, action) {
  
  switch(action.type) {
    case REQUEST_GIT_INFO: 
      return { ...state, loading: true };

    case SUCCESS_GIT_INFO:
      return { ...state, loading: false, data: action.payload.data }

    case ERROR_GIT_INFO:
      return { ...state, loading: false, data: null, error: action.payload.error}
      
    default:
      return state;
  }
}