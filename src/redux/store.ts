import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import savedDoctorSlice from "./features/savedDoctorsSlice";
import stepsBookingSlice from "./features/stepsBookingSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userSlice,
      savedDoctor: savedDoctorSlice,
      stepsBooking: stepsBookingSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
