import {configureStore} from "@reduxjs/toolkit";
import projectReducer from "./slices/projectSlice";
import cityReducer from "./slices/citySlice";
import developerReducer from "./slices/developerSlice";
import blogReducer from "./slices/blogSlice";

const store = configureStore({
    reducer:{
        project: projectReducer,
        city: cityReducer,
        developer: developerReducer,
        blog: blogReducer
    }
});

export default store;