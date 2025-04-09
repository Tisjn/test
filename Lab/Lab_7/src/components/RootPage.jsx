import { NavLink, Outlet } from "react-router-dom";
import {
  Home,
  Folder,
  Users,
  BarChart2,
  MessageSquare,
  Settings,
} from "lucide-react";

export default function RootPage() {
  const navItems = [
    { label: "Dashboard", icon: <Home />, path: "/" },
    { label: "Projects", icon: <Folder />, path: "/projects" },
    { label: "Teams", icon: <Users />, path: "/teams" },
    { label: "Analytics", icon: <BarChart2 />, path: "/analytics" },
    { label: "Messages", icon: <MessageSquare />, path: "/messages" },
    { label: "Integrations", icon: <Settings />, path: "/integrations" },
  ];

  return (
    <div className="min-h-screen flex bg-white">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r shadow-sm p-4 flex flex-col justify-between">
        <div>
          {/* Logo */}
          <div className="flex items-center gap-2 mb-10">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
            <span className="font-bold text-xl">Logo</span>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `w-full flex items-center gap-3 px-4 py-2 rounded-lg text-left hover:bg-pink-100 ${
                    isActive ? "bg-pink-500 text-white" : "text-gray-700"
                  }`
                }
              >
                {item.icon}
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Version Info */}
        <div className="bg-blue-50 rounded-xl p-4 text-sm">
          <p className="font-semibold text-gray-700">V2.0 is available</p>
          <button className="mt-2 px-3 py-1 bg-blue-500 text-white rounded-lg text-xs">
            Try now
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}
