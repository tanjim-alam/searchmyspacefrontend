import {configureStore} from "@reduxjs/toolkit";
import projectReducer from "./slices/projectSlice";
import cityReducer from "./slices/citySlice";
import developerReducer from "./slices/developerSlice";

const store = configureStore({
    reducer:{
        project: projectReducer,
        city: cityReducer,
        developer: developerReducer
    }
});

export default store;