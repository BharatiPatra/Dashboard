import "./global.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-auto"> {/* Adjust for sidebar width */}
        <Outlet />
      </main>
    </div>
  );
}

export default App;
