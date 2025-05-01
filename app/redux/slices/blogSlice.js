import axiosInstance from "@/app/utils/axiosInstance";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    blog: null,
    blogList: []
};

export const getBlog = createAsyncThunk("/getblog", async (slug) => {
    try {
        const res = axiosInstance.get(`/blog/byslug/${slug}`);
        return (await res).data;
    } catch (error) {
        throw new Error(error.message)
    }
});

export const getAllBlogs = createAsyncThunk("/getallblogs", async () => {
    try {
        const res = axiosInstance.get("/blog/all");
        return (await res).data;
    } catch (error) {
        throw new Error(error.message)
    }
});

const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getBlog.fulfilled, (state, action) => {
                state.blog = action?.payload?.blog;
            })
            .addCase(getAllBlogs.fulfilled, (state, action) => {
                state.blogList = action?.payload?.blogs;
            })
    }
});

export default blogSlice.reducer;