import { request } from "@/axios/axios";
import {
  Doctor,
  IDateDoctor,
  IResponseGetTax,
  IStepsBooking,
} from "@/constants/Types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import dayjs, { Dayjs } from "dayjs";

const emptyDoctor: Doctor = {
  _id: "",
  uniqueId: 0,
  name: "",
  image: "",
  email: "",
  password: "",
  age: 0,
  mobile: "",
  gender: "",
  dob: "",
  countryCode: "",
  isBlock: false,
  fcmToken: "",
  isDelete: false,
  bookingCount: 0,
  currentBookingCount: 0,
  wallet: 0,
  totalWallet: 0,
  patients: 0,
  service: [],
  charge: 0,
  commission: 0,
  designation: "",
  degree: [],
  language: [],
  experience: 0,
  type: 0,
  latitude: "",
  longitude: "",
  country: "",
  clinicName: "",
  address: "",
  awards: [],
  expertise: [],
  yourSelf: "",
  education: "",
  experienceDetails: [],
  reviewCount: 0,
  rating: 0,
  timeSlot: 0,
  isAttend: false,
  showDialog: false,
  isBusy: false,
  isOnline: false,
  callId: "",
  oneSignalId: "",
  schedule: [],
  createdAt: "",
  updatedAt: "",
  isSaved: false,
};

const emptyAvailableTime: IDateDoctor = {
  status: false,
  allSlot: {
    morning: [],
    evening: [],
  },
  busySlots: [],
  isOpen: false,
  isBreak: false,
  message: "",
};
const emptyTax: IResponseGetTax = {
  data: { tax: 0, taxPercent: 0, finalAmount: 0 },
  message: "",
  status: false,
};
const initialState: IStepsBooking = {
  doctor: emptyDoctor,
  selectedTime: null,
  selectAppointmentType: null,
  explainYourProblem: null,
  availableTime: emptyAvailableTime,
  statusCheckSlotAndWallet: false,
  tax: emptyTax,
  status: "idle",
};

export const fetchTimeAvailbleDoctor = createAsyncThunk(
  "user/fetchTimeAvailbleDoctor",
  async (
    {
      doctorId,
      selectedDateBooking,
    }: {
      doctorId: string | string[] | undefined;
      selectedDateBooking: Dayjs | null;
    },
    thunkAPI
  ) => {
    const date = dayjs(selectedDateBooking);
    const formattedDate = date.format("YYYY-MM-DD");
    try {
      const response = await request.get(
        `/user/appointment/checkDate?doctorId=${doctorId}&date=${formattedDate}`
      );
      return response.data;
    } catch {
      return thunkAPI.rejectWithValue("Failed to fetch available time");
    }
  }
);
export const fetchTax = createAsyncThunk(
  "user/fetchTax",
  async (amount: number, thunkAPI) => {
    try {
      const response = await request.get(
        `/user/appointment/getTax?amount=${amount}`
      );
      return response.data;
    } catch {
      return thunkAPI.rejectWithValue("Failed to fetch tax");
    }
  }
);
export const stepsBookingSlice = createSlice({
  name: "stepsBooking",
  initialState,
  reducers: {
    setDoctor: (state, action: PayloadAction<Doctor>) => {
      state.doctor = action.payload;
    },
    setSelectedTime: (state, action: PayloadAction<string | null>) => {
      state.selectedTime = action.payload;
    },
    setExplainYourProblem: (state, action: PayloadAction<string | null>) => {
      state.explainYourProblem = action.payload;
    },
    setSelectAppointmentType: (state, action: PayloadAction<number | null>) => {
      state.selectAppointmentType = action.payload;
    },
    setStatusCheckSlotAndAmount: (state, action: PayloadAction<boolean>) => {
      state.statusCheckSlotAndWallet = action.payload;
    },
    setInitialState: () => {
      return { ...initialState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTimeAvailbleDoctor.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTimeAvailbleDoctor.fulfilled, (state, action) => {
        if (action.payload) {
          state.status = "succeeded";
          state.availableTime = action.payload;
        }
      })
      .addCase(fetchTimeAvailbleDoctor.rejected, (state) => {
        state.status = "failed";
        return initialState;
      })
      .addCase(fetchTax.fulfilled, (state, action) => {
        if (action.payload) {
          state.tax = action.payload;
        }
      });
  },
});

export const {
  setDoctor,
  setSelectedTime,
  setSelectAppointmentType,
  setExplainYourProblem,
  setStatusCheckSlotAndAmount,
  setInitialState,
} = stepsBookingSlice.actions;
export default stepsBookingSlice.reducer;
