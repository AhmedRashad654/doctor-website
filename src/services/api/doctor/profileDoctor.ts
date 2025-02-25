import { url } from "@/axios/axios";
/*
 * get profile doctor
 */
export const getProfileDoctor = async (doctorId: string, userId: string) => {
  const request = await fetch(
    `${url}/user/doctor/doctorProfile?doctorId=${doctorId}&userId=${userId}`,
    {
      method: "GET",
      headers: {
        key: process.env.NEXT_PUBLIC_SECRET_KEY || "",
      },
          next: { revalidate: 300 },
    }
  );
  const response = await request.json();
  if (response.error) throw new Error("faild fetch doctor");
  return response.data;
};
