import { Doctor } from "@/constants/Types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "@/axios/axios";
import Cookies from "js-cookie";

const initialState: {
  data: Doctor[];
  status: "idle" | "loading" | "succeeded" | "failed";
} = {
  data: [],
  status: "idle",
};
// fetchSavedDoctor
export const fetchSavedDoctor = createAsyncThunk(
  "user/fetchSavedDoctor",
  async (_, thunkAPI) => {
    try {
      const userId = Cookies.get("userId_Doctor");
      const response = await request.get(
        `/user/doctor/allSavedDoctors?userId=${userId}`
      );
      return response.data?.data;
    } catch {
      return thunkAPI.rejectWithValue("Failed to fetch saved doctor");
    }
  }
);
// savedDoctor
export const savedDoctor = createAsyncThunk(
  "user/savedDoctor",
  async (doctor: Doctor, thunkAPI) => {
    try {
      const userId = Cookies.get("userId_Doctor");
      const response = await request.get(
        `/user/doctor/saveDoctor?userId=${userId}&doctorId=${doctor._id}`
      );
      return {
        doctor,
        message: response.data?.message,
      };
    } catch {
      return thunkAPI.rejectWithValue("Failed save and un save doctor");
    }
  }
);

// savedDoctorSlice
export const savedDoctorSlice = createSlice({
  name: "savedDoctor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSavedDoctor.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSavedDoctor.fulfilled, (state, action) => {
        if (action.payload) {
          state.status = "succeeded";
          state.data = action.payload;
        }
      })
      .addCase(fetchSavedDoctor.rejected, (state) => {
        state.status = "failed";
        return initialState;
      })
      .addCase(savedDoctor.pending, (state) => {
        state.status = "loading";
      })
      .addCase(savedDoctor.fulfilled, (state, action) => {
        if (action.payload) {
          state.status = "succeeded";
          const { doctor, message } = action.payload;
          if (message === "Doctor saved successfully") {
            state.data.unshift(doctor);
          } else if (message === "Doctor removed successfully") {
            state.data = state.data.filter((item) => item?._id !== doctor._id);
          }
        }
      })
      .addCase(savedDoctor.rejected, (state) => {
        state.status = "failed";
        return initialState;
      });
  },
});

export default savedDoctorSlice.reducer;
