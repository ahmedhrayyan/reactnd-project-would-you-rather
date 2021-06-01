import { FC } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { useAppSelector } from "../utils/hooks";

interface PrivateRouteProps extends RouteProps {}
const PrivateRoute: FC<PrivateRouteProps> = ({ ...props }) => {
  const authedUser = useAppSelector((state) => state.authedUser);
  if (authedUser === null) {
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: { from: window.location.pathname },
        }}
      />
    );
  }

  return <Route {...props} />;
};

export default PrivateRoute;
