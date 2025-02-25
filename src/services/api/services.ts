import { url } from "@/axios/axios";
import { IBestSpecialist } from "@/constants/Types";
import { cookies } from "next/headers";

/*
 * get services
 */
export const getServices = async () => {
  const request = await fetch(`${url}/user/service`, {
    method: "GET",
    headers: {
      key: process.env.NEXT_PUBLIC_SECRET_KEY || "",
    },
    next: { revalidate: 300 },
  });
  const response = await request.json();
  return response.data;
};

/*
 * get best specialist
 */
export const getBestSpecialist = async () => {
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId_Doctor")?.value;
  if (!userId) return { linkSpecialist: [], bestSpecialist: [] };
  const request = await fetch(
    `${url}/user/doctor/getDoctorsServiceWise?userId=${userId}`,
    {
      method: "GET",
      headers: {
        key: process.env.NEXT_PUBLIC_SECRET_KEY || "",
      },
      next: { revalidate: 300 },
    }
  );
  const response = await request.json();
  const bestSpecialist = response.data;
  const linkSpecialist = bestSpecialist.map(
    (item: IBestSpecialist) => item.serviceName
  );

  return { linkSpecialist, bestSpecialist };
};
