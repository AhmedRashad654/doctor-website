import React from "react";
import AllMessages from "./AllMessages";
import FormSendMessage from "./FormSendMessage";
import { Container } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import { checkIsCanCall } from "@/services/api/chats/chats";
import ModalNotCallEnable from "../ModalNotCallEnable";

export default function IndexMessages() {
  const { doctorId } = useParams();
  const userId = useAppSelector((state) => state?.user?._id);
  const { data } = useQuery({
    queryKey: ["checkIsCanCall", userId, doctorId],
    queryFn: () => checkIsCanCall(userId, doctorId),
    enabled: !!userId,
  });
  console.log(data);
  return (
    <Container>
      <AllMessages />
      <FormSendMessage />
      <ModalNotCallEnable enable={data?.callEnable} />
    </Container>
  );
}
