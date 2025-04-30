export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <CustomCard className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Total Applications</p>
              <h3 className="text-3xl font-bold">{totalApplications}</h3>
            </div>
            <div className="bg-primary/10 p-3 rounded-full">
              <FileText className="h-6 w-6 text-primary" />
            </div>
          </div>
        </CustomCard>

        <CustomCard className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Pending Applications</p>
              <h3 className="text-3xl font-bold">{pendingApplications}</h3>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </CustomCard>

        <CustomCard className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">
                Approved Applications
              </p>
              <h3 className="text-3xl font-bold">{approvedApplications}</h3>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </CustomCard>

        <CustomCard className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Total Users</p>
              <h3 className="text-3xl font-bold">{totalUsers}</h3>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </CustomCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <CustomCard>
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">Recent Applications</h2>
          </div>
          <div className="p-6">
            {recentApplications && recentApplications.length > 0 ? (
              <div className="divide-y">
                {recentApplications.map((app) => (
                  <div
                    key={app.id}
                    className="py-4 flex items-center justify-between"
                  >
                    <div>
                      <p className="font-medium">
                        {app.first_name} {app.last_name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {new Date(app.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      {app.status === "pending" && (
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                          Pending
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
                      {app.status === "reviewing" && (
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                          Reviewing
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-4">
                No applications found
              </p>
            )}
          </div>
        </CustomCard>

        <CustomCard>
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">User Statistics</h2>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Customers</span>
                  <span className="font-medium">{customerUsers}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-primary h-2.5 rounded-full"
                    style={{ width: `${(customerUsers / totalUsers) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Admins</span>
                  <span className="font-medium">{adminUsers}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-secondary h-2.5 rounded-full"
                    style={{ width: `${(adminUsers / totalUsers) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="font-medium mb-3">
                  Application Status Breakdown
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">Pending</span>
                      <span className="text-sm font-medium">
                        {pendingApplications}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div
                        className="bg-yellow-500 h-1.5 rounded-full"
                        style={{
                          width: `${
                            (pendingApplications / totalApplications) * 100
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">Approved</span>
                      <span className="text-sm font-medium">
                        {approvedApplications}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div
                        className="bg-green-500 h-1.5 rounded-full"
                        style={{
                          width: `${
                            (approvedApplications / totalApplications) * 100
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">Rejected</span>
                      <span className="text-sm font-medium">
                        {rejectedApplications}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div
                        className="bg-red-500 h-1.5 rounded-full"
                        style={{
                          width: `${
                            (rejectedApplications / totalApplications) * 100
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CustomCard>
      </div>
    </div>
  );
}
