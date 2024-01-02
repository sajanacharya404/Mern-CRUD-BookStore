import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (sate, action) => {},
  },
});

export const { setToken } = authSlice.actions;
export default userSlice.reducer;
