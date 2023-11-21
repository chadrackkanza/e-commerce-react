import { createSlice } from '@reduxjs/toolkit'
import { products } from '../../app/products'
import { fetchProducts } from './productActions'
const initialState = {
    products : [],
    loading : 'idle'
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      // Add user to the state array
      state.products = action.payload
      state.loading = 'success'
    })
  },
})



export default productSlice.reducer