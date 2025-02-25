"use client";
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import {
  ExitToApp,
  Delete,
  Wallet,
  Event,
  Notifications,
  Star,
  Share,
  Gavel,
  Help,
  Bookmark,
} from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/routing";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setLogout } from "@/redux/features/userSlice";

export default function Sidebar() {
  const t = useTranslations("sidebar");
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const router = useRouter();
  const handleLogout = () => {
    dispatch(setLogout());
    router.push("/login");
  };
  return (
    <Box
      sx={{
        width: 300,
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 1,
        padding: "15px",
        color: "primary.main",
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        gap={2}
        mb={2}
        sx={{ backgroundColor: "backGround.main", boxShadow: 2 }}
        padding={"15px"}
        borderRadius={"10px"}
      >
        <Avatar src={user.image} sx={{ width: 70, height: 70 }} />
        <Box>
          <Typography fontWeight="bold">{user.name}</Typography>
          <Typography variant="body1">{user.email?.slice(0, 17)}</Typography>
          <Link href={`/editProfile`}>
            <Stack
              direction="row"
              alignItems="center"
              gap="3px"
              sx={{
                backgroundColor: "#8FB7D347",
                borderRadius: "5px",
                padding: "4px 10px",
                width: "fit-content",
              }}
            >
              <EditIcon />
              <Typography variant="body1">{t("Edit Profile")}</Typography>
            </Stack>
          </Link>
        </Box>
      </Box>

      <Typography variant="body1" marginBottom={"5px"}>
        {t("General")}
      </Typography>
      <Box
        sx={{ backgroundColor: "backGround.main", boxShadow: 1 }}
        padding={"5px"}
        borderRadius={"10px"}
      >
        <List>
          <Link href={`/my-wallet`}>
            <ListItemButton>
              <ListItemIcon>
                <Wallet />
              </ListItemIcon>
              <ListItemText primary={t("My Wallet")} />
            </ListItemButton>
          </Link>
          <Link href={`/saved-doctor`}>
            <ListItemButton>
              <ListItemIcon>
                <Bookmark />
              </ListItemIcon>
              <ListItemText primary={t("Save Doctor")} />
            </ListItemButton>
          </Link>
          <Link href={`/appointment?category=approve`}>
            <ListItemButton>
              <ListItemIcon>
                <Event />
              </ListItemIcon>
              <ListItemText primary={t("My Appointment")} />
            </ListItemButton>
          </Link>
        </List>
      </Box>

      <Typography variant="body1" margin={"5px 0"}>
        {t("Account")}
      </Typography>
      <Box
        sx={{ backgroundColor: "backGround.main", boxShadow: 1 }}
        padding={"5px"}
        borderRadius={"10px"}
      >
        <List>
          <ListItemButton>
            <ListItemIcon>
              <Notifications />
            </ListItemIcon>
            <ListItemText primary={t("Notification")} />
            <Switch defaultChecked color="success" />
          </ListItemButton>
          <LanguageSwitcher />
          <ListItemButton>
            <ListItemIcon>
              <Star />
            </ListItemIcon>
            <ListItemText primary={t("Rate Us")} />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Share />
            </ListItemIcon>
            <ListItemText primary={t("Share App")} />
          </ListItemButton>
        </List>
      </Box>
      <Divider />

      <Typography variant="body1" margin={"5px 0"}>
        {t("About")}
      </Typography>
      <Box
        sx={{ backgroundColor: "backGround.main", boxShadow: 1 }}
        padding={"5px"}
        borderRadius={"10px"}
      >
        <List>
          <ListItemButton>
            <ListItemIcon>
              <Gavel />
            </ListItemIcon>
            <ListItemText primary={t("Terms of Use")} />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Help />
            </ListItemIcon>
            <ListItemText primary={t("Privacy Policy")} />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Help />
            </ListItemIcon>
            <ListItemText primary={t("Help & FAQ")} />
          </ListItemButton>
          <ListItemButton onClick={handleLogout}>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary={t("Log Out")} />
          </ListItemButton>
          <ListItemButton sx={{ color: "error.main" }}>
            <ListItemIcon>
              <Delete color="error" />
            </ListItemIcon>
            <ListItemText primary={t("Delete Account")} />
          </ListItemButton>
        </List>
      </Box>
    </Box>
  );
}
