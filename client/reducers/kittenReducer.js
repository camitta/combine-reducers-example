import axios from 'axios';

const GOT_KITTENS = 'GOT_KITTENS';

const initialState = {
  kittens: []
}

export const gotKittens = (kittens) => {
  return {
    type: GOT_KITTENS,
    kittens
  }
}

export const getKittens = () => {
  // change into a thunk!!!
  return async (dispatch) => {
    const {data} = await axios.get('/kittens');
    dispatch(gotKittens(data));
  }
}

export const kittenReducer = (state = initialState, action) => {
  switch(action.type) {
    case GOT_KITTENS:
      const allKittens = [...state.kittens, ...action.kittens];
      return {
        ...state,
        kittens: allKittens
      }
    default:
      return state;
  }
}
