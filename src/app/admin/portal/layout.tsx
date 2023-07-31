"use client"
import AdminPortal from "@/components/Admin/AdminPortal";
import Box from "@/components/__Shared/Box";
import { layoutProps } from "@/utils/Proptypes/proptypes";
import { poppinsThin } from "@/utils/fonts/googleFonts";

const PortalLayout = ({ children }: layoutProps) => {
  return (
    <main className={poppinsThin.className}>
      <Box style={{display:"flex"}}>
        <AdminPortal />
        {children}
      </Box>
    </main>
  );
};

export default PortalLayout;
