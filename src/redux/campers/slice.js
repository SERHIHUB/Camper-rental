import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./operations";

const camperSlice = createSlice({
  name: "camper",
  initialState: {
    items: [],
    loading: false,
    error: false,
    persis: false,
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const camperReducer = camperSlice.reducer;
