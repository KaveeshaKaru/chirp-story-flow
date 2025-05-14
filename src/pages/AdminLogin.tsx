
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAdminAuth } from "@/contexts/AdminAuthContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Waves, Facebook, Twitter, Instagram } from "lucide-react";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  rememberMe: z.boolean().default(false),
});

const AdminLogin = () => {
  const { login } = useAdminAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      await login(data.email, data.password);
      toast.success("Login successful");
      navigate("/admin/dashboard");
    } catch (error) {
      toast.error("Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden relative bg-gradient-to-br from-[#2980b9] via-[#6dd5fa] to-[#add8e6]">
      {/* Animated wave backgrounds */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 right-0 h-48 w-[200%] animate-wave-scroll">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
          </svg>
        </div>
        <div className="absolute top-1/4 left-0 right-0 h-48 w-[200%] animate-wave-scroll-slow">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff"></path>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-48 w-[200%] animate-wave-scroll">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#ffffff" opacity=".3"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#ffffff" opacity=".5"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#ffffff"></path>
          </svg>
        </div>
      </div>

      {/* Beach umbrella decoration */}
      <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 z-10 animate-float-slow">
        <img 
          src="/beachUmbrella.svg" 
          alt="Beach Umbrella" 
          className="w-full h-full object-contain"
        />
      </div>

      <div className="container flex flex-col md:flex-row max-w-6xl mx-auto z-10">
        {/* Left Section */}
        <div className="w-full md:w-1/2 p-8 text-white animate-fade-in">
          <div className="mb-12">
            <div className="flex items-center mb-8">
              <Waves className="h-10 w-10 text-white mr-2" />
              <span className="text-2xl font-bold">TARA</span>
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6 tracking-tight">Hello,<br/>welcome!</h1>
          <p className="text-lg mb-6 opacity-90 max-w-md">
            Log in to access the admin dashboard and manage your TARA resort bookings and settings.
          </p>
          <div className="mt-16 pt-16">
            <p className="text-sm uppercase tracking-wider mb-4">FOLLOW</p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
                <Facebook size={20} className="text-white" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
                <Twitter size={20} className="text-white" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
                <Instagram size={20} className="text-white" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Right Section */}
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-white shadow-2xl rounded-xl p-8 md:p-12 transform hover:scale-[1.01] transition-all duration-300 animate-fade-in">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-600">Email address</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="admin@tara.com" 
                          type="email" 
                          className="h-12 border-[#2980b9] focus:border-[#2980b9] pl-4 transition-all"
                          {...field} 
                          disabled={isLoading} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-600">Password</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="••••••" 
                          type="password" 
                          className="h-12 border-[#2980b9] focus:border-[#2980b9] pl-4 transition-all"
                          {...field} 
                          disabled={isLoading} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-center justify-between pt-2">
                  <FormField
                    control={form.control}
                    name="rememberMe"
                    render={({ field }) => (
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="rememberMe" 
                          checked={field.value} 
                          onCheckedChange={field.onChange}
                          className="border-[#2980b9] data-[state=checked]:bg-[#2980b9]" 
                        />
                        <label 
                          htmlFor="rememberMe" 
                          className="text-sm text-gray-600 cursor-pointer"
                        >
                          Remember me
                        </label>
                      </div>
                    )}
                  />
                  <a href="#" className="text-sm text-[#2980b9] hover:underline">
                    Forgot password?
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 pt-4">
                  <Button 
                    type="submit" 
                    className="h-12 px-8 bg-[#2980b9] hover:bg-[#3498db] transition-colors flex-1"
                    disabled={isLoading}
                  >
                    {isLoading ? "Logging in..." : "Login"}
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="h-12 px-8 border-[#2980b9] text-[#2980b9] hover:bg-[#2980b9]/10 transition-colors flex-1"
                  >
                    Sign up
                  </Button>
                </div>
              </form>
            </Form>
            <div className="mt-10 text-center text-sm text-gray-500">
              <p>Demo credentials:</p>
              <p>Email: admin@tara.com | Password: admin123</p>
              <p>Email: owner@tara.com | Password: owner123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
