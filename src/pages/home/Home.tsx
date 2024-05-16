import { Box, Button } from "@mui/material";
import BackgroundComponent from "../../components/BackgroundComponent";
import { useAppDispatch } from "../../services/hooks/storeHooks";
import { loggedOut, updateStep } from "../../store/slices/authSlice";

export default function Home() {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(loggedOut());
    dispatch(updateStep("login"));
  };
  return (
    <BackgroundComponent>
      <Box className="w-full h-full flex justify-center items-center">
        <Button
          variant="contained"
          size="large"
          className="text-[#1E1F20] bg-[#FDDE69] h-[58px] normal-case font-bold"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>
    </BackgroundComponent>
  );
}
