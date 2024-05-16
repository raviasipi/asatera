import {
  Box,
  Button,
  OutlinedInput,
  Typography,
} from "@mui/material";
import logo from "../../assets/images/logo.svg";
import forgotpassword from "../../assets/images/forgotpassword.svg";

export type TSignIn = {
  handleStep: (value: string) => void;
};
const ForgotPassword = ({ handleStep }: TSignIn) => {
  return (
    <Box className="px-64 py-16 flex h-full">
      <Box className="bg-[#ffffff] grow rounded-l-[32px] p-8">
        <img src={logo} alt="logo" />
        <Box className="pt-8 px-6">
          <Typography className="text-[#1E1F20] text-[22px] font-bold">
            Password Recovery
          </Typography>
          <Typography className="text-[#7F85A2] text-sm">
            Enter your email to recover your password
          </Typography>
        </Box>
        <Box className="pt-6 px-6 flex flex-col gap-4">
          <Box className="flex flex-col gap-2">
            <Typography className="text-[#1E1F20] text-[12px] font-bold">
              EMAIL
            </Typography>
            <OutlinedInput placeholder="username" fullWidth size="small" />
          </Box>
        </Box>
        <Box className="flex flex-col gap-4 px-6 pt-8">
          <Button
            variant="contained"
            fullWidth
            size="large"
            className="text-[#1E1F20] bg-[#FDDE69] h-[58px] normal-case font-bold"
            onClick={() => handleStep("login")}
          >
            Send Email
          </Button>
        </Box>
      </Box>
      <Box
        className="grow max-w-[500px] flex flex-col justify-center items-center p-4"
        sx={{
          background:
            "linear-gradient(198.52deg, #03004D -30.41%, #3563EB 109.49%)",
        }}
      >
        <img src={forgotpassword} alt="login" />
      </Box>
    </Box>
  );
};

export default ForgotPassword;
