import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import DefaultLayout from "./pages/default-layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout component={Home} />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
