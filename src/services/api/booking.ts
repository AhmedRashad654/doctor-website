import { request } from "@/axios/axios";
import { IStepsBooking } from "@/constants/Types";
import { Dayjs } from "dayjs";
import Cookies from "js-cookie";
/*
 * check slot available
 */
const userId = Cookies.get("userId_Doctor");
export const checkSlotavailable = async (
  selectedDateBooking: Dayjs | null,
  bookingState: IStepsBooking
) => {
  const response = await request.post(`/user/appointment/checkSlot`, {
    serviceId: bookingState?.doctor?.service[0]?._id,
    userId: userId,
    doctorId: bookingState?.doctor?._id,
    date: selectedDateBooking,
    time: bookingState?.selectedTime,
    amount: bookingState?.tax?.data?.finalAmount,
    withoutTax: bookingState?.doctor?.charge,
    patient: "self",
    paymentGateway: 2,
    duration: bookingState?.doctor?.timeSlot,
    type: bookingState?.selectAppointmentType,
  });
  if (response?.data?.status === true || response?.data?.status === false)
    return response?.data?.message;
  const messageError = "error in check on slot";
  return messageError;
};

/*
 * book appointment
 */
export const bookAppointment = async (
  selectedDateBooking: Dayjs | null,
  bookingState: IStepsBooking
) => {
  try {
    const response = await request.post(`/user/appointment/newAppointment`, {
      serviceId: bookingState?.doctor?.service[0]?._id,
      userId: userId,
      doctorId: bookingState?.doctor?._id,
      date: selectedDateBooking,
      time: bookingState?.selectedTime,
      amount: bookingState?.tax?.data?.finalAmount,
      withoutTax: bookingState?.doctor?.charge,
      type: bookingState?.selectAppointmentType,
      patient: "self",
      details: bookingState?.explainYourProblem,
    });

    if (response?.status === 200) return response?.data;
  } catch{
    alert("Faild Book Appointment, please try again");
  }
};
