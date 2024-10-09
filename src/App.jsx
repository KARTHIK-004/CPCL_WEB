import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard";
import Logout from "./pages/LogOut";
import EmployeeDirectory from "./pages/EmployeeDirectory";
import NewsCenter from "./pages/NewsCenter";
import CafeteriaMenu from "./pages/CafeteriaMenu";
import Setting from "./pages/Setting";
import Helpdesk from "./pages/Helpdesk";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/directory" element={<EmployeeDirectory />} />
          <Route path="/news" element={<NewsCenter />} />
          <Route path="/cafeteria" element={<CafeteriaMenu />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/helpdesk" element={<Helpdesk />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
