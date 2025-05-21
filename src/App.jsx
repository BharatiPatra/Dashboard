import "./global.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <div className="flex h-screen">
          <Sidebar />
          <main className="flex-1 overflow-auto">
            {" "}
            {/* Adjust for sidebar width */}
            <Outlet />
          </main>
        </div>
        <div className="fixed bottom-4 right-4">
          <ThemeToggle />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
