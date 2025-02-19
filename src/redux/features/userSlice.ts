import { UserState } from "@/constants/Types";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "@/axios/axios";
import Cookies from "js-cookie";


const OLD_DOMAIN = "https://doctornode.codderlab.com"; 
const NEW_DOMAIN = "http://localhost:5047"; 

const replaceImageDomain = (imageUrl: string) => {
  if (imageUrl) {
    return imageUrl.replace(OLD_DOMAIN, NEW_DOMAIN);
  }
  return imageUrl;
};



const initialState: UserState = {
  _id: "",
  uniqueId: "",
  name: "",
  age:"",
  image: "",
  email: "",
  mobile: "",
  gender: "",
  bio: "",
  dob: "",
  analyticDate: "",
  isBlock: false,
  fcmToken: "",
  isDelete: false,
  isUpdate: false,
  latitude: "",
  longitude: "",
  country: "",
  isBusy: false,
  isOnline: false,
  callId: "",
  loginType: "",
  createdAt: "",
  updatedAt: "",
};





export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (_, thunkAPI) => {
    try {
      const userId = Cookies.get("userId_Doctor");
      const response = await request.get(`/user/profile?userId=${userId}`);
       if (response.data.user?.image) {
         response.data.user.image = replaceImageDomain(
           response.data.user.image
         );
       }
      return response.data.user;
    } catch {
      return thunkAPI.rejectWithValue("Failed to fetch user data");
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      return {
        ...state,
        ...action.payload,
        image: replaceImageDomain(action.payload.image),
      };
    },
    setLogout: () => {
      Cookies.remove("userId_Doctor");
      return { ...initialState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        if (action.payload) {
          return { ...state, ...action.payload };
        }
      })
      .addCase(fetchUser.rejected, () => {
        Cookies.remove("userId_Doctor");
        return { ...initialState };
      });
  },
});

export const { setUser, setLogout } = userSlice.actions;
export default userSlice.reducer;
