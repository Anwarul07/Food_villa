import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";

export const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});

/**
 * Create Store
 *  - configureStore() - RTK
 *
 * Provide my store to app
 *  - <Provider store = {store}> - import from react-redux
 *
 * Slice
 *  - RTK - createSlice({
 *          name: "",
 *          initialState:
 *          reducers: {
 *             addItem: (state, action)=> { state= action.payload}
 *          }
 *      })
 *    export const {addItem, removeItem} = cartSlice.actions;
 *    export default cartSlice.reducer;
 *
 * Put that Slice into Store
 *      - {
 *        reducer: {
 *             cart: cartSlice,
 *             user: userSlice
 *         }
 * }
 *
 * */
