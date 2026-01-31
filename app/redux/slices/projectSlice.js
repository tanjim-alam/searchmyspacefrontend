import axiosInstance from "@/app/utils/axiosInstance";
import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    projectList: null,
    project: {},
    searchProjectList: null,
    projectListByCity: [],
    projectListByDeveloper: []
};

export const getAllProjects = createAsyncThunk("/getallproject", async () => {
    try {
        const res = await axiosInstance.get("/project/all");
        return await res.data
    } catch (error) {
        throw new Error(error.message)
    }
});

export const getProject = createAsyncThunk("/getproject", async (slug) => {
    try {
        const res = await axiosInstance.get(`/project/by/${slug}`);
        return await res.data
    } catch (error) {
        throw new Error(error.message)
    }
});


export const getSearchProject = createAsyncThunk("/searchproject", async(query)=>{
    try {
        const res = await axiosInstance.get(`/project/searchs?query=${query}`);
        return await res.data
    } catch (error) {
        throw new Error(error.message)
    }
});

export const getProjectByCityName = createAsyncThunk("/getprojectbycity", async(slug)=>{
    try {
        const res = await axiosInstance.get(`/project/city/${slug}`);
        return await res.data
    } catch (error) {
        throw new Error(error.message)
    }
});

export const getProjectByDeveloper = createAsyncThunk("/getprojectbydeveloper", async(slug)=>{
    try {
        const res = await axiosInstance.get(`/project/developer/${slug}`);
        return await res.data
    } catch (error) {
        throw new Error(error.message)
    }
});

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProjects.fulfilled, (state, action) => {
                state.projectList = action?.payload?.projects;
            })
            .addCase(getProject.fulfilled, (state, action) => {
                state.project = action?.payload?.project;
            })
            .addCase(getSearchProject.fulfilled, (state,action)=>{
                if(action?.payload?.projects){
                    state.searchProjectList = action?.payload?.projects;
                }
            })
            .addCase(getProjectByCityName.fulfilled, (state, action) => {
                state.projectListByCity = action?.payload?.projects;
            })
            .addCase(getProjectByDeveloper.fulfilled, (state, action) => {
                state.projectListByDeveloper = action?.payload?.projects;
            })
    }
});

export default postSlice.reducer;