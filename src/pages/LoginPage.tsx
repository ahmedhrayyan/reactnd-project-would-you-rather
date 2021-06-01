import { FC } from "react";
import { Redirect, useLocation } from "react-router";
import SignIn from "../components/SignIn";
import { useAppSelector } from "../utils/hooks";

const LoginPage: FC<{}> = () => {
  const { state } = useLocation<any>();
  const authedUser = useAppSelector(state => state.authedUser);

  if (authedUser !== null) {
    return <Redirect to={state && state.from ? state.from : "/"} />;
  }

  return <SignIn />;
};

export default LoginPage;
