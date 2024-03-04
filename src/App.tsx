import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

export default function App() {
  return (
    <main className="flex min-w-full min-h-screen">
      <Sidebar />
      <section className="flex-grow">
        <div className="">
          <Navbar />
        </div>
        <Outlet />
      </section>
    </main>
  );
}
