import Dashboard from "./dashboad/Dashboard";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar className="bg-zinc-100" />
      <div className="w-full px-10 bg-zinc-50">
        <Navbar className="border-b" />
        <Dashboard className="" />
      </div>
    </div>
  );
}

export default App;
