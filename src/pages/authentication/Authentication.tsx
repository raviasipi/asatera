import BackgroundComponent from "../../components/BackgroundComponent";
import Login from "../../components/authentication/Login";
import SignIn from "../../components/authentication/SignIn";
import BusinessDetails from "../../components/authentication/BusinessDetails";
import Registered from "../../components/authentication/Registered";
import ForgotPassword from "../../components/authentication/ForgotPassword";
import { useAppDispatch, useAppSelector } from "../../services/hooks/storeHooks";
import { loggedIn, updateStep } from "../../store/slices/authSlice";

export default function Authentication() {
  const {step}= useAppSelector(state=> state.auth)
  const dispatch = useAppDispatch()
  const handleStep = (value:string) =>{
    dispatch(updateStep(value))
  }
  const handleLogin = (value:string) =>{
    dispatch(loggedIn(value))
  }

  return (
    <BackgroundComponent>
      <>
        {step === "login" && <Login handleStep={handleStep} />}
        {step === "sign-in" && <SignIn handleStep={handleStep} />}
        {step === "business-details" && <BusinessDetails handleStep={handleStep} />}
        {step === "registered" && <Registered handleStep={handleLogin} />}
        {step === "forgot-password" && <ForgotPassword handleStep={handleStep} />}
      </>
    </BackgroundComponent>
  );
}
