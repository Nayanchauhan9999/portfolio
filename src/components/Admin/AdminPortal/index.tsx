"use client";
import { AdminPortalWrapper, AdminPortalSidebar } from "./AdminPortal.styes";
import IconWithCaption from "@/components/Atoms/IconWIthCaption";
import { RxDashboard } from "react-icons/rx";
import { SidebarLinksprops } from "./AdminPortal.types";
import Link from "@/components/__Shared/Link";
import { BiSupport } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { usePathname } from "next/navigation";
import {AiFillHome} from "react-icons/ai"

const SidebarLinks: SidebarLinksprops = [
  {
    id: 1,
    name: "Home",
    link: "/admin/portal",
    icon: <AiFillHome size={20} />,
  },
  {
    id: 2,
    name: "Dashboard",
    link: "/admin/portal/dashboard",
    icon: <RxDashboard size={20} />,
  },
  {
    id: 3,
    name: "Contact inquiries",
    link: "/admin/portal/contact-inquiries",
    icon: <BiSupport size={20} />,
  },
  {
    id: 4,
    name: "Settings",
    link: "/admin/portal/settings",
    icon: <IoMdSettings size={20} />,
  },
];

const AdminPortal = () => {
  const path = usePathname();
  return (
    <AdminPortalWrapper>
      <AdminPortalSidebar>
        {SidebarLinks.map((item) => {
          const isActive =
            path.startsWith(item.link) && path.endsWith(item.link);
          return (
            <Link
              href={item.link}
              key={item.id}
              className={isActive ? "active" : "inActive"}
            >
              <IconWithCaption src={item.icon} caption={item.name} gap="1rem" />
            </Link>
          );
        })}
      </AdminPortalSidebar>
    </AdminPortalWrapper>
  );
};

export default AdminPortal;
