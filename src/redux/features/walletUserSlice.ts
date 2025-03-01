import { walletUser } from "@/constants/Types";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "@/axios/axios";
import Cookies from "js-cookie";

const initialState: walletUser = {
  amount: 0,
};
export const fetchWalletUser = createAsyncThunk(
  "user/fetchWalletUser",
  async (_, thunkAPI) => {
    try {
      const userId = Cookies.get("userId_Doctor");
      const response = await request.get(`/user/wallet?userId=${userId}`);
      return response.data?.data;
    } catch {
      return thunkAPI.rejectWithValue("Failed to fetch user wallet");
    }
  }
);

export const walletUserSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setWallet: (state, action: PayloadAction<walletUser>) => {
      state.amount = action.payload.amount;
    },
    decreaseWallet: (state, action: PayloadAction<number>) => {
      state.amount -= action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWalletUser.fulfilled, (state, action) => {
        if (action.payload) {
          return { ...state, ...action.payload };
        }
      })
      .addCase(fetchWalletUser.rejected, () => {
        return { ...initialState };
      });
  },
});

export const { setWallet, decreaseWallet } = walletUserSlice.actions;
export default walletUserSlice.reducer;
