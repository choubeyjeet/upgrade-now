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
import StudentDashboard from "./components/Student/StudentDashboard";
import ManageOrganization from "./components/SuperAdmin/Organization/ManageOrganization"
import Student from "./components/Student/Student";
import Admin from "./components/Admin/Admin";
import AdminDashboard from "./components/Admin/AdminDashboard";
import Inbox from "./components/Inbox/Inbox";
import TutorDashboard from "./components/Tutor/TutorDashboard";
import Tutor from "./components/Tutor/Tutor";
import CreateChapter from "./components/Chapter/CreateChapter";
import ManageChapter from "./components/Chapter/ManageChapter";
import ManageCourse from "./components/Course/ManageChapter";
import CreateCourse from "./components/Course/CreateCourse";
import Playground from "./components/Student/Playground";
import Attendance from "./components/Student/Attendance";
import CreateStudent from "./components/Admin/CreateStudent";
import ManageStu from "./components/Admin/ManageStu";
import Faculty from "./components/Admin/Faculty";
import ManageFaculty from "./components/Admin/ManageFaculty";
import CoursesandChapter from "./components/Student/CoursesandChapter";
import PlayChapters from "./components/Student/PlayChapters";
function App() {
  return (
    <>
      <Tooltip id="tooltip" className="z-[999]" />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="dashboard/" element={<Dashboard />}>
            <Route path="home/" element={<DashboardPage />} />
            <Route path="inbox" element={<Inbox />} />
            <Route path="organization/">
              <Route path="create" element={<CreateOrganization />} />
              <Route path="manage" element={<ManageOrganization />} />
            </Route>
          </Route>
          <Route path="student" element={<Student />}>
            <Route path="inbox/" element={<Inbox />} />
            <Route path="playground" element={<Playground />} />
            {/* <Route path="courses" element={<ManageCourse />} /> */}
            <Route path="playground/course_id" element={<CoursesandChapter />} />
            {/* </Route> */}
            <Route path="playground/course_id/chapter_id" element={<PlayChapters />} />

            <Route path="attendance" element={<Attendance />} />
            <Route path="dashboard/" element={<StudentDashboard />} />
          </Route>


          <Route path="admin" element={<Admin />}>
            <Route path="student/create" element={<CreateStudent />} />
            <Route path="student/manage" element={<ManageStu />} />
            <Route path="faculty/create" element={<Faculty />} />
            <Route path="faculty/manage" element={<ManageFaculty />} />
            <Route path="dashboard/" element={<AdminDashboard />} />
          </Route>
          <Route path="tutor" element={<Tutor />}>
            <Route path="inbox/" element={<Inbox />} />
            <Route path="course/create" element={<CreateCourse />} />
            <Route path="course/manage" element={<ManageCourse />} />
            <Route path="chapter/manage" element={<ManageChapter />} />
            <Route path="chapter/create" element={<CreateChapter />} />
            <Route path="dashboard/" element={<TutorDashboard />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
