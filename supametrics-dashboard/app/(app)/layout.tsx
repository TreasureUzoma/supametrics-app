import { AppSidebar } from "@/app/(app)/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bell, Plus } from "lucide-react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {/* Move Header into layout */}
        <header className="sticky top-0 z-50 bg-background flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            {/* Breadcrumb goes here if passed as a slot, but we'll keep it in page */}
          </div>
          <div className="flex justify-end w-full pr-4 gap-4">
            <Link href="reports">
              <Button variant="outline">
                <Bell />
              </Button>
            </Link>
            <Link href="/new">
              <Button>
                <Plus />
                <span className="hidden md:block pl-2">Add New</span>
              </Button>
            </Link>
            <Link href="/profile">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
