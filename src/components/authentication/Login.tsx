import {
  Box,
  Button,
  IconButton,
  OutlinedInput,
  Typography,
} from "@mui/material";
import logo from "../../assets/images/logo.svg";
import login from "../../assets/images/login.svg";

import { GitHub, Google, Twitter } from "@mui/icons-material";
export type TLogin = {
  handleStep: (value: string) => void;
};

const Login = ({handleStep}:TLogin) => {
  return (
    <Box className="px-64 py-16 flex h-full">
      <Box className="bg-[#ffffff] grow rounded-l-[32px] p-8">
        <img src={logo} alt="logo" />
        <Box className="pt-8 px-6">
          <Typography className="text-[#1E1F20] text-[22px]">
            Welcome Back !
          </Typography>
          <Typography className="text-[#7F85A2] text-sm">
            Sign in to continue
          </Typography>
        </Box>
        <Box className="pt-6 px-6 flex flex-col gap-4">
          <Box className="flex flex-col gap-2">
            <Typography className="text-[#1E1F20] text-[12px] font-bold">
              EMAIL
            </Typography>
            <OutlinedInput placeholder="username" fullWidth size="small" />
          </Box>
          <Box className="flex flex-col gap-2">
            <Typography className="text-[#1E1F20] text-[12px] font-bold">
              PASSWORD
            </Typography>
            <OutlinedInput
              placeholder="password"
              fullWidth
              size="small"
              type="password"
            />
          </Box>
        </Box>
        <Box className="text-end py-2">
          <Button sx={{ textTransform: "none", color: "#7F85A2" }} onClick={()=>handleStep("forgot-password")}>
            Forgot Password ?{" "}
          </Button>
        </Box>
        <Box className="flex flex-col gap-4 px-6">
          <Button
            variant="contained"
            fullWidth
            size="large"
            className="bg-[#FDDE69] text-[#1E1F20] h-[58px] normal-case font-bold"
            onClick={()=> handleStep("sign-in")}
          >
            Login
          </Button>
          <Button
            variant="outlined"
            fullWidth
            size="large"
            className="text-[#1E1F20] h-[58px] normal-case font-bold"
          >
            Create an account
          </Button>
        </Box>
        <Box className="flex gap-2 justify-center items-center px-6 pt-4">
          <IconButton
            sx={{ border: "1px solid #ECECF2", borderRadius: ".5rem" }}
          >
            <Twitter />
          </IconButton>
          <IconButton
            sx={{ border: "1px solid #ECECF2", borderRadius: ".5rem" }}
          >
            <Google />
          </IconButton>
          <IconButton
            sx={{ border: "1px solid #ECECF2", borderRadius: ".5rem" }}
          >
            <GitHub />
          </IconButton>
          <Button sx={{ textTransform: "none", color: "#7F85A2" }}>
            or Sign in with
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
        <img src={login} alt="login" />
      </Box>
    </Box>
  );
};

export default Login;
