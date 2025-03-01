import { IAppointment } from "@/constants/Types";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "@/axios/axios";
import Cookies from "js-cookie";

const initialState: {
  data: IAppointment[];
  status: "idle" | "loading" | "succeeded" | "failed";
} = {
  data: [],
  status: "idle",
};

export const fetchAppointmentPending = createAsyncThunk(
  "user/fetchAppointmentPending",
  async (_, thunkAPI) => {
    try {
      const userId = Cookies.get("userId_Doctor");
      const response = await request.get(
        `/user/appointment/getUserAppointment?userId=${userId}&status=1`
      );
      return response.data?.data;
    } catch {
      return thunkAPI.rejectWithValue("Failed to fetch appointment pending");
    }
  }
);

export const walletHistorySlice = createSlice({
  name: "appointmentPending",
  initialState,
  reducers: {
    setAddAppointment: (state, action: PayloadAction<IAppointment>) => {
      state.data.unshift(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAppointmentPending.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAppointmentPending.fulfilled, (state, action) => {
        if (action.payload) {
          state.status = "succeeded";
          state.data = action.payload;
        }
      })
      .addCase(fetchAppointmentPending.rejected, (state) => {
        state.status = "failed";
        return initialState;
      });
  },
});

export const { setAddAppointment } = walletHistorySlice.actions;
export default walletHistorySlice.reducer;
