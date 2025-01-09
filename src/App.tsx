import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./components/shared/AppBar";
import Button from "./components/atoms/Button";
import Home from "./components/pages/Home";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { UserDataRequest, UserRegister } from "./redux/actions";
import { AppDispatch } from "./redux/store";

function App() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(UserDataRequest());
  }, []);

  const formData: { [index: string]: string } = {
    username: "meowwo",
    email: "mewowo@gmail.com",
    Password: "1232234",
  };

  const handleClick = () => {
    dispatch(UserRegister(formData));
  };

  return (
    <>
      <BrowserRouter>
        <ResponsiveAppBar />

        <Button
          name="hello"
          clickHandler={handleClick}
          color="red"
          bgColor="blue"
        />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
