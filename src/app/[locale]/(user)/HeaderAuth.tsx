import { Typography } from '@mui/material';
import React from 'react'

export default function HeaderAuth({text}:{text:string}) {
  return (
    <Typography
      variant="h3"
      sx={{ my: 2, color: "white", fontWeight: "bold", zIndex: 5 }}
    >
      {text}
    </Typography>
  );
}
