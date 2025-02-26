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
import { cookies } from "next/headers";
import { getProfileDoctor } from "@/services/api/doctor/profileDoctor";
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

  const cookieStore = await cookies();
  const valueSearch = search?.categoryDoctor || "/";
  const userId = cookieStore.get("userId_Doctor");
  if (!userId) throw new Error("You Must Login");
  const profile = await getProfileDoctor(doctorId, userId.value);
  return (
    <Box>
      <HeaderDetailsDoctor image={profile.image} />
      <Container>
        <FirstSection
          name={profile?.name}
          degree={profile.degree}
          address={profile.address}
        />
        <SecondSection profile={profile} />
        <LinksProfileDoctor valueSearch={valueSearch} doctorId={doctorId} />
        {valueSearch === "/" ? (
          <Details profile={profile} />
        ) : valueSearch === "Address" ? (
          <Addres address={profile.address} />
        ) : valueSearch === "Reviews" ? (
          <Reviews reviewCount={profile.reviewCount} />
        ) : valueSearch === "Education" ? (
          <Education education={profile.education} />
        ) : valueSearch === "Awards" ? (
          <Awards awards={profile.awards} />
        ) : (
          ""
        )}
        <Book doctor={profile} />
      </Container>
    </Box>
  );
}
