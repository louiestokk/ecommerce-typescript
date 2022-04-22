import { createSlice } from "@reduxjs/toolkit";

interface AsyncState {
  isLoading?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
}

interface ProductsState extends AsyncState {
  products: string[];
}

const initialState: ProductsState = {
  products: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
};
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, { payload }) => {
      state.products = payload;
    },
  },
});

export const { addProducts } = productsSlice.actions;
export const getProducts = (state: any) => state.products.products;
export default productsSlice.reducer;
