import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import walletUserSlice from "./features/walletUserSlice";
import walletHistorySlice from "./features/walletHistorySlice";
import savedDoctorSlice from "./features/savedDoctorsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userSlice,
      wallet: walletUserSlice,
      history: walletHistorySlice,
      savedDoctor: savedDoctorSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
