
import { createSlice } from '@reduxjs/toolkit'


  // invalid output must be undefined
  function loadFromLocalStorage() {
    try {
      const serialisedState = localStorage.getItem("persistantState");
      if (serialisedState === null) return undefined;

      return JSON.parse(serialisedState);
    } catch (e) {
      console.warn(e);
      return undefined;
    }
  }
  

export const LoginProcess = createSlice({
  name: 'login',
  initialState: {
    value:  loadFromLocalStorage() == null ? {} :loadFromLocalStorage().login.value,
  },
  reducers: {
    saveAccountData: (state,action) => {
      state.value = action.payload
    },
  
  },
})

// Action creators are generated for each case reducer function
export const { saveAccountData} = LoginProcess.actions
export const selectCount = state => state.login.value;

export default LoginProcess.reducer