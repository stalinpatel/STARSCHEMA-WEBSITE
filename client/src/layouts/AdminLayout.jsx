import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Home, Table } from "lucide-react";

export default function AdminLayout() {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* ---- SIDEBAR ---- */}
      <div
        className={`${
          open ? "w-64" : "w-20"
        } bg-white shadow-xl transition-all duration-300 flex flex-col`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h1 className={`font-bold text-xl transition-all ${open ? "block" : "hidden"}`}>
            Admin
          </h1>
          <button onClick={() => setOpen(!open)} className="p-2">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="mt-4 flex-1">
          <SidebarLink
            to="/admin"
            icon={<Home size={20} />}
            label="Dashboard"
            open={open}
          />

          <SidebarLink
            to="/admin/leads"
            icon={<Table size={20} />}
            label="Leads"
            open={open}
          />
        </nav>
      </div>

      {/* ---- MAIN CONTENT ---- */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
}

// Reusable Sidebar Link Component
function SidebarLink({ to, icon, label, open }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `flex items-center gap-3 p-4 mx-2 rounded-lg text-gray-700 
         transition-all hover:bg-gray-200
         ${isActive ? "bg-gray-300 font-semibold" : ""}`
      }
    >
      {icon}
      <span className={`${open ? "block" : "hidden"} transition-all`}>{label}</span>
    </NavLink>
  );
}
