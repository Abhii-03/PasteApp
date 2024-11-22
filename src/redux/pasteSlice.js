import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

export const pasteSlice = createSlice({
  name: 'paste',
  initialState: {
    pastes:localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
  },
  reducers: {
    addToPastes: (state,action)=> {
        const paste = action.payload;
        // add a check -> if paste already exist
        state.pastes.push(paste);
                               //key     //value
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success('Paste created successfully');
        
    },
    updateToPastes: (state,action) => {
        const paste = action.payload;
        const index = state.pastes.findIndex((item) => item._id === paste._id);
        if (index !== -1) {
            state.pastes[index] = paste;
            localStorage.setItem("pastes", JSON.stringify(state.pastes));
            toast.success("Paste Updated")
        }
    },
    resetAllPastes: (state, action) => {
       state.pastes = [];
       localStorage.removeItem("pastes");
    },
    removeFromPastes:(state,action) => {
       const pasteId = action.payload;
       const index = state.pastes.findIndex((item) => item._id === pasteId);
       if (index !== -1) {
        state.pastes.splice(index, 1);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste deleted");
       }
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, resetAllPastes, removeFromPastes } = pasteSlice.actions

export default pasteSlice.reducer