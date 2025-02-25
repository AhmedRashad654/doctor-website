import CardDoctor from "@/components/Shared/CardDoctor";
import { Doctor } from "@/constants/Types";
import { Grid } from "@mui/material";
import notFound from "../../../../../public/assets/images/notFound.png";
import NotFoundData from "@/components/Shared/NotFoundData";

export default async function DispalyDectors({
  doctors,
}: {
  doctors: Doctor[];
}) {
  if (doctors?.length === 0) return <NotFoundData image={notFound} />;
  return (
    <>
      <Grid container spacing={3} sx={{ paddingBottom: "35px" }}>
        {doctors &&
          doctors?.map((doctor: Doctor) => (
            <Grid item xs={12} sm={6} md={4} key={doctor?._id}>
              <CardDoctor doctor={doctor} />
            </Grid>
          ))}
      </Grid>
    </>
  );
}
