import { Router } from "@reach/router";
import { TurboSculpture } from "./TurboSculpture";

import { Home } from "./Home";

const App = () => (
  <Router>
    <Home path="/" />
    <TurboSculpture path="turbosculpture" />
  </Router>
);

export default App;
