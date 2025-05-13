
import { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink,
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import { Check, X, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";

// Mock data for inquiries
const mockInquiries = [
  {
    id: 1,
    inquiry_no: "INQ-2025-001",
    first_name: "John",
    last_name: "Smith",
    email: "john.smith@example.com",
    checkin_date: "2025-06-12",
    checkout_date: "2025-06-15",
    num_guests: 2,
    special_requests: "Ground floor room if possible",
    slip_path: "/uploads/payments/slip-001.jpg",
    status: "pending",
    created_at: "2025-05-10T08:30:00Z"
  },
  {
    id: 2,
    inquiry_no: "INQ-2025-002",
    first_name: "Sarah",
    last_name: "Johnson",
    email: "sarah.j@example.com",
    checkin_date: "2025-06-20",
    checkout_date: "2025-06-25",
    num_guests: 3,
    special_requests: "Extra towels please",
    slip_path: "/uploads/payments/slip-002.jpg",
    status: "confirmed",
    created_at: "2025-05-11T10:15:00Z"
  },
  {
    id: 3,
    inquiry_no: "INQ-2025-003",
    first_name: "Michael",
    last_name: "Wong",
    email: "michael.w@example.com",
    checkin_date: "2025-07-01",
    checkout_date: "2025-07-05",
    num_guests: 1,
    special_requests: "",
    slip_path: "/uploads/payments/slip-003.jpg",
    status: "cancelled",
    created_at: "2025-05-12T09:45:00Z"
  },
  {
    id: 4,
    inquiry_no: "INQ-2025-004",
    first_name: "Emma",
    last_name: "Garcia",
    email: "emma.g@example.com",
    checkin_date: "2025-07-10",
    checkout_date: "2025-07-15",
    num_guests: 4,
    special_requests: "Require parking space",
    slip_path: "/uploads/payments/slip-004.jpg",
    status: "pending",
    created_at: "2025-05-13T14:20:00Z"
  },
];

// Types for inquiry
type InquiryStatus = "pending" | "confirmed" | "cancelled";

interface Inquiry {
  id: number;
  inquiry_no: string;
  first_name: string;
  last_name: string;
  email: string;
  checkin_date: string;
  checkout_date: string;
  num_guests: number;
  special_requests: string;
  slip_path: string;
  status: InquiryStatus;
  created_at: string;
}

export default function Inquiries() {
  const [inquiries, setInquiries] = useState<Inquiry[]>(mockInquiries);
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredInquiries = inquiries.filter(inquiry => {
    const searchLower = searchTerm.toLowerCase();
    return (
      inquiry.inquiry_no.toLowerCase().includes(searchLower) ||
      inquiry.first_name.toLowerCase().includes(searchLower) ||
      inquiry.last_name.toLowerCase().includes(searchLower) ||
      inquiry.email.toLowerCase().includes(searchLower)
    );
  });

  // Handle view details
  const handleViewDetails = (inquiry: Inquiry) => {
    setSelectedInquiry(inquiry);
    setIsDialogOpen(true);
  };

  // Handle status change
  const handleStatusChange = (id: number, newStatus: InquiryStatus) => {
    setInquiries(inquiries.map(inquiry => {
      if (inquiry.id === id) {
        return { ...inquiry, status: newStatus };
      }
      return inquiry;
    }));
    setIsDialogOpen(false);
  };

  // Render status badge
  const renderStatusBadge = (status: InquiryStatus) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-yellow-500 hover:bg-yellow-600"><Clock className="w-3 h-3 mr-1" /> Pending</Badge>;
      case "confirmed":
        return <Badge className="bg-green-500 hover:bg-green-600"><Check className="w-3 h-3 mr-1" /> Confirmed</Badge>;
      case "cancelled":
        return <Badge className="bg-red-500 hover:bg-red-600"><X className="w-3 h-3 mr-1" /> Cancelled</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">Booking Inquiries</h1>
          <p className="text-gray-600">Manage all guest booking inquiries</p>
        </div>
        <div className="w-full md:w-64 mt-4 md:mt-0">
          <Input
            placeholder="Search inquiries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <Table>
          <TableCaption>A list of all booking inquiries.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Inquiry #</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Check-in</TableHead>
              <TableHead>Check-out</TableHead>
              <TableHead>Guests</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredInquiries.map((inquiry) => (
              <TableRow key={inquiry.id}>
                <TableCell className="font-medium">{inquiry.inquiry_no}</TableCell>
                <TableCell>{`${inquiry.first_name} ${inquiry.last_name}`}</TableCell>
                <TableCell>{format(new Date(inquiry.checkin_date), "MMM dd, yyyy")}</TableCell>
                <TableCell>{format(new Date(inquiry.checkout_date), "MMM dd, yyyy")}</TableCell>
                <TableCell>{inquiry.num_guests}</TableCell>
                <TableCell>{renderStatusBadge(inquiry.status)}</TableCell>
                <TableCell>{format(new Date(inquiry.created_at), "MMM dd, yyyy")}</TableCell>
                <TableCell className="text-right">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleViewDetails(inquiry)}
                  >
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Pagination className="mt-6">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      {/* Detail View Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Inquiry Details - {selectedInquiry?.inquiry_no}</DialogTitle>
            <DialogDescription>
              View and manage inquiry details
            </DialogDescription>
          </DialogHeader>

          {selectedInquiry && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
              <div className="space-y-2">
                <div>
                  <p className="text-sm text-gray-500">Guest Name</p>
                  <p className="font-medium">{`${selectedInquiry.first_name} ${selectedInquiry.last_name}`}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{selectedInquiry.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Number of Guests</p>
                  <p className="font-medium">{selectedInquiry.num_guests}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <p>{renderStatusBadge(selectedInquiry.status)}</p>
                </div>
              </div>

              <div className="space-y-2">
                <div>
                  <p className="text-sm text-gray-500">Check-in</p>
                  <p className="font-medium">{format(new Date(selectedInquiry.checkin_date), "MMMM dd, yyyy")}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Check-out</p>
                  <p className="font-medium">{format(new Date(selectedInquiry.checkout_date), "MMMM dd, yyyy")}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Created At</p>
                  <p className="font-medium">{format(new Date(selectedInquiry.created_at), "MMMM dd, yyyy HH:mm")}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Payment Slip</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href={selectedInquiry.slip_path} target="_blank" rel="noopener noreferrer">
                      View Payment Slip
                    </a>
                  </Button>
                </div>
              </div>

              <div className="col-span-1 md:col-span-2">
                <p className="text-sm text-gray-500">Special Requests</p>
                <p className="font-medium">
                  {selectedInquiry.special_requests || "No special requests"}
                </p>
              </div>

              {selectedInquiry.status === "pending" && (
                <div className="col-span-1 md:col-span-2 flex justify-end gap-2 mt-4">
                  <Button 
                    variant="destructive" 
                    onClick={() => handleStatusChange(selectedInquiry.id, "cancelled")}
                  >
                    <X className="w-4 h-4 mr-1" />
                    Cancel
                  </Button>
                  <Button 
                    className="bg-green-600 hover:bg-green-700" 
                    onClick={() => handleStatusChange(selectedInquiry.id, "confirmed")}
                  >
                    <Check className="w-4 h-4 mr-1" />
                    Confirm
                  </Button>
                </div>
              )}
            </div>
          )}
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
