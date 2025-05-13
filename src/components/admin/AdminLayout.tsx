
import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useAdminAuth } from "@/contexts/AdminAuthContext";
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent, 
  SidebarHeader, 
  SidebarTrigger, 
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, ClipboardList, Settings, Users, LogOut } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";

const AdminLayout = () => {
  const { admin, isLoading, logout } = useAdminAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !admin) {
      navigate("/admin/login");
    }
  }, [admin, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p>Loading...</p>
      </div>
    );
  }

  if (!admin) {
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-100">
        <Sidebar>
          <SidebarHeader className="flex items-center justify-center p-4 bg-gradient-to-r from-[#2980b9] to-[#3498db] text-white">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white p-1 shadow-lg overflow-hidden flex items-center justify-center">
                <img 
                  src="/TaraVerticle.png" 
                  alt="TARA Logo" 
                  className="w-8 h-8 object-contain" 
                />
              </div>
              <span className="font-extrabold text-xl text-white tracking-wider">TARA</span>
            </div>
          </SidebarHeader>
          <SidebarContent className="bg-gradient-to-b from-white to-gray-50 p-2">
            <div className="mb-6 mt-2">
              <div className="text-xs text-gray-500 uppercase tracking-wider px-4 mb-2">Main</div>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    isActive={window.location.pathname === "/admin/dashboard"} 
                    tooltip="Dashboard"
                    onClick={() => navigate("/admin/dashboard")}
                    className={`transition-all duration-200 ${window.location.pathname === "/admin/dashboard" ? "bg-blue-100 text-[#2980b9]" : "hover:bg-blue-50"}`}
                  >
                    <LayoutDashboard className="w-4 h-4" />
                    <span>Dashboard</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    isActive={window.location.pathname === "/admin/inquiries"} 
                    tooltip="Inquiries"
                    onClick={() => navigate("/admin/inquiries")}
                    className={`transition-all duration-200 ${window.location.pathname === "/admin/inquiries" ? "bg-blue-100 text-[#2980b9]" : "hover:bg-blue-50"}`}
                  >
                    <ClipboardList className="w-4 h-4" />
                    <span>Inquiries</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    isActive={window.location.pathname === "/admin/bookings"} 
                    tooltip="Bookings"
                    onClick={() => navigate("/admin/bookings")}
                    className={`transition-all duration-200 ${window.location.pathname === "/admin/bookings" ? "bg-blue-100 text-[#2980b9]" : "hover:bg-blue-50"}`}
                  >
                    <Users className="w-4 h-4" />
                    <span>Bookings</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </div>
            
            <div className="mb-2">
              <div className="text-xs text-gray-500 uppercase tracking-wider px-4 mb-2">System</div>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    isActive={window.location.pathname === "/admin/settings"} 
                    tooltip="Settings"
                    onClick={() => navigate("/admin/settings")}
                    className={`transition-all duration-200 ${window.location.pathname === "/admin/settings" ? "bg-blue-100 text-[#2980b9]" : "hover:bg-blue-50"}`}
                  >
                    <Settings className="w-4 h-4" />
                    <span>Settings</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </div>
          </SidebarContent>
          <SidebarFooter className="border-t bg-white">
            <div className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <Avatar className="h-10 w-10 bg-blue-100 border-2 border-blue-300">
                  <span className="text-[#2980b9] font-bold">
                    {admin?.name?.charAt(0) || "A"}
                  </span>
                </Avatar>
                <div>
                  <div className="font-medium text-sm">{admin?.name}</div>
                  <div className="text-xs text-gray-500">{admin?.role}</div>
                </div>
              </div>
              <Button 
                variant="outline" 
                className="w-full flex items-center gap-2 mt-2 border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <div className="p-4 md:p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="space-y-1">
                <h1 className="text-2xl font-extrabold text-gray-800">Admin Dashboard</h1>
                <p className="text-sm text-gray-500">Welcome back, {admin?.name}</p>
              </div>
              <div className="flex items-center gap-2">
                <SidebarTrigger className="md:hidden" />
              </div>
            </div>
            <Outlet />
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
