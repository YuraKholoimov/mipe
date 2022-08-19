import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {api} from "../dal/api";
import {RootTypeChild} from "../dal/types";


export const setProductThunk = createAsyncThunk(
    "product/setProduct",
    async (params, thunkAPI) => {
        try {
            const res = await api.products();
            if (res.statusText === "OK") {
                return res.data
            }
        } catch (e) {
            const error = e as AxiosError
            console.log(error.message)

            return thunkAPI.rejectWithValue(error.message)

        }
    }
)


const slice = createSlice({
    name: "products",
    initialState: {
        products: []
    } as ProductsType,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(setProductThunk.fulfilled, (state, action: PayloadAction<any>) => {
            state.products = action.payload.slice(38, 43).map((el: RootTypeChild) => {
                let arraysSpecialize: Array<specializedSubject[]> = []; // Массив модулей 1 или 2
                const size = 5;
                for (let i = 0; i < el.specializedSubjects.length / size; i++) {
                    arraysSpecialize[i] = el.specializedSubjects.slice((i * size), (i * size) + size)
                }
                return {
                    title: el.title,
                    specializedSubjects: arraysSpecialize
                }
            })
        })
    }
});

// Reducer
export const productsReducer = slice.reducer


export type ProductsType = {
    products: ProductType[]
}

export type ProductType = {
    title: string
    specializedSubjects: Array<specializedSubject[]>
}

export type specializedSubject = {
    string: string
}