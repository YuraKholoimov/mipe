import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const setProductThunk = createAsyncThunk(
    "product/setProduct",
    async (thunkAPI) => {

    }
)

const slice = createSlice({
    name: "products",
    initialState: {} as ProductsType,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(setProductThunk.fulfilled, (state, action) => {
            state.products = action.payload
        })
    }
})

export type ProductsType = {
    products: any
}

// Reducer
export const productsReducer = slice.reducer

// type ProductType = {
//     name: string
// }