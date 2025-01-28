"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  ShoppingCart,
  // Receipt,
  Clock,
  History,
  // Bookmark,
  UserCircle,
  LogOut,
  Menu,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { UserProvider, useUser } from  "@/context/userContext"

const sidebarLinks = [
  {
    title: "Dashboard",
    href: "/profile",
    icon: LayoutDashboard,
  },
  {
    title: "Orders",
    href: "/profile/orders",
    icon: ShoppingCart,
  },
  {
    title: "Pending Orders",
    href: "/profile/pendingorders",
    icon: Clock,
  },
  {
    title: "Order History",
    href: "/profile/orderhistory",
    icon: History,
  },
  {
    title: "Update Profile",
    href: "/profile/update",
    icon: UserCircle,
  },
]

function SidebarContent() {
  const pathname = usePathname()
  const { user } = useUser()

  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex flex-col gap-4 px-4 py-3">
        <div className="flex items-center gap-3 rounded-lg px-3 py-2">
          <Avatar>
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">{user.name}</span>
            <span className="text-xs text-muted-foreground">{user.role}</span>
          </div>
        </div>
      </div>
      <ScrollArea className="flex-1">
        <div className="flex flex-col gap-2 p-4">
          {sidebarLinks.map((link) => {
            const Icon = link.icon
            const isActive = pathname === link.href

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground ${
                  isActive ? "bg-accent text-accent-foreground" : ""
                }`}
              >
                <Icon className="h-4 w-4" />
                {link.title}
              </Link>
            )
          })}
        </div>
      </ScrollArea>
      <div className="mt-auto p-4">
        <Button variant="ghost" className="w-full justify-start gap-2" size="sm">
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  )
}

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)

  return (
    <UserProvider>
      <div className="flex min-h-screen">
        {/* Desktop Sidebar */}
        <aside className="hidden w-64 border-r bg-background lg:block">
          <SidebarContent />
        </aside>

        {/* Mobile Sidebar */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden absolute left-4 top-4">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <SidebarContent />
          </SheetContent>
        </Sheet>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="container max-w-7xl p-4 lg:p-8">{children}</div>
        </main>
      </div>
    </UserProvider>
  )
}

