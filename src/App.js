import Sidebar from "./components/sidebar/Sidebar.jsx";
import Topbar from "./components/topbar/Topbar.jsx";
import "./app.css";
import Home from "./components/pages/home/Home.jsx";
import { Routes, Route } from "react-router-dom";
import UserList from "./components/pages/userList/UserList.jsx";
import ProvidersList from "./components/pages/providersList/ProvidersList.jsx";
import User from "./components/pages/user/User.jsx";
import NewUser from "./components/pages/newUser/NewUser.jsx";

function App() {
  return <div>
    <Topbar />
    <div className="container">
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/providers" element={<ProvidersList />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/newUser" element={<NewUser />} />
      </Routes>
    </div>
  </div>;
}

export default App;
