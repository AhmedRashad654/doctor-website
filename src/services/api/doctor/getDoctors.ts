import { cookies } from "next/headers";
import { url } from "@/axios/axios";
/*
 * get Doctors Base Service Id
 */
export const getDoctorsBaseServiceId = async (doctorId: string) => {
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId_Doctor")?.value;
  const request = await fetch(
    `${url}/user/doctor/getDoctors?serviceId=${doctorId}&userId=${userId}`,
    {
      method: "GET",
      headers: {
        key: process.env.NEXT_PUBLIC_SECRET_KEY || "",
      },
      next: { revalidate: 300 },
    }
  );
  const response = await request.json();
  if (response.error) throw new Error("faild fetch doctors");
  return response?.data?.doctors;
};
