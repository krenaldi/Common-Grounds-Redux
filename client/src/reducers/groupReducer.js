import {
  GET_GROUPS,
  ADD_GROUP,
  DELETE_GROUP,
  GROUPS_LOADING
} from '../actions/types'; 

const initialState = {
  items: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_GROUPS:
      return {
        ...state,
        items: action.payload,
        loading: false
      };
    case DELETE_GROUP:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload)
      };
    case ADD_GROUP:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    case GROUPS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
