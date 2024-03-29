import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {


  return (

 <div>
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
            <Route path="/LandingPage" element={<LandingPage/>} />
        </Routes>
      </BrowserRouter>
  </div>
  )
}

export default App;
