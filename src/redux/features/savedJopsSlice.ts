// const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
// const { request } = require("../../../axios/axios");
// // get Jop Saved
// export const getJopSaved = createAsyncThunk(
//   "jops/getJopSaved",
//   async (id, thunkAPI) => {
//     try {
//       const res = await request.get(`/api/job/savedJop/${id}`);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error?.response?.data?.message);
//     }
//   }
// );
// // add New Jop
// export const addNewJop = createAsyncThunk(
//   "jops/addNewJops",
//   async (jobId, thunkAPI) => {
//     try {
//       const res = await request.post("/api/job/save-job", {
//         jobId: jobId,
//       });
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error?.response?.data?.message);
//     }
//   }
// );
// // remove Saved Jop
// export const removeSavedJop = createAsyncThunk(
//   "jops/removeSavesJops",
//   async (jopId, thunkAPI) => {
//     try {
//       const res = await request.post("/api/job/unsave-job", { jobId: jopId });
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error?.response?.data?.message);
//     }
//   }
// );

// // create slice
// const jopSavedSlice = createSlice({
//   name: "jops",
//   initialState: {
//     jops: [],
//     state: "idle",
//     error: null,
//     idAllJops: [],
//   },
//   reducers: {
//     resetJopSaved: (state) => {
//       (state.jops = []),
//         (state.state = "idle"),
//         (state.error = null),
//         (state.idAllJops = []);
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(getJopSaved.pending, (state) => {
//         state.state = "loading";
//       })
//       .addCase(getJopSaved.fulfilled, (state, action) => {
//         state.state = "success";
//         state.jops = action.payload.data;
//         state.idAllJops = action.payload.idOnly;
//       })
//       .addCase(getJopSaved.rejected, (state, action) => {
//         state.state = "faild";
//         state.error = action?.payload;
//       })
//       .addCase(addNewJop.fulfilled, (state, action) => {
//         state.state = "success";
//         state.jops.unshift(action?.payload?.savedJobs);
//         state.idAllJops.unshift(action?.payload?.savedJobs?._id);
//       })
//       .addCase(addNewJop.rejected, (state, action) => {
//         console.log("filledJop", action);
//         state.state = "faild";
//         state.error = action?.payload;
//       })
//       .addCase(removeSavedJop.fulfilled, (state, action) => {
//         state.state = "success";
//         console.log(action);
//         state.jops = state.jops.filter(
//           (e) => e?._id !== action.payload.savedJobs._id
//         );
//         state.idAllJops = state.idAllJops.filter(
//           (e) => e !== action.payload.savedJobs._id
//         );
//       })
//       .addCase(removeSavedJop.rejected, (state, action) => {
//         state.state = "faild";
//         state.error = action?.payload;
//       });
//   },
// });
// export const { resetJopSaved } = jopSavedSlice.actions;
// export default jopSavedSlice.reducer;
