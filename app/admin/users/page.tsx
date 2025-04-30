import { CustomCard } from "@/components/custom-card";
import { Search, User } from "lucide-react";
import { Input } from "@/components/ui/input";

export default async function UsersPage({
  searchParams,
}: {
  searchParams: { search?: string; role?: string };
}) {
  const search = searchParams.search || "";
  const role = searchParams.role || "all";

  // Build query
  let query = supabase
    .from("profiles")
    .select(
      `
      id,
      first_name,
      last_name,
      email,
      role
    `
    )
    .order("first_name", { ascending: true });

  // Apply role filter
  if (role !== "all") {
    query = query.eq("role", role);
  }

  // Apply search filter
  if (search) {
    query = query.or(
      `first_name.ilike.%${search}%,last_name.ilike.%${search}%,email.ilike.%${search}%`
    );
  }

  const { data: users, error } = await query;

  if (error) {
    console.error("Error fetching users:", error);
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Users</h1>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <form>
            <Input
              type="text"
              name="search"
              placeholder="Search by name or email"
              className="pl-10"
              defaultValue={search}
            />
            <input type="hidden" name="role" value={role} />
          </form>
        </div>

        <div className="flex gap-2">
          <a
            href="/admin/users"
            className={`px-3 py-2 text-sm rounded-lg ${
              role === "all"
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All
          </a>
          <a
            href="/admin/users?role=customer"
            className={`px-3 py-2 text-sm rounded-lg ${
              role === "customer"
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Customers
          </a>
          <a
            href="/admin/users?role=admin"
            className={`px-3 py-2 text-sm rounded-lg ${
              role === "admin"
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Admins
          </a>
        </div>
      </div>

      <CustomCard>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="px-6 py-4 text-left font-medium text-gray-500">
                  Name
                </th>
                <th className="px-6 py-4 text-left font-medium text-gray-500">
                  Email
                </th>
                <th className="px-6 py-4 text-left font-medium text-gray-500">
                  Role
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {users && users.length > 0 ? (
                users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0 bg-gray-100 rounded-full flex items-center justify-center">
                          <User className="h-5 w-5 text-gray-500" />
                        </div>
                        <div className="ml-4">
                          {user.first_name} {user.last_name}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {user.role === "admin" ? (
                        <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                          Admin
                        </span>
                      ) : (
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                          Customer
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={3}
                    className="px-6 py-8 text-center text-gray-500"
                  >
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </CustomCard>
    </div>
  );
}
