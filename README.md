[LIVE](https://vitejsvite5mwjmi-qedr--5173--9c984a48.local-credentialless.webcontainer.io)

1. npm install @reduxjs/toolkit
2. npm install react-redux
3. Create the Folder in the folder SHOP_DATA create the file index.jsx

- SHOP_DATA->index.jsx

4. Import ` import { createSlice, configureStore } from '@reduxjs/toolkit'`
5. Create the initial State  
    `const initial_ATC_State = { itemsToAddToCart: 0, showEmptyCart: false, };`

   `const inital_empty_cart_state = { showATC: true, };`

6. Create the slice

   ```
    const ADD_TO_CART_SLICE = createSlice({
     name: 'ADD_TO_CART_SLICE',
     initialState: initial_ATC_State,
     reducers: {
     add_items_to_cart(state, action) {
     state.itemsToAddToCart = action.amount;
     },
     toggleShowEmptyCartBtn(state) {
     state.showEmptyCart = !state.showEmptyCart;
     },
     },
     });

     const EMPTY_CART_SLICE = createSlice({
      name: 'Empty Cart',
      initialState: inital_empty_cart_state,
      reducers: {
        togglShowATCBtn(state) {
          state.showATC = !state.showATC;
        },
      },
      });
   ```

7. Export actions

   ```
   export const atcActions = ADD_TO_CART_SLICE.actions;
   export const emptyCartActions = EMPTY_CART_SLICE.actions;
   ```

8. Configure and Export store

   ```
     const store = configureStore({
     // reducer:ADD_TO_CART_SLICE.reducer
     reducer: {
     atc_reducer: ADD_TO_CART_SLICE.reducer,
     empty_cart_reducer: EMPTY_CART_SLICE.reducer,
     },
     });

     export default store;
   ```

- Main.jsx

9. Provide to whole app

   ```
    import Store from './SHOP_DATA/index';
    import { Provider } from 'react-redux';
    <Provider store={Store}>
     <App />
    </Provider>
   ```

- Particular Component

10. Import actions and other method to use states and update states

    ```
    import { atcActions } from '../../SHOP_DATA/index';
    import { useSelector, useDispatch } from 'react-redux';
    ```

11. Now use `useDispatch` and `useSelector` to update the state and get the value of the state resp.

    ```
     const dispatch = useDispatch();
     // It will help us to get the states
     const atc_reducer_states = useSelector((state) => state.atc_reducer);

      const atcHandler = () => {
      // 🧠Always call the function
      dispatch(atcActions.toggleShowEmptyCartBtn());
      };
    ```
