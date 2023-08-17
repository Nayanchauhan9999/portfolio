"use client";
import AdminPortal from "@/components/Admin/AdminPortal";
import Box from "@/components/__Shared/Box";
import { layoutProps } from "@/utils/Proptypes/proptypes";
import { poppinsThin } from "@/utils/fonts/googleFonts";

const PortalLayout = ({ children }: layoutProps) => {
  return (
    <main className={poppinsThin.className}>
      <AdminPortal />
      <div
        style={{
          width: "80vw",
          position: "fixed",
          right: 0,
          top: 0,
          overflowX: "hidden",
          overflowY: "auto",
          height: "100vh",
          padding: "1.5rem",
          boxSizing:"border-box"
        }}
      >
        {children}
      </div>
    </main>
  );
};

export default PortalLayout;
