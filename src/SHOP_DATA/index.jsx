import { createSlice, configureStore } from '@reduxjs/toolkit';

const initial_ATC_State = {
  itemsToAddToCart: 0,
};
// Slice 1
const ADD_TO_CART_SLICE = createSlice({
  // Reducers contains all the method/functions to update the ATC
  // These reducers method will be called by React with the latest state
  // We can directly mutate the state inside the reducers though we should not do but if we did then "Emer" library will handle the mutability and it will not break our code.
  // Along with the state we also get the action that we can use to get the payload

  name: 'ADD_TO_CART_SLICE',
  initialState: initial_ATC_State,
  reducers: {
    add_items_to_cart(state, action) {
      state.itemsToAddToCart = action.payload;
    },
  },
});

const inital_empty_cart_state = {
  showATC: false,
};
// Slice 2
const EMPTY_CART_SLICE = createSlice({
  name: 'Empty Cart',
  initialState: inital_empty_cart_state,
  reducers: {
    togglShowATCBtn(state) {
      state.showATC = !state.showATC;
    },
  },
});

// Export actions

export const atcActions = ADD_TO_CART_SLICE.actions;
export const emptyCartActions = EMPTY_CART_SLICE.actions;

const store = configureStore({
  // reducer:ADD_TO_CART_SLICE.reducer
  reducer: {
    atc_reducer: ADD_TO_CART_SLICE.reducer,
    empty_cart_reducer: EMPTY_CART_SLICE.reducer,
  },
});
export default store;
