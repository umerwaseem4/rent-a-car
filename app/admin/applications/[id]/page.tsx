"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CustomCard } from "@/components/custom-card";
import { CustomButton } from "@/components/custom-button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import {
  ArrowLeft,
  CheckCircle,
  XCircle,
  Clock,
  AlertCircle,
} from "lucide-react";

// Define the Application type to fix TypeScript error
interface Application {
  id: string;
  status: string;
  admin_notes?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  employment_status?: string;
  monthly_income?: number;
  car_make?: string;
  car_model?: string;
  car_year?: string;
  car_price?: number;
  down_payment?: number;
  created_at: string;
}

export default function ApplicationDetail({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const [application, setApplication] = useState<Application | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("");
  const [adminNotes, setAdminNotes] = useState<string>("");
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        // Fetch application data from API endpoint
        const response = await fetch(`/api/applications/${params.id}`);
        const data = await response.json();

        setApplication(data);
        setStatus(data.status);
        setAdminNotes(data.admin_notes || "");
      } catch (err: any) {
        console.error("Error fetching application:", err);
        setError(err.message || "Failed to load application");
      } finally {
        setLoading(false);
      }
    };

    fetchApplication();
  }, [params.id]);

  const handleUpdateStatus = async () => {
    setUpdating(true);
    setError(null);

    try {
      // Update local state
      if (application) {
        setApplication({
          ...application,
          status,
          admin_notes: adminNotes,
        });
      }

      alert("Application updated successfully");
    } catch (err: any) {
      console.error("Error updating application:", err);
      setError(err.message || "Failed to update application");
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !application) {
    return (
      <div className="text-center py-12">
        <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Error Loading Application</h2>
        <p className="text-gray-600 mb-6">{error || "Application not found"}</p>
        <CustomButton onClick={() => router.back()} variant="outline">
          <ArrowLeft className="h-4 w-4 mr-2" /> Go Back
        </CustomButton>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <CustomButton
            onClick={() => router.back()}
            variant="outline"
            size="sm"
          >
            <ArrowLeft className="h-4 w-4 mr-2" /> Back
          </CustomButton>
          <h1 className="text-3xl font-bold">Application Details</h1>
        </div>

        <div>
          {application.status === "pending" && (
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
              Pending
            </span>
          )}
          {application.status === "reviewing" && (
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              Reviewing
            </span>
          )}
          {application.status === "approved" && (
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              Approved
            </span>
          )}
          {application.status === "rejected" && (
            <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
              Rejected
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <CustomCard>
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">Personal Information</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Full Name</p>
                  <p className="font-medium">
                    {application.first_name} {application.last_name}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <p className="font-medium">{application.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Phone</p>
                  <p className="font-medium">{application.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Address</p>
                  <p className="font-medium">
                    {application.address}, {application.city},{" "}
                    {application.state} {application.zip}
                  </p>
                </div>
              </div>
            </div>
          </CustomCard>

          <CustomCard>
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">Financial Information</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    Employment Status
                  </p>
                  <p className="font-medium">
                    {application.employment_status || "Not specified"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Monthly Income</p>
                  <p className="font-medium">
                    ${application.monthly_income || "0"}
                  </p>
                </div>
              </div>
            </div>
          </CustomCard>

          {(application.car_make || application.car_model) && (
            <CustomCard>
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold">Vehicle Details</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Make & Model</p>
                    <p className="font-medium">
                      {application.car_make} {application.car_model}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Year</p>
                    <p className="font-medium">
                      {application.car_year || "Not specified"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Price</p>
                    <p className="font-medium">
                      ${application.car_price || "0"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Down Payment</p>
                    <p className="font-medium">
                      ${application.down_payment || "0"}
                    </p>
                  </div>
                </div>
              </div>
            </CustomCard>
          )}
        </div>

        <div className="space-y-8">
          <CustomCard>
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">Application Status</h2>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="status" className="mb-2 block">
                    Update Status
                  </Label>
                  <Select value={status} onValueChange={setStatus}>
                    <SelectTrigger id="status">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-yellow-500" />
                          <span>Pending</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="reviewing">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-blue-500" />
                          <span>Reviewing</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="approved">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Approved</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="rejected">
                        <div className="flex items-center gap-2">
                          <XCircle className="h-4 w-4 text-red-500" />
                          <span>Rejected</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="notes" className="mb-2 block">
                    Admin Notes
                  </Label>
                  <Textarea
                    id="notes"
                    value={adminNotes}
                    onChange={(e) => setAdminNotes(e.target.value)}
                    placeholder="Add notes about this application"
                    className="min-h-[150px]"
                  />
                </div>

                <CustomButton
                  onClick={handleUpdateStatus}
                  className="w-full"
                  disabled={updating}
                >
                  {updating ? "Updating..." : "Update Application"}
                </CustomButton>
              </div>
            </div>
          </CustomCard>

          <CustomCard>
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">Application Info</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Application ID</p>
                  <p className="font-medium text-sm">{application.id}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Submission Date</p>
                  <p className="font-medium">
                    {new Date(application.created_at).toLocaleDateString()} at{" "}
                    {new Date(application.created_at).toLocaleTimeString()}
                  </p>
                </div>
              </div>
            </div>
          </CustomCard>
        </div>
      </div>
    </div>
  );
}
