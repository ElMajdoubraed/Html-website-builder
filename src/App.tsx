import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Preview from "./pages/preview";
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
