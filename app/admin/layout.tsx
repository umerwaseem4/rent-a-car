import type { ReactNode } from "react";
import Link from "next/link";
import {
  Car,
  Users,
  FileText,
  Settings,
  LogOut,
  LayoutDashboard,
} from "lucide-react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const handleSignOut = async () => {
    "use server";
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md fixed h-full">
        <div className="p-6">
          <Link href="/" className="flex items-center gap-2 mb-8">
            <Car className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              DriveFlex
            </span>
          </Link>

          <nav className="space-y-1">
            <Link
              href="/admin"
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-lg"
            >
              <LayoutDashboard className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/admin/applications"
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-lg"
            >
              <FileText className="h-5 w-5" />
              <span>Applications</span>
            </Link>
            <Link
              href="/admin/users"
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-lg"
            >
              <Users className="h-5 w-5" />
              <span>Users</span>
            </Link>
            <Link
              href="/admin/settings"
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-lg"
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
          </nav>
        </div>

        <div className="absolute bottom-0 w-full p-6">
          <form action={handleSignOut}>
            <button
              type="submit"
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg w-full"
            >
              <LogOut className="h-5 w-5" />
              <span>Sign Out</span>
            </button>
          </form>
        </div>
      </aside>

      {/* Main content */}
      <main className="ml-64 flex-1 p-8">{children}</main>
    </div>
  );
}
