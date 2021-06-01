import { Container } from "@chakra-ui/layout";
import { useEffect } from "react";
import Header from "./components/Header";
import SignIn from "./components/SignIn";
import { getInitialData } from "./redux/actions/shared";
import { useAppDispatch } from "./utils/hooks";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getInitialData());
  }, []); // eslint-disable-line

  return (
    <div className="App">
      <Header />
      <Container mt="5">
        <SignIn />
      </Container>
    </div>
  );
}

export default App;
