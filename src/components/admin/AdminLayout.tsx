
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
  MessageCircle
} from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const AdminLayout = () => {
  const { admin, isLoading, logout } = useAdminAuth();
  const navigate = useNavigate();
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

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

  return (
    <SidebarProvider>
      <div className={cn(
        "min-h-screen flex w-full", 
        currentTheme === 'dark' ? 'bg-[#0a0f2c]' : 'bg-gray-100'
      )}>
        <Sidebar 
          className={cn(
            "shadow-lg border-r border-transparent", 
            currentTheme === 'dark' ? 'bg-[#0a1170]' : 'bg-white'
          )}
        >
          <SidebarHeader 
            className={cn(
              "flex flex-col items-center justify-center p-4",
              currentTheme === 'dark' ? 'bg-[#0a1170] text-white' : 'bg-white text-gray-800'
            )}
          >
            <div className="flex justify-center w-full mb-4">
              <img 
                src="/TaraVerticle.png" 
                alt="Logo" 
                className="h-8 w-auto object-contain" 
              />
            </div>

            <div className="flex gap-2 w-full">
              
            </div>
          </SidebarHeader>
          
          <SidebarContent 
            className={cn(
              "p-3 overflow-y-auto",
              currentTheme === 'dark' ? 'bg-[#0a1170] text-white' : 'bg-white text-gray-800'
            )}
          >
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={window.location.pathname === "/admin/dashboard"} 
                  tooltip="Dashboard"
                  onClick={() => navigate("/admin/dashboard")}
                  className={cn(
                    "transition-all duration-200 rounded-xl", 
                    window.location.pathname === "/admin/dashboard" 
                      ? currentTheme === 'dark' ? "bg-blue-800 text-white" : "bg-blue-50 text-blue-600" 
                      : currentTheme === 'dark' ? "hover:bg-blue-900" : "hover:bg-gray-50"
                  )}
                >
                  <LayoutDashboard className={cn("w-5 h-5", window.location.pathname === "/admin/dashboard" ? "text-blue-500" : "")} />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={window.location.pathname === "/admin/inquiries"} 
                  tooltip="Inquiries"
                  onClick={() => navigate("/admin/inquiries")}
                  className={cn(
                    "transition-all duration-200 rounded-xl", 
                    window.location.pathname === "/admin/inquiries" 
                      ? currentTheme === 'dark' ? "bg-blue-800 text-white" : "bg-blue-50 text-blue-600" 
                      : currentTheme === 'dark' ? "hover:bg-blue-900" : "hover:bg-gray-50"
                  )}
                >
                  <ClipboardList className={cn("w-5 h-5", window.location.pathname === "/admin/inquiries" ? "text-blue-500" : "")} />
                  <span>Inquiries</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={window.location.pathname === "/admin/bookings"} 
                  tooltip="Bookings"
                  onClick={() => navigate("/admin/bookings")}
                  className={cn(
                    "transition-all duration-200 rounded-xl", 
                    window.location.pathname === "/admin/bookings" 
                      ? currentTheme === 'dark' ? "bg-blue-800 text-white" : "bg-blue-50 text-blue-600" 
                      : currentTheme === 'dark' ? "hover:bg-blue-900" : "hover:bg-gray-50"
                  )}
                >
                  <Users className={cn("w-5 h-5", window.location.pathname === "/admin/bookings" ? "text-blue-500" : "")} />
                  <span>Bookings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <div className="my-6 px-3">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                  Account
                </div>
              </div>

              <SidebarMenuItem>
                <SidebarMenuButton 
                  tooltip="Notifications"
                  className={cn(
                    "transition-all duration-200 rounded-xl relative", 
                    currentTheme === 'dark' ? "hover:bg-blue-900" : "hover:bg-gray-50"
                  )}
                >
                  <Bell className="w-5 h-5" />
                  <span>Notifications</span>
                  <span className="absolute right-3 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-xs font-bold text-white">
                    2
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton 
                  tooltip="Messages"
                  className={cn(
                    "transition-all duration-200 rounded-xl relative", 
                    currentTheme === 'dark' ? "hover:bg-blue-900" : "hover:bg-gray-50"
                  )}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Messages</span>
                  <span className="absolute right-3 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-500 text-xs font-bold text-white">
                    3
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={window.location.pathname === "/admin/settings"} 
                  tooltip="Settings"
                  onClick={() => navigate("/admin/settings")}
                  className={cn(
                    "transition-all duration-200 rounded-xl", 
                    window.location.pathname === "/admin/settings" 
                      ? currentTheme === 'dark' ? "bg-blue-800 text-white" : "bg-blue-50 text-blue-600" 
                      : currentTheme === 'dark' ? "hover:bg-blue-900" : "hover:bg-gray-50"
                  )}
                >
                  <Settings className={cn("w-5 h-5", window.location.pathname === "/admin/settings" ? "text-blue-500" : "")} />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          
          <SidebarFooter className={cn(
            "border-t p-3",
            currentTheme === 'dark' ? 'bg-[#0a1170] text-white border-blue-900' : 'bg-white text-gray-800 border-gray-100'
          )}>
            <div className="p-2">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Avatar className={cn(
                    "h-10 w-10 border-2",
                    currentTheme === 'dark' ? 'bg-blue-900 border-blue-700' : 'bg-blue-100 border-blue-200'
                  )}>
                    <span className={cn(
                      "font-bold",
                      currentTheme === 'dark' ? 'text-white' : 'text-blue-600'
                    )}>
                      {admin?.name?.charAt(0) || "A"}
                    </span>
                  </Avatar>
                  <div>
                    <div className="font-medium text-sm">{admin?.name}</div>
                    <div className={cn(
                      "text-xs",
                      currentTheme === 'dark' ? 'text-blue-300' : 'text-gray-500'
                    )}>
                      {admin?.role}
                    </div>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className={cn(
                    "rounded-full h-8 w-8",
                    currentTheme === 'dark' ? 'hover:bg-blue-900 text-white' : 'hover:bg-gray-100 text-gray-500'
                  )}
                >
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>

              <Button 
                variant="outline" 
                className={cn(
                  "w-full flex items-center gap-2 mt-3 border text-sm",
                  currentTheme === 'dark' 
                    ? 'border-red-800 text-red-400 hover:bg-red-900 hover:text-red-300' 
                    : 'border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700'
                )}
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>
        
        <SidebarInset>
          <div className={cn(
            "p-4 md:p-6",
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
              <div className="flex items-center gap-2">
                <SidebarTrigger className={cn(
                  "md:hidden",
                  currentTheme === 'dark' ? 'text-white' : 'text-gray-700'
                )} />
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
