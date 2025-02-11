import React from "react";
import AllMessages from "./AllMessages";
import FormSendMessage from "./FormSendMessage";
import { Container } from "@mui/material";

export default function Messages() {
  return (
    <Container>
      <AllMessages />
      <FormSendMessage />
    </Container>
  );
}
