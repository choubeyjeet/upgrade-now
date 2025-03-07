import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Login from "./components/Auth/Login";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import CreateOrganization from "./components/SuperAdmin/Organization/Create/CreateOrganization";
import DashboardPage from "./components/SuperAdmin/Dashboard/DashboardPage";
import Dashboard from "./components/SuperAdmin/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Tooltip id="tooltip" className="z-[999]" />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="dashboard/" element={<Dashboard />}>
            <Route path="home" element={<DashboardPage />} />
            <Route path="organization/">
              <Route path="create" element={<CreateOrganization />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
