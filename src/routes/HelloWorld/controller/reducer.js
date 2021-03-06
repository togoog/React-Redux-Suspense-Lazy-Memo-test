import { COUNT_ADD } from '../constants';

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNT_ADD]: (state, action) => ({
    ...state,
    count: action.count,
    countDoubl: action.count % 2 === 0 ? action.count : state.countDoubl
  })
};

const initialState = {
  count: 5,
  countDoubl: 2
};

// ------------------------------------
// Reducer
// ------------------------------------
const reducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  // console.log(state, action)
  return handler ? handler(state, action) : state;
};

export default reducer;
