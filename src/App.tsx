import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./components/shared/AppBar";
import Button from "./components/atoms/Button";
import Home from "./components/pages/Home";


function App() {
  return (
    <>
      <BrowserRouter>
        <ResponsiveAppBar />

        <Button
          name="hello"
          clickHandler={() => {}}
          color="red"
          bgColor="blue"
        />

        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>

        
      </BrowserRouter>
    </>
  );
}

export default App;
