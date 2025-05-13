import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAdminAuth } from "@/contexts/AdminAuthContext";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Calendar } from "@/components/ui/calendar";
import { Progress } from "@/components/ui/progress";
import { 
  ActivityIcon, 
  DollarSignIcon, 
  BedIcon, 
  ClockIcon,
  UserIcon,
  PackageCheckIcon
} from "lucide-react";

// Mock data
const stats = [
  { id: 1, name: "Total Revenue", value: "$24,230", icon: DollarSignIcon, progress: 65 },
  { id: 2, name: "Occupancy Rate", value: "82%", icon: BedIcon, progress: 82 },
  { id: 3, name: "Avg. Stay", value: "3.2 Days", icon: ClockIcon, progress: 75 },
  { id: 4, name: "New Guests", value: "34", icon: UserIcon, progress: 45 },
];

const bookingData = [
  { month: 'Jan', bookings: 4, revenue: 2400 },
  { month: 'Feb', bookings: 6, revenue: 4200 },
  { month: 'Mar', bookings: 8, revenue: 6000 },
  { month: 'Apr', bookings: 5, revenue: 3800 },
];

const recentBookings = [
  { id: 1, name: "Sarah Johnson", date: "2024-03-15", status: "confirmed", nights: 3 },
  { id: 2, name: "Michael Chen", date: "2024-03-16", status: "pending", nights: 2 },
  { id: 3, name: "Emma Wilson", date: "2024-03-17", status: "confirmed", nights: 4 },
];

export default function Dashboard() {
  const { admin } = useAdminAuth();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">Welcome back, {admin?.name}</h1>
          <p className="text-zinc-600 dark:text-zinc-400">Tara Guest House Management Dashboard</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <Card key={stat.id} className="bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm border-zinc-100 dark:border-zinc-700">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <stat.icon className="h-6 w-6 text-zinc-700 dark:text-zinc-300" />
                <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                  {stat.name}
                </span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                  {stat.value}
                </div>
                <Progress 
                  value={stat.progress} 
                  className="h-2 mt-3 bg-zinc-100 dark:bg-zinc-700 [&>div]:bg-[#2980b9]"
                />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Revenue Chart */}
            <Card className="bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm border-zinc-100 dark:border-zinc-700">
              <CardHeader>
                <CardTitle className="text-zinc-900 dark:text-zinc-100">
                  Monthly Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={bookingData}>
                    <XAxis 
                      dataKey="month" 
                      stroke="#64748b"
                      fontSize={12}
                    />
                    <YAxis 
                      stroke="#64748b"
                      fontSize={12}
                    />
                    <Tooltip 
                      contentStyle={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        border: 'none',
                        borderRadius: '8px',
                        backdropFilter: 'blur(4px)'
                      }}
                    />
                    <Bar 
                      dataKey="revenue" 
                      fill="#2980b9"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Recent Bookings */}
            <Card className="bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm border-zinc-100 dark:border-zinc-700">
              <CardHeader>
                <CardTitle className="text-zinc-900 dark:text-zinc-100">
                  Recent Bookings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentBookings.map((booking) => (
                    <div 
                      key={booking.id}
                      className="flex items-center justify-between p-4 bg-white dark:bg-zinc-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div>
                        <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                          {booking.name}
                        </h3>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                          {new Date(booking.date).toLocaleDateString()} • {booking.nights} nights
                        </p>
                      </div>
                      <span className={`px-2 py-1 text-sm rounded-full ${
                        booking.status === 'confirmed' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                      }`}>
                        {booking.status}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Calendar */}
            <Card className="bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm border-zinc-100 dark:border-zinc-700">
              <CardHeader>
                <CardTitle className="text-zinc-900 dark:text-zinc-100">
                  Booking Calendar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  className="rounded-md border-zinc-200 dark:border-zinc-700"
                  classNames={{
                    day: "hover:bg-[#2980b9]/10",
                    head_cell: "text-zinc-500 dark:text-zinc-400",
                  }}
                />
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm border-zinc-100 dark:border-zinc-700">
              <CardHeader>
                <CardTitle className="text-zinc-900 dark:text-zinc-100">
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                <button className="p-4 bg-[#2980b9]/10 hover:bg-[#2980b9]/20 rounded-lg transition-colors">
                  <PackageCheckIcon className="h-6 w-6 text-[#2980b9] mb-2" />
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    Confirm Bookings
                  </span>
                </button>
                <button className="p-4 bg-purple-100/50 hover:bg-purple-200/50 dark:bg-purple-900/20 dark:hover:bg-purple-900/30 rounded-lg transition-colors">
                  <ActivityIcon className="h-6 w-6 text-purple-600 dark:text-purple-400 mb-2" />
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    View Reports
                  </span>
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}