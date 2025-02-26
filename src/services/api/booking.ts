import { request } from "@/axios/axios";
import { Dayjs } from "dayjs";

/*
 *getDateAndTimeToBooking
 */
export const getDateAndTimeToBooking = async (
  selectedDate: Dayjs | null,
  doctorId: string | string[] | undefined
) => {
  const response = await request.get(
    `/user/appointment/checkDate?doctorId=${doctorId}&date=${selectedDate}`,
    {
      headers: {
        key: process.env.NEXT_PUBLIC_SECRET_KEY || "",
      },
    }
  );
  return response?.data;
};
