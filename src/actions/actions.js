export const INCREMENT_VALUE = 'INCREMENT_VALUE';
export const incrementValue = (value) => ({
  type: INCREMENT_VALUE,
  lastAction: INCREMENT_VALUE,
  value: value+1
})

export const DECREMENT_VALUE = 'DECREMENT_VALUE';
export const decrementValue = (value) => ({
  type: DECREMENT_VALUE,
  lastAction: DECREMENT_VALUE,
  value: value-1
})

export const SET_LAST_ACTION = 'SET_LAST_ACTION';
export const setLastAction = (value) => ({
  type: SET_LAST_ACTION,
  value: value
})

