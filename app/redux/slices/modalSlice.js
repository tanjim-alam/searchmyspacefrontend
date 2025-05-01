const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    projectName: "",
    heading: "",
  };

  const modalSlice = createSlice({
    name:"modal",
    initialState,
    reducers:{
        setModelData: (state, action)=>{
            state.projectName = action.payload.projectName;
            state.heading = action.payload.heading;
        },
        clearModelData: (state)=>{
            state.projectName = "";
            state.heading = ""
        }
    }
  });

  export const {setModelData, clearModelData} = modalSlice.actions;
  export default modalSlice.reducer;