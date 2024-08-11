import { createSlice, createAction } from "@reduxjs/toolkit";
import { fetchCampers, getFavoritesCampers } from "./operations";

const camperSlice = createSlice({
  name: "camper",
  initialState: {
    items: [],
    favoritesItems: [],
    currentCamp: [],
    loading: false,
    error: false,
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
      })
      .addCase(getFavoritesCampers.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getFavoritesCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.favoritesItems.push(action.payload);
      })
      .addCase(getFavoritesCampers.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase("campers/delete", (state, action) => {
        state.favoritesItems = state.favoritesItems.filter(
          (item) => item._id !== action.payload
        );
      })
      .addCase("camper/details", (state, action) => {
        state.currentCamp = state.items.filter(
          (item) => item._id === action.payload
        );
      }),
});

export const newMyCampers = createAction("campers/delete");

export const currentCamp = createAction("camper/details");

export const camperReducer = camperSlice.reducer;
