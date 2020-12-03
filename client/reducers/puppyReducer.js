import axios from 'axios';

const GOT_PUPPIES = 'GOT_PUPPIES';

const initialState = {
  puppies: []
}

export const gotPuppies = (puppies) => {
  return {
    type: GOT_PUPPIES,
    puppies
  }
}

export const getPuppies = () => {
  // change into a thunk!!!
  return async (dispatch) => {
    const {data} = await axios.get('/puppies');
    dispatch(gotPuppies(data));
  }
}

export const puppyReducer = (state = initialState, action) => {
  switch(action.type) {
    case GOT_PUPPIES:
      const allPuppies = [...state.puppies, ...action.puppies];
      return {
        ...state,
        puppies: allPuppies
      }
    default:
      return state;
  }
}
