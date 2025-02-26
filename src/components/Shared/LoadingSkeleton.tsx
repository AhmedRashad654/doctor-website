import { Skeleton, Box, keyframes } from "@mui/material";

export default function LoadingSkeleton({ height ,width}: { height: number,width:string }) {
  const fastPulse = keyframes`
  0% { opacity: 0.5; }
  50% { opacity: 1; }
  100% { opacity: 0.5; }
`;
  return (
    <Box sx={{ marginTop: "30px" }}>
      <Skeleton
        variant="rectangular"
        width={width}
        height={height}
        sx={{
          mb: 2,
          borderRadius: "10px",
          animation: `${fastPulse} 0.8s infinite`,
        }}
      />
      <Skeleton
        variant="rectangular"
        width={width}
        height={height}
        sx={{
          mb: 2,
          borderRadius: "10px",
          animation: `${fastPulse} 0.8s infinite`,
        }}
      />
      <Skeleton
        variant="rectangular"
        width={width}
        height={height}
        sx={{
          mb: 2,
          borderRadius: "10px",
          animation: `${fastPulse} 0.8s infinite`,
        }}
      />
    </Box>
  );
}
