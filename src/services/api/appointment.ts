import { request } from "@/axios/axios";
/*
 * get appointments by status
 */
export async function getAppointmentByStatus(
  userId: string,
  valueSearch: string
) {
  return await request.get(
    `/user/appointment/getUserAppointment?userId=${userId}&status=${valueSearch}`
  );
}
/*
 * cancel appointment
 */
export const cancelAppointment = async (
  appointmentId: string,
  reason: string
) => {
  const response = await request.patch(
    `/user/appointment/cancelAppointment?appointmentId=${appointmentId}&reason=${reason}`
  );
  if (response?.status === 200) return response?.data;
  alert("Faild cancel Appointment");
};
