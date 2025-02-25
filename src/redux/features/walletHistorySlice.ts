import { IWalletHistory } from "@/constants/Types";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "@/axios/axios";
import Cookies from "js-cookie";

const initialState: {
  data: IWalletHistory[];
  status: "idle" | "loading"|"succeeded" | "failed";
} = {
  data: [],
  status: "idle",
};

export const fetchWalletHistory = createAsyncThunk(
  "user/fetchWalletHistory",
  async (month: string, thunkAPI) => {
    try {
      const userId = Cookies.get("userId_Doctor");
      const response = await request.get(
        `/user/wallet/getWalletHistory?userId=${userId}&month=${month}`
      );
      return response.data?.data;
    } catch {
      return thunkAPI.rejectWithValue("Failed to fetch wallet history");
    }
  }
);

export const walletHistorySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addWalletHistory: (state, action: PayloadAction<IWalletHistory>) => {
      state.data.unshift(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWalletHistory.pending, (state) => {
         state.status = "loading";
      })
      .addCase(fetchWalletHistory.fulfilled, (state, action) => {
        if (action.payload) {
          state.status = "succeeded";
          state.data = action.payload;
        }
      })
      .addCase(fetchWalletHistory.rejected, (state) => {
        state.status = "failed";
        return initialState;
      });
  },
});

export const { addWalletHistory } = walletHistorySlice.actions;
export default walletHistorySlice.reducer;
