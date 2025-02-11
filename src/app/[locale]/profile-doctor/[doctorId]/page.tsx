import React from "react";
import { Box, Container } from "@mui/material";
import HeaderDetailsDoctor from "./HeaderDetailsDoctor";
import FirstSection from "./FirstSection";
import SecondSection from "./secondSection";
import LinksProfileDoctor from "./LinksProfileDoctor";
import Details from "./BlocksDetailsDoctor/Details/Details";
import Addres from "./BlocksDetailsDoctor/Addres";
import Reviews from "./BlocksDetailsDoctor/Reviews";
import Education from "./BlocksDetailsDoctor/Education";
import Awards from "./BlocksDetailsDoctor/Awards";
import Book from "./Book";

export default async function DetailsDoctor({
  searchParams,
  params,
}: {
  searchParams: { [key: string]: string };
  params: {
    doctorId: string;
  };
}) {
  const search = await searchParams;
  const { doctorId } = await params;
 
  const valueSearch = search?.categoryDoctor || "/";
  return (
    <Box>
      <HeaderDetailsDoctor />
      <Container>
        <FirstSection />
        <SecondSection />
        <LinksProfileDoctor valueSearch={valueSearch} doctorId={doctorId} />
        {valueSearch === "/" ? (
          <Details />
        ) : valueSearch === "Address" ? (
          <Addres />
        ) : valueSearch === "Reviews" ? (
          <Reviews />
        ) : valueSearch === "Education" ? (
          <Education />
        ) : valueSearch === "Awards" ? (
          <Awards />
        ) : (
          ""
        )}
        <Book doctorId={doctorId} />
      </Container>
    </Box>
  );
}
