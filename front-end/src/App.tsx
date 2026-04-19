import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DashboardMonitoria from "./pages/DashboardMonitoria";
import MeusHorariosM from "./pages/MeusHorariosM";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<DashboardMonitoria />} />
        <Route path="/meus-horarios" element={<MeusHorariosM />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;