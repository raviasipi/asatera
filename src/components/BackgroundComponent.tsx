import { Box } from "@mui/material";
import bg from "../assets/images/background_img.jpg";

export type TBackgroundComponent = {
  children: string | JSX.Element | JSX.Element[];
};

const BackgroundComponent = ({ children }: TBackgroundComponent) => {
  return (
    <Box
      style={{
        backgroundImage: `url(${bg})`,
        width: "100vw",
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {children}
    </Box>
  );
};

export default BackgroundComponent;
