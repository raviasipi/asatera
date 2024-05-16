import { Box, Button, Typography } from "@mui/material";
import logo from "../../assets/images/logo.svg";
import registered from "../../assets/images/registered.svg";

export type TSignIn = {
  handleStep: (value: string) => void;
};
const Registered = ({ handleStep }: TSignIn) => {
  return (
    <Box className="px-64 py-16 flex h-full">
      <Box className="bg-[#ffffff] grow rounded-l-[32px] p-8">
        <img src={logo} alt="logo" />
        <Box className="pt-[200px]">
          <Box className="px-6">
            <Typography className="font-bold">
              Registeration Completed. Please confirm your email id by clicking
              on the link sent to your email.
            </Typography>
          </Box>
          <Box className="flex flex-col gap-4 px-6 pt-8">
            <Button
              variant="contained"
              fullWidth
              size="large"
              className="text-[#1E1F20] bg-[#FDDE69] h-[58px] normal-case font-bold"
              onClick={() => handleStep("login")}
            >
              Sounds Great !
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        className="grow min-w-[500px] flex flex-col justify-center items-center p-4"
        sx={{
          background:
            "linear-gradient(198.52deg, #03004D -30.41%, #3563EB 109.49%)",
        }}
      >
        <img src={registered} alt="login" />
      </Box>
    </Box>
  );
};

export default Registered;
