import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/Signup"; // Ensure your SignUp component is correctly imported
import LandingPage from "./components/LandingPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}
