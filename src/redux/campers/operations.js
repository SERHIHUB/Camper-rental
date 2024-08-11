import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://65fd768d9fc4425c653201da.mockapi.io",
});

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (params, thunkAPI) => {
    try {
      const response = await instance.get("/advert", { params });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getFavoritesCampers = createAsyncThunk(
  "campers/getFavorites",
  async (_id, thunkAPI) => {
    try {
      const { data } = await instance.get("/advert", _id);
      return data.find((item) => item._id === _id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
