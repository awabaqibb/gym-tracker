import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Navbar, Login, Signup } from "../index";

function App() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
