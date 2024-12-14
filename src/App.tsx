import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from "./pages/main/index";
import { Detail } from "./pages/detail/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:contentid" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
