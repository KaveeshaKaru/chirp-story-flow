
import { useEffect, useState } from "react";
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
import { 
  LayoutDashboard, 
  ClipboardList, 
  Settings, 
  Users, 
  LogOut, 
  MoreVertical,
  Bell,
  MessageCircle,
  Search,
  Menu,
  Grid,
  Calendar,
  Flag,
  ShieldCheck,
  Heart
} from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const AdminLayout = () => {
  const { admin, isLoading, logout } = useAdminAuth();
  const navigate = useNavigate();
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');
  const [isCollapsed, setIsCollapsed] = useState(false);

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

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <SidebarProvider>
      <div className={cn(
        "min-h-screen flex w-full", 
        currentTheme === 'dark' ? 'bg-[#0a0f2c]' : 'bg-gray-100'
      )}>
        <div 
          className={cn(
            "fixed top-0 left-0 h-full z-40 transition-all duration-300 ease-in-out",
            isCollapsed ? "w-[70px]" : "w-[80px] md:w-[280px]",
            currentTheme === 'dark' ? 'bg-[#0a1170]' : 'bg-white'
          )}
        >
          <div className="h-full flex flex-col rounded-r-3xl shadow-lg overflow-hidden">
            {/* Top section with colored dots and hamburger */}
            <div className={cn(
              "flex items-center justify-center py-6",
              isCollapsed ? "flex-col" : "px-4"
            )}>
              {!isCollapsed && (
                <div className="flex space-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              )}
              <button 
                onClick={toggleSidebar}
                className={cn(
                  "flex items-center justify-center p-2 rounded-full transition-colors",
                  currentTheme === 'dark' ? 'hover:bg-blue-800 text-white' : 'hover:bg-gray-100 text-gray-600'
                )}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Main menu */}
            <div className={cn(
              "flex-1 overflow-y-auto px-3",
              isCollapsed ? "items-center" : ""
            )}>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    isActive={window.location.pathname === "/admin/dashboard"} 
                    tooltip={isCollapsed ? "Dashboard" : ""}
                    onClick={() => navigate("/admin/dashboard")}
                    className={cn(
                      "w-full flex items-center justify-center md:justify-start gap-4 p-3 rounded-xl transition-all",
                      window.location.pathname === "/admin/dashboard" 
                        ? currentTheme === 'dark' ? "bg-blue-800 text-white" : "bg-blue-50 text-blue-600" 
                        : currentTheme === 'dark' ? "hover:bg-blue-900 text-white" : "hover:bg-gray-100 text-gray-600"
                    )}
                  >
                    <Search className={cn(
                      "w-5 h-5", 
                      window.location.pathname === "/admin/dashboard" ? "text-blue-500" : ""
                    )} />
                    {!isCollapsed && <span>Search</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton 
                    tooltip={isCollapsed ? "Grid" : ""}
                    className={cn(
                      "w-full flex items-center justify-center md:justify-start gap-4 p-3 rounded-xl transition-all",
                      currentTheme === 'dark' ? "hover:bg-blue-900 text-white" : "hover:bg-gray-100 text-gray-600"
                    )}
                  >
                    <Grid className="w-5 h-5" />
                    {!isCollapsed && <span>Grid</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton 
                    isActive={window.location.pathname === "/admin/bookings"} 
                    tooltip={isCollapsed ? "Calendar" : ""}
                    onClick={() => navigate("/admin/bookings")}
                    className={cn(
                      "w-full flex items-center justify-center md:justify-start gap-4 p-3 rounded-xl transition-all",
                      window.location.pathname === "/admin/bookings" 
                        ? currentTheme === 'dark' ? "bg-blue-800 text-white" : "bg-blue-50 text-blue-600" 
                        : currentTheme === 'dark' ? "hover:bg-blue-900 text-white" : "hover:bg-gray-100 text-gray-600"
                    )}
                  >
                    <Calendar className={cn(
                      "w-5 h-5", 
                      window.location.pathname === "/admin/bookings" ? "text-blue-500" : ""
                    )} />
                    {!isCollapsed && <span>Calendar</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton 
                    isActive={window.location.pathname === "/admin/inquiries"} 
                    tooltip={isCollapsed ? "Inquiries" : ""}
                    onClick={() => navigate("/admin/inquiries")}
                    className={cn(
                      "w-full flex items-center justify-center md:justify-start gap-4 p-3 rounded-xl transition-all",
                      window.location.pathname === "/admin/inquiries" 
                        ? currentTheme === 'dark' ? "bg-blue-800 text-white" : "bg-blue-50 text-blue-600" 
                        : currentTheme === 'dark' ? "hover:bg-blue-900 text-white" : "hover:bg-gray-100 text-gray-600"
                    )}
                  >
                    <Flag className={cn(
                      "w-5 h-5", 
                      window.location.pathname === "/admin/inquiries" ? "text-blue-500" : ""
                    )} />
                    {!isCollapsed && <span>Inquiries</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton 
                    tooltip={isCollapsed ? "Security" : ""}
                    className={cn(
                      "w-full flex items-center justify-center md:justify-start gap-4 p-3 rounded-xl transition-all",
                      currentTheme === 'dark' ? "hover:bg-blue-900 text-white" : "hover:bg-gray-100 text-gray-600"
                    )}
                  >
                    <ShieldCheck className="w-5 h-5" />
                    {!isCollapsed && <span>Security</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton 
                    tooltip={isCollapsed ? "Favorites" : ""}
                    className={cn(
                      "w-full flex items-center justify-center md:justify-start gap-4 p-3 rounded-xl transition-all",
                      currentTheme === 'dark' ? "hover:bg-blue-900 text-white" : "hover:bg-gray-100 text-gray-600"
                    )}
                  >
                    <Heart className="w-5 h-5" />
                    {!isCollapsed && <span>Favorites</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton 
                    isActive={window.location.pathname === "/admin/settings"} 
                    tooltip={isCollapsed ? "Settings" : ""}
                    onClick={() => navigate("/admin/settings")}
                    className={cn(
                      "w-full flex items-center justify-center md:justify-start gap-4 p-3 rounded-xl transition-all",
                      window.location.pathname === "/admin/settings" 
                        ? currentTheme === 'dark' ? "bg-blue-800 text-white" : "bg-blue-50 text-blue-600" 
                        : currentTheme === 'dark' ? "hover:bg-blue-900 text-white" : "hover:bg-gray-100 text-gray-600"
                    )}
                  >
                    <Settings className={cn(
                      "w-5 h-5", 
                      window.location.pathname === "/admin/settings" ? "text-blue-500" : ""
                    )} />
                    {!isCollapsed && <span>Settings</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </div>

            {/* User profile at bottom */}
            <div className={cn(
              "mt-auto py-4 px-3",
              currentTheme === 'dark' ? 'text-white' : 'text-gray-800'
            )}>
              <div className={cn(
                "flex items-center", 
                isCollapsed ? "justify-center" : "justify-start gap-3"
              )}>
                <Avatar className="h-10 w-10 border-2 border-blue-200 bg-blue-100">
                  <span className="text-blue-600 font-bold">
                    {admin?.name?.charAt(0) || "A"}
                  </span>
                </Avatar>
                {!isCollapsed && (
                  <div className="flex-1">
                    <div className="font-medium text-sm">{admin?.name}</div>
                    <div className={cn(
                      "text-xs",
                      currentTheme === 'dark' ? 'text-blue-300' : 'text-gray-500'
                    )}>
                      {admin?.role}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className={cn(
          "flex-1 transition-all duration-300 ease-in-out",
          isCollapsed ? "pl-[70px]" : "pl-[80px] md:pl-[280px]"
        )}>
          <div className={cn(
            "p-4 md:p-6 min-h-screen",
            currentTheme === 'dark' ? 'bg-[#0a0f2c] text-white' : 'bg-gray-100 text-gray-800'
          )}>
            <div className="flex items-center justify-between mb-6">
              <div className="space-y-1">
                <h1 className={cn(
                  "text-2xl font-extrabold",
                  currentTheme === 'dark' ? 'text-white' : 'text-gray-800'
                )}>
                  Admin Dashboard
                </h1>
                <p className={cn(
                  "text-sm",
                  currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-500'
                )}>
                  Welcome back, {admin?.name}
                </p>
              </div>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
