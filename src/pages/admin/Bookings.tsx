
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Mock booking data
const mockBookings = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 234 567 8901",
    checkIn: "2025-05-15",
    checkOut: "2025-05-18",
    guests: 2,
    status: "confirmed",
    totalAmount: "$450",
    createdAt: "2025-05-07T09:30:00Z",
  },
  {
    id: "2",
    name: "Alice Smith",
    email: "alice@example.com",
    phone: "+1 987 654 3210",
    checkIn: "2025-05-20",
    checkOut: "2025-05-25",
    guests: 3,
    status: "pending",
    totalAmount: "$750",
    createdAt: "2025-05-06T14:45:00Z",
  },
  {
    id: "3",
    name: "Robert Johnson",
    email: "robert@example.com",
    phone: "+1 555 123 4567",
    checkIn: "2025-06-01",
    checkOut: "2025-06-07",
    guests: 2,
    status: "confirmed",
    totalAmount: "$900",
    createdAt: "2025-05-05T11:20:00Z",
  },
  {
    id: "4",
    name: "Emily Williams",
    email: "emily@example.com",
    phone: "+1 444 789 1234",
    checkIn: "2025-06-10",
    checkOut: "2025-06-15",
    guests: 4,
    status: "cancelled",
    totalAmount: "$825",
    createdAt: "2025-05-04T16:10:00Z",
  },
  {
    id: "5",
    name: "Michael Brown",
    email: "michael@example.com",
    phone: "+1 333 456 7890",
    checkIn: "2025-06-20",
    checkOut: "2025-06-22",
    guests: 1,
    status: "confirmed",
    totalAmount: "$300",
    createdAt: "2025-05-03T13:15:00Z",
  },
];

const Bookings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  // Filter bookings based on search term and status filter
  const filteredBookings = mockBookings.filter(booking => {
    const matchesSearch = 
      booking.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = 
      filter === "all" || 
      booking.status === filter;
    
    return matchesSearch && matchesFilter;
  });

  // Function to format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric", 
      month: "short", 
      day: "numeric"
    });
  };

  // Function to get status badge style
  const getStatusStyle = (status: string): string => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800 border-green-300";
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "cancelled":
        return "bg-red-100 text-red-800 border-red-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <CardTitle className="text-xl font-extrabold">Bookings</CardTitle>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input 
                placeholder="Search by name or email..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-64"
              />
              <div className="flex space-x-2">
                <Button
                  variant={filter === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter("all")}
                  className={filter === "all" ? "bg-[#2980b9]" : ""}
                >
                  All
                </Button>
                <Button
                  variant={filter === "confirmed" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter("confirmed")}
                  className={filter === "confirmed" ? "bg-[#2980b9]" : ""}
                >
                  Confirmed
                </Button>
                <Button
                  variant={filter === "pending" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter("pending")}
                  className={filter === "pending" ? "bg-[#2980b9]" : ""}
                >
                  Pending
                </Button>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-medium">Guest</TableHead>
                  <TableHead className="font-medium">Check In/Out</TableHead>
                  <TableHead className="font-medium">Guests</TableHead>
                  <TableHead className="font-medium">Status</TableHead>
                  <TableHead className="font-medium">Total</TableHead>
                  <TableHead className="font-medium">Booked On</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredBookings.length > 0 ? (
                  filteredBookings.map((booking) => (
                    <TableRow key={booking.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{booking.name}</p>
                          <p className="text-sm text-gray-500">{booking.email}</p>
                          <p className="text-xs text-gray-500">{booking.phone}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p>{formatDate(booking.checkIn)}</p>
                          <p className="text-sm text-gray-500">to</p>
                          <p>{formatDate(booking.checkOut)}</p>
                        </div>
                      </TableCell>
                      <TableCell>{booking.guests}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusStyle(booking.status)}`}>
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </span>
                      </TableCell>
                      <TableCell className="font-medium">{booking.totalAmount}</TableCell>
                      <TableCell>{formatDate(booking.createdAt)}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="h-24 text-center">
                      No bookings found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Bookings;
