
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAdminAuth } from "@/contexts/AdminAuthContext";

// Mock data for the dashboard
const stats = [
  { id: 1, name: "Total Bookings", value: "24" },
  { id: 2, name: "This Month", value: "8" },
  { id: 3, name: "Pending", value: "3" },
  { id: 4, name: "Completed", value: "21" },
];

const Dashboard = () => {
  const { admin } = useAdminAuth();

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-lg text-gray-500">Welcome back, {admin?.name}</h2>
        <p className="text-sm text-gray-500">Here's an overview of Tara Guest House bookings</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.id}>
            <CardHeader className="pb-2">
              <CardDescription>{stat.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-3xl font-extrabold text-[#2980b9]">{stat.value}</CardTitle>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-xl font-extrabold mt-10 mb-6">Recent Activity</h2>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-bold">Recent Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex justify-between items-center border-b pb-2">
                  <div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-sm text-gray-500">Booked 2 nights</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{`May ${i + 10}, 2025`}</p>
                    <p className="text-xs text-green-600">Confirmed</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-bold">Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-3 border-b pb-2">
                  <div className="w-2 h-2 mt-2 rounded-full bg-blue-500"></div>
                  <div>
                    <p className="font-medium">{i === 1 ? "New booking request" : i === 2 ? "Payment received" : "New message"}</p>
                    <p className="text-sm text-gray-500">{`${i} hour${i > 1 ? "s" : ""} ago`}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
