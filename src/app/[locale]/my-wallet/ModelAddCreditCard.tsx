import { Dispatch, SetStateAction, useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LockIcon from "@mui/icons-material/Lock";
import { useTranslations } from "next-intl";
export default function ModelAddCreditCard(
{ open, setOpen }: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>> }) {
  const t =  useTranslations("credit-card");
  const [country, setCountry] = useState("Egypt");
  const handleClose = () => setOpen(false);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "white",
          boxShadow: 24,
          borderRadius: "12px",
          p: 3,
          width: { md: "400px", xs: "340px" },
          color:"primary.main"
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={"5px"}>
          <Typography variant="h6">Add your payment information</Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider/>
     
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mt: 2,
           
          
          }}
        >
          <TextField label="Card number" variant="outlined" fullWidth />
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField label="MM / YY" variant="outlined" fullWidth />
            <TextField label="CVC" variant="outlined" fullWidth />
          </Box>
        </Box>

        {/* Billing Address */}
        <Typography variant="subtitle1" sx={{ my: 2, fontWeight: "semibold" }}>
          Billing address
        </Typography>
        <FormControl fullWidth>
          <Select value={country} onChange={(e) => setCountry(e.target.value)}>
            <MenuItem value="Egypt">Egypt</MenuItem>
            <MenuItem value="USA">USA</MenuItem>
            <MenuItem value="UK">UK</MenuItem>
          </Select>
        </FormControl>

        {/* Pay Button */}
        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 3,
            bgcolor: "primary.main",
            color: "white",
            borderRadius: "8px",
              textTransform: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            padding:"10px"
          }}
        >
          pay 100 $ <LockIcon fontSize="small" />
        </Button>
      </Box>
    </Modal>
  );
}
