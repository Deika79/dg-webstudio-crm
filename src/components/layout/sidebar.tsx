"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  Briefcase,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Leads",
    href: "/leads",
    icon: Users,
  },
  {
    title: "Clientes",
    href: "/clientes",
    icon: Briefcase,
  },
  {
    title: "Ajustes",
    href: "/settings",
    icon: Settings,
  },
];

export function Sidebar() {
  return (
    <aside className="hidden md:flex w-64 border-r bg-card flex-col">
      <div className="h-16 flex items-center px-6 border-b">
        <h1 className="font-bold text-xl">
          DG CRM
        </h1>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-accent transition-colors"
            >
              <Icon size={18} />
              {item.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}