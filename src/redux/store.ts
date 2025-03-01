import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import walletUserSlice from "./features/walletUserSlice";
import walletHistorySlice from "./features/walletHistorySlice";
import savedDoctorSlice from "./features/savedDoctorsSlice";
import stepsBookingSlice from "./features/stepsBookingSlice";
import appointmentPendinSlice from './features/appointment/appointmentPendingSlice'
export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userSlice,
      wallet: walletUserSlice,
      history: walletHistorySlice,
      savedDoctor: savedDoctorSlice,
      stepsBooking: stepsBookingSlice,
      appointmentPending:appointmentPendinSlice
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
