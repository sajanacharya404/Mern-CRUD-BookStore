import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userinfo: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      const token = action.payload;
      state.userinfo = token;
    },
  },
});

export const { setToken } = authSlice.actions;
export default authSlice.reducer;
