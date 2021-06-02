import { useBoolean } from "@chakra-ui/hooks";
import { Box, Container, Heading } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router";
import Header from "./components/Header";
import PrivateRoute from "./components/privateRoute";
import AddQ from "./pages/AddQ";
import Home from "./pages/Home";
import LeaderBoard from "./pages/LeaderBoard";
import LoginPage from "./pages/LoginPage";
import QPage from "./pages/QPage";
import { getInitialData } from "./redux/actions/shared";
import { useAppDispatch } from "./utils/hooks";

function App() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useBoolean();

  useEffect(() => {
    setLoading.on();
    dispatch(getInitialData())
      .then(() => {
        setLoading.off();
      })
      .catch(() => {
        setLoading.off();
      });
  }, []); // eslint-disable-line

  if (loading) {
    return (
      <Box height="100vmin" lineHeight="100vmin" textAlign="center">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Box>
    );
  }

  return (
    <div className="App">
      <Header />
      <Switch>
        <PrivateRoute exact path="/">
          <Home />
        </PrivateRoute>
        <PrivateRoute path="/add">
          <AddQ />
        </PrivateRoute>
        <PrivateRoute path="/leaderboard">
          <LeaderBoard />
        </PrivateRoute>
        <PrivateRoute path="/questions/:id">
          <QPage />
        </PrivateRoute>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/404">
          <Container>
            <Heading as="h1" textAlign="center">404</Heading>
          </Container>
        </Route>
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;
