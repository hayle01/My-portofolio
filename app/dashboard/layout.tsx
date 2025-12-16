import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";



export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarProvider className="bg-sidebar" >
        <DashboardSidebar />
         <div className="h-svh overflow-hidden w-full">
        <div className="overflow-hidden flex flex-col  justify-start h-full w-full">
          <DashboardHeader />
          <main className="flex-1 overflow-auto p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-6 bg-background w-full">
          {children}
          </main>
        </div>
      </div>
      </SidebarProvider>
    </>
  );
}