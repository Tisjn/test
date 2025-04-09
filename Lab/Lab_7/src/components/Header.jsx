import { Bell, HelpCircle, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between items-center mb-6">
      {/* Left: Title */}
      <h1 className="text-2xl font-bold text-pink-600">Dashboard</h1>

      {/* Right: Search + Icons */}
      <div className="flex items-center gap-4">
        {/* Search box */}
        <div className="relative">
          <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-9 pr-3 py-2 rounded-lg border bg-gray-100 text-sm text-gray-700 focus:outline-none"
          />
        </div>

        {/* Notification & Help icons */}
        <Bell className="text-gray-600 cursor-pointer" />
        <HelpCircle className="text-gray-600 cursor-pointer" />

        {/* Avatar */}
        <img
          src="https://i.pravatar.cc/40?img=65"
          alt="avatar"
          className="w-9 h-9 rounded-full object-cover"
        />
      </div>
    </header>
  );
}
