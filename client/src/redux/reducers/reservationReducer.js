import {
  RESERVATION_SELECT_DATETIME,
  RESERVATION_SELECT_HALL,
  RESERVATION_SELECT_TABLE,
  RESERVATION_RESET_CURRENT_SELECTION,
  RESERVATION_SET_RESERVATION,
  GET_RESERVATIONS,
  UPDATE_RESERVATION,
  COMPLETE_RESERVATION,
  DELETE_RESERVATION
} from '../actionTypes/actionType';

const initialState = { selectedTable: null, selectedHall: null, selectedDateTime: null, reservation: null, reservations: [] };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case RESERVATION_SELECT_DATETIME:
      return { ...state, selectedDateTime: action.payload.datetime };
    case RESERVATION_SELECT_HALL:
      return { ...state, selectedHall: action.payload.hall };
    case RESERVATION_SELECT_TABLE:
      return { ...state, selectedTable: action.payload.table };
    case RESERVATION_SET_RESERVATION:
      return { ...state, reservation: action.payload.reservation };
    case RESERVATION_RESET_CURRENT_SELECTION:
      return { ...state, selectedTable: null, selectedHall: null, selectedDateTime: null };
    case GET_RESERVATIONS:
      if (state.reservations.length) {
        return state;
      } else {
        return { ...state, reservations: action.payload };
      }
    case UPDATE_RESERVATION:
      return {
        ...state, reservations: state.reservations.map((reservation) => {
          if (reservation.id === action.payload.id) {
            return { ...reservation }
          } else {
            return reservation
          }
        })
      }
    case COMPLETE_RESERVATION:
      return {
        ...state, reservations: state.reservations.map((reservation) => {
          if (reservation.id === action.payload.id) {
            return { ...reservation, 'State.id': 2, 'State.state': 'ПОДТВЕРЖДЁН' }
          } else {
            return reservation
          }
        })
      }
    case DELETE_RESERVATION:
      return { ...state, reservations: state.reservations.filter((reservation) => reservation.id !== action.payload) }
      
    default:
      return state;
  }
}
