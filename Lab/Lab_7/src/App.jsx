import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootPage from "/src/components/RootPage";
import Dashboard from "/src/components/Dashboard";
import Projects from "/src/components/Projects";
import Teams from "/src/components/Teams";
import Analytics from "/src/components/Analytics";
import Messages from "/src/components/Messages";
import Integrations from "/src/components/Integrations";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootPage />}>
          <Route index element={<Dashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="teams" element={<Teams />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="messages" element={<Messages />} />
          <Route path="integrations" element={<Integrations />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
