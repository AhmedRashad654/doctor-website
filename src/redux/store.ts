import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
// import jopSavesSlice from "./features/savedJopsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userSlice,
      // jopSaves: jopSavesSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
