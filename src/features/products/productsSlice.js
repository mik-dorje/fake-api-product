import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const PRODUCTS_URL = "https://fakestoreapi.com/products/14";

const initialState = {
  products: [],
  status: "idle",
  totalQuantity: 0,
  totalPrice: 0,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(PRODUCTS_URL);
    // console.log(response.data)
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.totalQuantity += 1;
      state.totalPrice += action.payload;
    },
    removeFromCart: (state, action) => {
      if (state.totalQuantity > 1) {
        state.totalQuantity -= 1;
        state.totalPrice -= action.payload;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const selectAllProducts = (state) => state.products.products;
export const selectStatus = (state) => state.products.status;
export const selectQuantity = (state) => state.products.totalQuantity;
export const selectPrice = (state) => state.products.totalPrice;

export const { addToCart, removeFromCart } = productsSlice.actions;

export default productsSlice.reducer;
