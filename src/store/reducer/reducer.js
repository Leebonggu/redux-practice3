import * as actionTypes from '../action/action';

const initialState = {
  persons: [],
};

export default (state = initialState, action) => {
  switch( action.type ) {
    case actionTypes.ADD_PERSON:
      const newArray = state.persons.concat({
        id: Math.random(),
        name: 'Max',
        age: Math.floor( Math.random() * 40 ),
      });
      return {
        ...state,
        persons: newArray,
      }
    case actionTypes.DELETE_PERSON:
      const deletedArray = state.persons.filter(person => {
        return person.id !== action.payload;
      })
      return {
        ...state,
        persons: deletedArray,
      }
    default:
      return state
  }
}
