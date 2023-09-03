"use client";
import AdminPortal from "@/components/Admin/AdminPortal";
import { layoutProps } from "@/utils/Proptypes/proptypes";
import { poppinsThin } from "@/utils/fonts/googleFonts";
import { Suspense } from "react";
import Loading from "./loading";

const PortalLayout = ({ children }: layoutProps) => {
  return (
    <main className={poppinsThin.className}>
      <AdminPortal />
      <Suspense fallback={<Loading/>}>
        <div
          style={{
            width: "80%",
            position: "fixed",
            right: 0,
            top: 0,
            overflowX: "hidden",
            overflowY: "auto",
            height: "100vh",
            padding: "1.5rem",
            boxSizing: "border-box",
          }}
        >
          {children}
        </div>
      </Suspense>
    </main>
  );
};

export default PortalLayout;
