import { GET_STAFF, UPD_STAFF, DEL_STAFF } from '../actionTypes/actionType';

const initialState = { staff: [] };

const staffReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STAFF:
      if (state.staff.length) {
        return state;
      } else {
        return { ...state, staff: action.payload };
      }

    case UPD_STAFF:
      return {
        ...state, staff: state.staff.map((worker) => {
          if (worker.id === action.payload.id) {
            return { ...worker, name: action.payload.inputName, username: action.payload.inputUsername }
          } else {
            return worker
          }
        })
      }

    case DEL_STAFF:
      return { ...state, staff: state.staff.filter((worker) => worker.id !== action.payload) }

    default:
      return state;
  }
};

export default staffReducer;

