import { request } from "@/axios/axios";
import { Doctor, IDateDoctor, IStepsBooking } from "@/constants/Types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import dayjs, { Dayjs } from "dayjs";

const today = dayjs();
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
const initialState: IStepsBooking = {
  doctor: emptyDoctor,
  selectedDate: today,
  selectedTime: null,
  currentDate: new Date(today.year(), today.month(), 1),
  availableTime: emptyAvailableTime,
  status: "idle",
};

export const fetchTimeAvailbleDoctor = createAsyncThunk(
  "user/fetchTimeAvailbleDoctor",
  async (doctorId: string | string[] | undefined, thunkAPI) => {
    try {
      const response = await request.get(
        `/user/appointment/checkDate?doctorId=${doctorId}&date=${initialState.selectedDate}`
      );
      return response.data?.data;
    } catch {
      return thunkAPI.rejectWithValue("Failed to fetch available time");
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
    setCurrentDate: (state, action: PayloadAction<Date>) => {
      const newDate = dayjs(action.payload);
      state.currentDate = new Date(newDate.year(), newDate.month(), 1);
    },
    setSelectedDate: (state, action: PayloadAction<Dayjs | null>) => {
      state.selectedDate = action.payload;
    },
    setSelectedTime: (state, action: PayloadAction<string | null>) => {
      state.selectedTime = action.payload;
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
      });
  },
});

export const { setDoctor, setCurrentDate, setSelectedDate, setSelectedTime } =
  stepsBookingSlice.actions;
export default stepsBookingSlice.reducer;
