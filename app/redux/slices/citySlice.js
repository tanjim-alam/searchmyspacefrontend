import axiosInstance from "@/app/utils/axiosInstance";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    cityList: []
};

export const getAllCity = createAsyncThunk("getallcity", async()=>{
    try {
        const res = await axiosInstance.get("/city/all");
        return await res.data;
    } catch (error) {
        throw new Error(error.message);
    }
})

const citySlice = createSlice({
    name:"city",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getAllCity.fulfilled, (state, action)=>{
            state.cityList = action?.payload?.data;
        })
    }
});

export default citySlice.reducer;