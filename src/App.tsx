import { useRoutes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/redux-toolkit/Store";

import Routes from "@/Routes";

function App() {
  const pages = useRoutes(Routes);

  return <Provider store={store}>{pages}</Provider>;
}

export default App;
