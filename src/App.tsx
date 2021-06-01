import { useEffect } from "react";
import { getInitialData } from "./redux/actions/shared";
import { useAppDispatch } from "./utils/hooks";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getInitialData());
  }, []); // eslint-disable-line
  return <div className="App"></div>;
}

export default App;
