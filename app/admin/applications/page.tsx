import Link from "next/link";
import { CustomCard } from "@/components/custom-card";
import { CustomButton } from "@/components/custom-button";
import { Eye, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default async function ApplicationsPage({
  searchParams,
}: {
  searchParams: { status?: string; search?: string };
}) {
  const status = searchParams.status || "all";
  const search = searchParams.search || "";

  // Build query
  // let query = supabase
  //   .from("applications")
  //   .select(`
  //     id,
  //     created_at,
  //     first_name,
  //     last_name,
  //     email,
  //     phone,
  //     status
  //   `)
  //   .order("created_at", { ascending: false })

  // Apply status filter
  if (status !== "all") {
    // query = query.eq("status", status)
  }

  // Apply search filter
  if (search) {
    // query = query.or(`first_name.ilike.%${search}%,last_name.ilike.%${search}%,email.ilike.%${search}%`)
  }

  // const { data: applications, error } = await query

  // if (error) {
  //   console.error("Error fetching applications:", error)
  // }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Applications</h1>
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
            <input type="hidden" name="status" value={status} />
          </form>
        </div>

        <div className="flex gap-2">
          <Link
            href="/admin/applications"
            className={`px-3 py-2 text-sm rounded-lg ${
              status === "all"
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All
          </Link>
          <Link
            href="/admin/applications?status=pending"
            className={`px-3 py-2 text-sm rounded-lg ${
              status === "pending"
                ? "bg-yellow-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Pending
          </Link>
          <Link
            href="/admin/applications?status=reviewing"
            className={`px-3 py-2 text-sm rounded-lg ${
              status === "reviewing"
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Reviewing
          </Link>
          <Link
            href="/admin/applications?status=approved"
            className={`px-3 py-2 text-sm rounded-lg ${
              status === "approved"
                ? "bg-green-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Approved
          </Link>
          <Link
            href="/admin/applications?status=rejected"
            className={`px-3 py-2 text-sm rounded-lg ${
              status === "rejected"
                ? "bg-red-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Rejected
          </Link>
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
                  Phone
                </th>
                <th className="px-6 py-4 text-left font-medium text-gray-500">
                  Date
                </th>
                <th className="px-6 py-4 text-left font-medium text-gray-500">
                  Status
                </th>
                <th className="px-6 py-4 text-right font-medium text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {/* {applications && applications.length > 0 ? (
                applications.map((app) => (
                  <tr key={app.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      {app.first_name} {app.last_name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{app.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{app.phone}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{new Date(app.created_at).toLocaleDateString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {app.status === "pending" && (
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                          Pending
                        </span>
                      )}
                      {app.status === "reviewing" && (
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                          Reviewing
                        </span>
                      )}
                      {app.status === "approved" && (
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                          Approved
                        </span>
                      )}
                      {app.status === "rejected" && (
                        <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                          Rejected
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <Link href={`/admin/applications/${app.id}`}>
                        <CustomButton variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" /> View
                        </CustomButton>
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                    No applications found
                  </td>
                </tr>
              )} */}
            </tbody>
          </table>
        </div>
      </CustomCard>
    </div>
  );
}
