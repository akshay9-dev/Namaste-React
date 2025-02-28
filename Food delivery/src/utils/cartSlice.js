import { createSlice } from "@reduxjs/toolkit";

// Below we have created the cart slice, and added reducders inside that.
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload); // This will add item to cart
    },
    removeItem: (state) => {
      state.items.pop(); // This will crear item from cart fron end.
    },
    clearCart: (state) => {
      state.items.length = 0; //This will make cart empty [].
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
