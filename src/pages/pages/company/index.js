// ** MUI Imports
// import Link from '@mui/material/Link'
import Link from "next/link";
// ** MUI Imports
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
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
import Button from "@mui/material/Button";

// ** React Imports
import { Fragment, useState, useEffect } from "react";

const rows = [
	{
		id: 1,
		company_name: "Hight Tech",
		legal_form: "Spółka z Ograniczoną Odpowiedzialnością",
		email: "kontakt@hight-tech.pl",
		phone: "+48 730 799 488",
		city: "Warszawa",
	},
];

const columns = [
	{
		flex: 0.03,
		field: "id",
		minWidth: 60,
		headerName: "ID",
	},
	{
		flex: 0.2,
		minWidth: 200,
		field: "company_name",
		headerName: "Nazwa Firmy",
	},
	{
		flex: 0.35,
		minWidth: 200,
		field: "legal_form",
		headerName: "Forma Prawna",
	},
	{
		flex: 0.2,
		minWidth: 230,
		field: "email",
		headerName: "Adres Email",
	},
	{
		flex: 0.25,
		minWidth: 130,
		field: "phone",
		headerName: "Numer Kontaktowy",
	},
	{
		flex: 0.15,
		minWidth: 120,
		field: "city",
		headerName: "Miasto",
	},
	{
		flex: 0.05,
		field: "action",
		minWidth: 80,
		headerName: "",
		renderCell: ({ row }) => (
			<Fragment>
				<Link href="#" passHref>
					<DeleteOutline fontSize="small" sx={{ mr: 2 }} />
				</Link>
				<Link href="company/edit/" passHref>
					<PencilOutline fontSize="small" sx={{ mr: 2 }} />
				</Link>
			</Fragment>
		),
	},
];

const RowOptions = ({ id }) => {
	// ** State
	const [anchorEl, setAnchorEl] = useState(null);
	const rowOptionsOpen = Boolean(anchorEl);

	const handleRowOptionsClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleRowOptionsClose = () => {
		setAnchorEl(null);
	};

	return (
		<Fragment>
			<IconButton size="small" onClick={handleRowOptionsClick}>
				<DotsVertical />
			</IconButton>
			<Menu
				keepMounted
				anchorEl={anchorEl}
				open={rowOptionsOpen}
				onClose={handleRowOptionsClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
			>
				<MenuItem>
					<Download fontSize="small" sx={{ mr: 2 }} />
					Download
				</MenuItem>
				<Link href={`/pages/company/edit/`} passHref>
					<MenuItem>
						<PencilOutline fontSize="small" sx={{ mr: 2 }} />
						Edit
					</MenuItem>
				</Link>
				<MenuItem>
					<ContentCopy fontSize="small" sx={{ mr: 2 }} />
					Duplicate
				</MenuItem>
			</Menu>
		</Fragment>
	);
};

const CompanyDataGrid = () => {
	const [statusValue, setStatusValue] = useState("");
	useEffect(() => {
		setInterval(() => {
			var labelObject = document.querySelectorAll(
				".MuiTablePagination-selectLabel,.css-warohq-MuiTablePagination-selectLabel"
			)[0];
			if (labelObject) labelObject.innerHTML = "Wierszy na stronie";
		}, 1000);
	}, []);

	const handleStatusValue = (e) => {
		setStatusValue(e.target.value);
	};

	return (
		<Grid container spacing={6}>
			<Grid item xs={12}>
				<Card>
					<Grid container spacing={6} sx={{ padding: "1.25rem" }}>
						<Grid item xs={12} sm={6}></Grid>
						<Grid item xs={12} sm={6} align="right">
							<TextField id="size-small" size="small" sx={{ mr: 4, mb: 2 }} />
							<Link href={`/pages/company/add`} passHref>
								<Button variant="contained">Dodaj Nowa</Button>
							</Link>
						</Grid>
					</Grid>
					<Box sx={{ height: 500 }}>
						<DataGrid columns={columns} rows={rows.slice(0, 10)} />
					</Box>
				</Card>
			</Grid>
		</Grid>
	);
};

export default CompanyDataGrid;
