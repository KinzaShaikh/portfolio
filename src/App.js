import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import DefaultLayout from "./pages/default-layout";

function App() {
  return <Routes>
    <Route path="/" element={<DefaultLayout component={Home}/>}/>
    </Routes>
}

export default App;
