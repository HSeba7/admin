// ** React Imports
import { Fragment, useState, useEffect, forwardRef } from "react";

// ** Next Import
import Link from "next/link";

// ** MUI Imports
import Menu from "@mui/material/Menu";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import CardContent from "@mui/material/CardContent";
import { DataGrid } from "@mui/x-data-grid";
import Select from "@mui/material/Select";
import MuiChip from "@mui/material/Chip";

// ** Icons Imports
import Send from "mdi-material-ui/Send";
import Check from "mdi-material-ui/Check";
import ChartPie from "mdi-material-ui/ChartPie";
import Download from "mdi-material-ui/Download";
import ArrowDown from "mdi-material-ui/ArrowDown";
import EyeOutline from "mdi-material-ui/EyeOutline";
import TrendingUp from "mdi-material-ui/TrendingUp";
import ContentCopy from "mdi-material-ui/ContentCopy";
import DotsVertical from "mdi-material-ui/DotsVertical";
import PencilOutline from "mdi-material-ui/PencilOutline";
import DeleteOutline from "mdi-material-ui/DeleteOutline";
import InformationOutline from "mdi-material-ui/InformationOutline";
import ContentSaveOutline from "mdi-material-ui/ContentSaveOutline";

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

// ** Third Party Imports
// import format from "date-fns/format";

// ** Store & Actions Imports
import { useDispatch, useSelector } from "react-redux";
import { fetchData, deleteInvoice } from "src/store/apps/invoice";

// ** Utils Import
import { getInitials } from "src/@core/utils/get-initials";

// ** Custom Components Imports
import CustomChip from "src/@core/components/mui/chip";
import CustomAvatar from "src/@core/components/mui/avatar";
import TableHeader from "src/views/apps/invoice/list/TableHeader";

// ** Styled Components
import { useTranslation } from "react-i18next";

// ** Styled component for the link in the dataTable
const StyledLink = styled("a")(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.primary.main,
}));

//! Will change according to transactions data
export const transactionStatusObj = {
  Completed: {
    color: "success",
    icon: <Send sx={{ fontSize: "1.25rem" }} />,
    label: "Zrealizowany",
  },
  InProgress: {
    color: "warning",
    icon: <Send sx={{ fontSize: "1.25rem" }} />,
    label: "W trakcie realizacji",
  }
};


// ** renders client column
const renderClient = (row) => {
  if (row.avatar.length) {
    return (
      <CustomAvatar src={row.avatar} sx={{ mr: 3, width: 34, height: 34 }} />
    );
  } else {
    return (
      <CustomAvatar
        skin="light"
        color={row.avatarColor || "primary"}
        sx={{ mr: 3, fontSize: "1rem", width: 34, height: 34 }}
      >
        {getInitials(row.name || "John Doe")}
      </CustomAvatar>
    );
  }
};
const defaultColumns = [
  {
    flex: 0.1,
    field: "id",
    minWidth: 80,
    headerName: "ID Wniosku",
    renderCell: ({ row }) => (
      <Link href={`/pages/transactions/preview/${row.id}`} passHref>
        <StyledLink>{`#${row.id}`}</StyledLink>
      </Link>
    ),
  },
  {
    flex: 0.15,
    minWidth: 125,
    field: "issuedDate",
    headerName: "Data",
    renderCell: ({ row }) => (
      <Typography variant="body2">{row.issuedDate}</Typography>
    ),
  },
  {
    flex: 0.25,
    field: "name",
    minWidth: 300,
    headerName: "Klient",
    renderCell: ({ row }) => {
      const { name, companyEmail } = row;

      return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {renderClient(row)}
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              noWrap
              variant="body2"
              sx={{
                color: "text.primary",
                fontWeight: 500,
                lineHeight: "22px",
                letterSpacing: ".1px",
              }}
            >
              {name}
            </Typography>
            <Typography noWrap variant="caption">
              {companyEmail}
            </Typography>
          </Box>
        </Box>
      );
    },
  },
  {
    flex: 0.1,
    minWidth: 100,
    field: "payer",
    headerName: "Płatnik",
    renderCell: ({ row }) => (
      // <Typography variant="body2">{row.payer}</Typography>
      <Typography variant="body2">Primavera Sp. z o. o</Typography>
    ),
  },
  {
    flex: 0.1,
    minWidth: 90,
    field: "total",
    headerName: "Kwota Faktury",
    renderCell: ({ row }) => (
      <Typography variant="body2">{`${row.total || 0} zł`}</Typography>
    ),
  },
  {
    flex: 0.1,
    minWidth: 90,
    field: "payment_method",
    headerName: "METODA PŁATNOŚCI",
    renderCell: ({ row }) => (
      <Typography variant="body2">
        {row.total < 4000 ? "Przyspieszona" : "Standardowa"}
      </Typography>
    ),
  },
  {
    flex: 0.1,
    minWidth: 80,
    field: "transactionStatus",
    headerName: "Status",
    //! Will change according to store data
    renderCell: ({ row }) => {
      const { dueDate, total, invoiceStatus } = row;
      const color = total > 2000 ? "success" : "warning";

      const Icon = transactionStatusObj[invoiceStatus]
        ? transactionStatusObj[invoiceStatus].icon
        : null;
      
      const label = total > 2000 ? "Zrealizowany" : "W trakcie realizacji";

      return (
        <CustomChip
          size="small"
          skin="light"
          color={color}
          label={label}
        />
      );
    },
    // renderCell: ({ row }) => {
    //   const { dueDate, balance, invoiceStatus } = row;
    //   const color = transactionStatusObj[invoiceStatus]
    //     ? transactionStatusObj[invoiceStatus].color
    //     : "primary";
    //   const Icon = transactionStatusObj[invoiceStatus]
    //     ? transactionStatusObj[invoiceStatus].icon
    //     : null;
    //   return (
    //     <CustomChip
    //       size="small"
    //       skin="light"
    //       color="warning"
    //       label={transactionStatusObj[invoiceStatus].label}
    //     />
    //   );
    // },
  },
];

/* eslint-enable */
const InvoiceList = () => {
  // ** State
  const [dates, setDates] = useState([]);
  const [value, setValue] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [statusValue, setStatusValue] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);

  // ** Hooks
  const dispatch = useDispatch();
  const store = useSelector((state) => state.invoice);
  useEffect(() => {
    dispatch(
      fetchData({
        dates,
        q: value,
        status: statusValue,
      })
    );
  }, [dispatch, statusValue, value, dates]);

  // useEffect(() => {
  //   setInterval(() => {
  //     var labelObject = document.querySelectorAll(
  //       ".MuiTablePagination-selectLabel,.css-warohq-MuiTablePagination-selectLabel"
  //     )[0];
  //     if (labelObject) labelObject.innerHTML = "Wierszy na stronie";
  //   }, 1000);
  // }, []);

  // const handleFilter = (val) => {
  //   setValue(val);
  // };

  const columns = [
    ...defaultColumns
  ];

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title="Wypłaty" />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <TableHeader
            value={value}
            selectedRows={selectedRows}
          />

          <DataGrid
            autoHeight
            pagination
            rows={store.data}
            columns={columns}
            disableSelectionOnClick
            pageSize={Number(pageSize)}
            rowsPerPageOptions={[5, 10]}
            sx={{ "& .MuiDataGrid-columnHeaders": { borderRadius: 0 } }}
            onSelectionModelChange={(rows) => setSelectedRows(rows)}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default InvoiceList;
