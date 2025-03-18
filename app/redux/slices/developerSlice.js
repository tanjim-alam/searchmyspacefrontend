import axiosInstance from "@/app/utils/axiosInstance";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    developerList: []
};

export const getAllDeveloper = createAsyncThunk("getalldeveloper", async()=>{
    try {
        const res = await axiosInstance.get("/developer/all");
        return await res.data;
    } catch (error) {
        throw new Error(error.message);
    }
})

const citySlice = createSlice({
    name:"developer",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getAllDeveloper.fulfilled, (state, action)=>{
            state.developerList = action?.payload?.data;
        })
    }
});

export default citySlice.reducer;