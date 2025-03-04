import { request } from "@/axios/axios";

/*
 * check on can call with doctor or No
 */
export const checkIsCanCall = async (
  userId: string,
  doctorId: string | string[] | undefined
) => {
  try {
    const response = await request.get(
      `/user/appointment/isCallEnableForUser?userId=${userId}&doctorId=${doctorId}`
    );
    return response.data;
  } catch {
    alert("wrong happened");
  }
};
