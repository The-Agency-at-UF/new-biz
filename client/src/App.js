import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Admin from "./pages/Admin";
import CaseStudy from "./components/CaseStudy/CaseStudy";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// This line connects this front-end code to the server

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/meet-the-team" element={<Home />} />
        <Route path="/our-clients" element={<Home />} />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/:caseStudyId" element={<CaseStudy />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
