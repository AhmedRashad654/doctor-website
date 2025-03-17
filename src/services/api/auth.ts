import { request } from "@/axios/axios";
import { CredentialResponse } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { setUser } from "@/redux/features/userSlice";
import { Dispatch } from "@reduxjs/toolkit";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Cookies from "js-cookie";
import { FormDataEditProfile } from "@/constants/Types";

/*
 * loginWithGoogle
 */
export const loginWithGoogle = async (
  creaditialResponse: CredentialResponse,
  dispatch: Dispatch,
  router: AppRouterInstance
) => {
  if (creaditialResponse.credential) {
    const decode: { email: string } = jwtDecode(creaditialResponse.credential);
    const result = await request.post("/user/loginSignup", {
      loginType: 2,
      fcmToken: "fcmToken",
      email: decode.email,
    });
    if (result?.data?.user) {
      Cookies.set("userId_Doctor", result.data.user._id, { expires: 7 });
      dispatch(setUser(result?.data?.user));
      router.push("/");
    }

    alert(result?.data?.message);
  }
};
/*
 * update profile user
 */
export const defaultValues = {
  name: "",
  age: "",
  mobile: "",
  bio: "",
  gender: "",
  country: "",
};
export const onSubmit = async (
  data: FormDataEditProfile,
  image: File | null,
  userId: string,
  dispatch: Dispatch
) => {
  const formDate = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    formDate.append(key, value);
  });

  if (image) {
    formDate.append("image", image);
  }
  const response = await request.patch(
    `/user/update?userId=${userId}`,
    formDate
  );
  if (response.data.user) {
    dispatch(setUser(response.data.user));
  }
  if (response.data.message) {
    alert(response.data.message);
  }
};
