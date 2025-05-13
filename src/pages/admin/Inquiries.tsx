import { useState, useMemo, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { format } from "date-fns";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Check, X, Clock, Download, SortAsc, SortDesc, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

// Types for inquiry
type InquiryStatus = "pending" | "confirmed" | "cancelled";
type SlipVerificationStatus = "pending" | "verified" | "invalid";

interface Inquiry {
  id: number;
  inquiry_no: string;
  first_name: string;
  last_name: string;
  email: string;
  checkin_date: string;
  checkout_date: string;
  num_guests: number;
  room_type: string;
  special_requests: string;
  slip_path: string;
  transaction_id: string;
  status: InquiryStatus;
  slip_verified: SlipVerificationStatus;
  created_at: string;
}

// Mock data
const mockInquiries: Inquiry[] = [
  {
    id: 1,
    inquiry_no: "GH-20250612-001",
    first_name: "John",
    last_name: "Smith",
    email: "john.smith@example.com",
    checkin_date: "2025-06-12",
    checkout_date: "2025-06-15",
    num_guests: 2,
    room_type: "Double",
    special_requests: "Ground floor room if possible",
    slip_path: "/uploads/payments/slip-001.pdf",
    transaction_id: "TXN123456",
    status: "pending",
    slip_verified: "pending",
    created_at: "2025-05-10T08:30:00Z",
  },
  {
    id: 2,
    inquiry_no: "GH-20250620-002",
    first_name: "Sarah",
    last_name: "Johnson",
    email: "sarah.j@example.com",
    checkin_date: "2025-06-20",
    checkout_date: "2025-06-25",
    num_guests: 3,
    room_type: "Suite",
    special_requests: "Extra towels please",
    slip_path: "/uploads/payments/slip-002.pdf",
    transaction_id: "TXN123457",
    status: "confirmed",
    slip_verified: "verified",
    created_at: "2025-05-11T10:15:00Z",
  },
  {
    id: 3,
    inquiry_no: "GH-20250701-003",
    first_name: "Michael",
    last_name: "Wong",
    email: "michael.w@example.com",
    checkin_date: "2025-07-01",
    checkout_date: "2025-07-05",
    num_guests: 1,
    room_type: "Single",
    special_requests: "",
    slip_path: "/uploads/payments/slip-003.pdf",
    transaction_id: "TXN123458",
    status: "cancelled",
    slip_verified: "invalid",
    created_at: "2025-05-12T09:45:00Z",
  },
  {
    id: 4,
    inquiry_no: "GH-20250710-004",
    first_name: "Emma",
    last_name: "Garcia",
    email: "emma.g@example.com",
    checkin_date: "2025-07-10",
    checkout_date: "2025-07-15",
    num_guests: 4,
    room_type: "Family",
    special_requests: "Require parking space",
    slip_path: "/uploads/payments/slip-004.pdf",
    transaction_id: "TXN123459",
    status: "pending",
    slip_verified: "pending",
    created_at: "2025-05-13T14:20:00Z",
  },
];

export default function Inquiries() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<InquiryStatus | "all">("all");
  const [sortField, setSortField] = useState<keyof Inquiry>("created_at");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 10;

  // Simulate API fetch
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setInquiries(mockInquiries);
      setIsLoading(false);
    }, 1000);
  }, []);

  // Filtered and sorted inquiries
  const filteredInquiries = useMemo(() => {
    let result = [...inquiries];

    // Apply search
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      result = result.filter(
        (inquiry) =>
          inquiry.inquiry_no.toLowerCase().includes(searchLower) ||
          inquiry.first_name.toLowerCase().includes(searchLower) ||
          inquiry.last_name.toLowerCase().includes(searchLower) ||
          inquiry.email.toLowerCase().includes(searchLower)
      );
    }

    // Apply status filter
    if (statusFilter !== "all") {
      result = result.filter((inquiry) => inquiry.status === statusFilter);
    }

    // Apply sorting
    result.sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      if (sortField === "checkin_date" || sortField === "created_at") {
        return sortDirection === "asc"
          ? new Date(aValue).getTime() - new Date(bValue).getTime()
          : new Date(bValue).getTime() - new Date(aValue).getTime();
      }
      return sortDirection === "asc"
        ? String(aValue).localeCompare(String(bValue))
        : String(bValue).localeCompare(String(aValue));
    });

    return result;
  }, [inquiries, searchTerm, statusFilter, sortField, sortDirection]);

  // Pagination
  const totalPages = Math.ceil(filteredInquiries.length / itemsPerPage);
  const paginatedInquiries = filteredInquiries.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle view details
  const handleViewDetails = (inquiry: Inquiry) => {
    setSelectedInquiry(inquiry);
    setIsDialogOpen(true);
  };

  // Handle status change
  const handleStatusChange = (id: number, newStatus: InquiryStatus) => {
    setInquiries(
      inquiries.map((inquiry) =>
        inquiry.id === id ? { ...inquiry, status: newStatus } : inquiry
      )
    );
    setIsDialogOpen(false);
  };

  // Handle slip verification
  const handleSlipVerification = (id: number, status: SlipVerificationStatus) => {
    setInquiries(
      inquiries.map((inquiry) =>
        inquiry.id === id ? { ...inquiry, slip_verified: status } : inquiry
      )
    );
  };

  // Handle sorting
  const handleSort = (field: keyof Inquiry) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  // Export to CSV
  const handleExportCSV = () => {
    const headers = [
      "Inquiry #",
      "Name",
      "Email",
      "Check-in",
      "Check-out",
      "Guests",
      "Room Type",
      "Status",
      "Slip Verified",
      "Transaction ID",
      "Created At",
    ];
    const rows = inquiries.map((inquiry) => [
      inquiry.inquiry_no,
      `${inquiry.first_name} ${inquiry.last_name}`,
      inquiry.email,
      format(new Date(inquiry.checkin_date), "MMM dd, yyyy"),
      format(new Date(inquiry.checkout_date), "MMM dd, yyyy"),
      inquiry.num_guests,
      inquiry.room_type,
      inquiry.status,
      inquiry.slip_verified,
      inquiry.transaction_id,
      format(new Date(inquiry.created_at), "MMM dd, yyyy HH:mm"),
    ]);
    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.join(",")),
    ].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "inquiries.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  // Render status badge
  const renderStatusBadge = (status: InquiryStatus) => {
    const badgeStyles = {
      pending: "bg-yellow-100 text-yellow-800 border-yellow-300",
      confirmed: "bg-green-100 text-green-800 border-green-300",
      cancelled: "bg-red-100 text-red-800 border-red-300",
    };
    const icons = {
      pending: <Clock className="w-3 h-3 mr-1" />,
      confirmed: <Check className="w-3 h-3 mr-1" />,
      cancelled: <X className="w-3 h-3 mr-1" />,
    };
    return (
      <Badge className={cn("border", badgeStyles[status])}>
        {icons[status]}
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  // Render slip verification badge
  const renderSlipBadge = (status: SlipVerificationStatus) => {
    const badgeStyles = {
      pending: "bg-gray-100 text-gray-800 border-gray-300",
      verified: "bg-blue-100 text-blue-800 border-blue-300",
      invalid: "bg-red-100 text-red-800 border-red-300",
    };
    return (
      <Badge className={cn("border", badgeStyles[status])}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  // Email preview template
  const renderEmailPreview = (inquiry: Inquiry) => {
    return `
Dear ${inquiry.first_name} ${inquiry.last_name},

Thank you for your booking request (Inquiry #${inquiry.inquiry_no}) with XYZ Guest House. Below are your booking details:

- Check-in: ${format(new Date(inquiry.checkin_date), "MMMM dd, yyyy")}
- Check-out: ${format(new Date(inquiry.checkout_date), "MMMM dd, yyyy")}
- Guests: ${inquiry.num_guests}
- Room Type: ${inquiry.room_type}
- Special Requests: ${inquiry.special_requests || "None"}

To confirm your booking, please make a bank transfer within 3 days using the details below:

**Bank Details**
- Account Name: XYZ Guest House
- Account Number: 1234567890
- Bank Name: Example Bank
- IFSC Code: EXMP0001234
- Transaction ID: Please include "${inquiry.transaction_id}" in the transfer note

After making the payment, upload your bank slip here: [Link to Upload Portal]

We will verify your payment and confirm your booking within 24 hours.

Best regards,
XYZ Guest House Team
    `;
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Booking Inquiries</h1>
            <p className="text-gray-500 mt-1">Manage guest bookings and validate payments</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-0 w-full sm:w-auto">
            <Input
              placeholder="Search by inquiry #, name, or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-64"
            />
            <Select value={statusFilter} onValueChange={(value) => setStatusFilter(value as InquiryStatus | "all")}>
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={handleExportCSV} className="bg-blue-600 hover:bg-blue-700">
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
          </div>
        </div>

        {isLoading ? (
          <div className="text-center py-10">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-2 text-gray-500">Loading inquiries...</p>
          </div>
        ) : (
          <>
            <div className="rounded-lg border border-gray-200 overflow-hidden">
              <Table>
                <TableCaption>Guest booking inquiries</TableCaption>
                <TableHeader className="bg-gray-50 sticky top-0">
                  <TableRow>
                    <TableHead className="cursor-pointer" onClick={() => handleSort("inquiry_no")}>
                      Inquiry #
                      {sortField === "inquiry_no" && (sortDirection === "asc" ? <SortAsc className="inline w-4 h-4 ml-1" /> : <SortDesc className="inline w-4 h-4 ml-1" />)}
                    </TableHead>
                    <TableHead className="cursor-pointer" onClick={() => handleSort("first_name")}>
                      Name
                      {sortField === "first_name" && (sortDirection === "asc" ? <SortAsc className="inline w-4 h-4 ml-1" /> : <SortDesc className="inline w-4 h-4 ml-1" />)}
                    </TableHead>
                    <TableHead className="cursor-pointer" onClick={() => handleSort("checkin_date")}>
                      Check-in
                      {sortField === "checkin_date" && (sortDirection === "asc" ? <SortAsc className="inline w-4 h-4 ml-1" /> : <SortDesc className="inline w-4 h-4 ml-1" />)}
                    </TableHead>
                    <TableHead>Check-out</TableHead>
                    <TableHead>Guests</TableHead>
                    <TableHead>Room</TableHead>
                    <TableHead className="cursor-pointer" onClick={() => handleSort("status")}>
                      Status
                      {sortField === "status" && (sortDirection === "asc" ? <SortAsc className="inline w-4 h-4 ml-1" /> : <SortDesc className="inline w-4 h-4 ml-1" />)}
                    </TableHead>
                    <TableHead>Slip</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedInquiries.map((inquiry, index) => (
                    <TableRow key={inquiry.id} className={cn("hover:bg-gray-50", index % 2 === 0 ? "bg-white" : "bg-gray-25")}>
                      <TableCell className="font-medium">{inquiry.inquiry_no}</TableCell>
                      <TableCell>{`${inquiry.first_name} ${inquiry.last_name}`}</TableCell>
                      <TableCell>{format(new Date(inquiry.checkin_date), "MMM dd, yyyy")}</TableCell>
                      <TableCell>{format(new Date(inquiry.checkout_date), "MMM dd, yyyy")}</TableCell>
                      <TableCell>{inquiry.num_guests}</TableCell>
                      <TableCell>{inquiry.room_type}</TableCell>
                      <TableCell>{renderStatusBadge(inquiry.status)}</TableCell>
                      <TableCell>{renderSlipBadge(inquiry.slip_verified)}</TableCell>
                      <TableCell>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleViewDetails(inquiry)}
                          className="border-blue-600 text-blue-600 hover:bg-blue-50"
                        >
                          View
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
                  <PaginationPrevious
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    className={cn(currentPage === 1 && "pointer-events-none opacity-50")}
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      onClick={() => setCurrentPage(page)}
                      isActive={currentPage === page}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    className={cn(currentPage === totalPages && "pointer-events-none opacity-50")}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </>
        )}
      </div>

      {/* Detail View Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle>Inquiry #{selectedInquiry?.inquiry_no}</DialogTitle>
            <DialogDescription>View and manage booking details</DialogDescription>
          </DialogHeader>

          {selectedInquiry && (
            <Tabs defaultValue="details" className="mt-4">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="payment">Payment</TabsTrigger>
                <TabsTrigger value="email">Email Preview</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
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
                      <p className="text-sm text-gray-500">Room Type</p>
                      <p className="font-medium">{selectedInquiry.room_type}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
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
                      <p className="text-sm text-gray-500">Status</p>
                      {renderStatusBadge(selectedInquiry.status)}
                    </div>
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <p className="text-sm text-gray-500">Special Requests</p>
                    <p className="font-medium">{selectedInquiry.special_requests || "None"}</p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="payment" className="mt-4">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Transaction ID</p>
                    <p className="font-medium">{selectedInquiry.transaction_id}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Bank Slip</p>
                    <Button variant="outline" size="sm" asChild className="mt-1">
                      <a href={selectedInquiry.slip_path} target="_blank" rel="noopener noreferrer">
                        View Bank Slip
                      </a>
                    </Button>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Slip Verification</p>
                    {renderSlipBadge(selectedInquiry.slip_verified)}
                  </div>
                  {selectedInquiry.slip_verified === "pending" && (
                    <div className="flex gap-2">
                      <Button
                        className="bg-blue-600 hover:bg-blue-700"
                        onClick={() => handleSlipVerification(selectedInquiry.id, "verified")}
                      >
                        Mark as Verified
                      </Button>
                      <Button
                        variant="destructive"
                        onClick={() => handleSlipVerification(selectedInquiry.id, "invalid")}
                      >
                        Mark as Invalid
                      </Button>
                    </div>
                  )}
                </div>
              </TabsContent>
              <TabsContent value="email" className="mt-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <pre className="text-sm whitespace-pre-wrap">{renderEmailPreview(selectedInquiry)}</pre>
                </div>
              </TabsContent>
            </Tabs>
          )}

          {selectedInquiry?.status === "pending" && (
            <div className="flex justify-end gap-2 mt-6">
              <Button
                variant="destructive"
                onClick={() => handleStatusChange(selectedInquiry.id, "cancelled")}
              >
                <X className="w-4 h-4 mr-1" />
                Cancel Booking
              </Button>
              <Button
                className="bg-green-600 hover:bg-green-700"
                onClick={() => handleStatusChange(selectedInquiry.id, "confirmed")}
                disabled={selectedInquiry.slip_verified !== "verified"}
              >
                <Check className="w-4 h-4 mr-1" />
                Confirm Booking
              </Button>
            </div>
          )}

          <div className="flex justify-end mt-4">
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}