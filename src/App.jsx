import Dashboard from "./dashboad/Dashboard";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="md:flex pb-4 md:pb-0">
      <Sidebar className="bg-zinc-100 md:fixed left-0 top-0 md:w-[20%]" />
      <div className="md:px-6  md:pb-4 md:absolute right-0 top-0 md:w-[80%] ">
        <Navbar className="border-b-2" />
        <Dashboard className="md:px-0 px-6" />
      </div>
    </div>
  );
}

export default App;
