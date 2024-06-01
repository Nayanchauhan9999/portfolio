"use client";
import Box from "@/components/__Shared/Box";
import React, { useEffect, useState } from "react";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import PanelWrapper from "@/components/Atoms/PanelWrapper";
import Paragraph from "@/components/__Shared/Paragraph";
import Heading from "@/components/__Shared/Heading";
import { GridColDef } from "@mui/x-data-grid";
import { ContactTypes } from "@/utils/Proptypes/proptypes";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import { FaEye, FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const ContactInquiries = () => {
  // const [contactData, setContactData] = useState<ContactTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  // useEffect(() => {
  //   getContactData();
  // }, []);

  // const getContactData = async () => {
  //   setLoading(true);
  //   const contact: ContactTypes[] = await new ApiClient().get("contact");
  //   // setContactData(contact);
  //   setLoading(false);
  // };

  const columns: GridColDef[] = [
    {
      field: "fullName",
      headerName: "Full Name",
      flex: 1,
      sortable: true,
    },
    { field: "email", headerName: "Email", flex: 1, sortable: true },
    { field: "mobile", headerName: "Mobile No", flex: 1, sortable: true },
    { field: "company", headerName: "Company", flex: 1, sortable: true },
    {
      field: "submitedAt",
      headerName: "Submit At",
      flex: 1,
      sortable: true,
      renderCell: (params: GridRenderCellParams<ContactTypes>) => (
        <div>{new Date(params.value).toLocaleString()}</div>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: () => (
        <div>
          <Tooltip
            title="View"
            placement="top"
            arrow
            TransitionComponent={Zoom}
            TransitionProps={{ timeout: 300 }}
          >
            <IconButton color="info">
              <FaEye />
            </IconButton>
          </Tooltip>
          <Tooltip
            title="Edit"
            placement="top"
            arrow
            TransitionComponent={Zoom}
            TransitionProps={{ timeout: 300 }}
          >
            <IconButton color="success">
              <FaEdit />
            </IconButton>
          </Tooltip>
          <Tooltip
            title="Delete"
            placement="top"
            arrow
            TransitionComponent={Zoom}
            TransitionProps={{ timeout: 300 }}
          >
            <IconButton color="error">
              <AiFillDelete />
            </IconButton>
          </Tooltip>
        </div>
      ),
    },
  ];
  return (
    <Box>
      <PanelWrapper style={{ margin: "1rem 0", boxSizing: "border-box" }}>
        <Heading variant="h1" textalign={"center"}>
          Contact Inquiries
        </Heading>
        <Paragraph textalign="center">
          Create, Update, Delete and view message of contacts
        </Paragraph>
      </PanelWrapper>
      <DataGrid
        // rows={contactData}
        rows={[]}
        columns={columns}
        sx={{
          backgroundColor: "white",
          minHeight: "25vh",
          overflowX: "hidden",
          boxSizing: "border-box",
          padding: "1.5rem",
          borderRadius: "0.375rem",
        }}
        loading={loading}
      />
    </Box>
  );
};

export default ContactInquiries;
