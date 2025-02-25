import { Skeleton, Box, keyframes } from "@mui/material";

export default function LoadingSkeleton() {
  const fastPulse = keyframes`
  0% { opacity: 0.5; }
  50% { opacity: 1; }
  100% { opacity: 0.5; }
`;
  return (
    <Box sx={{ marginTop: "30px" }}>
      <Skeleton
        variant="rectangular"
        width="100%"
        height={80}
        sx={{
          mb: 2,
          borderRadius: "10px",
          animation: `${fastPulse} 0.8s infinite`,
        }}
      />
      <Skeleton
        variant="rectangular"
        width="100%"
        height={80}
        sx={{
          mb: 2,
          borderRadius: "10px",
          animation: `${fastPulse} 0.8s infinite`,
        }}
      />
      <Skeleton
        variant="rectangular"
        width="100%"
        height={80}
        sx={{
          mb: 2,
          borderRadius: "10px",
          animation: `${fastPulse} 0.8s infinite`,
        }}
      />
    </Box>
  );
}
