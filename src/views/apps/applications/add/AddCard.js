// ** React Imports
import { useState, forwardRef } from "react";
import { Link } from "next/link";

// ** MUI Imports
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Table from "@mui/material/Table";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import TableRow from "@mui/material/TableRow";
import Collapse from "@mui/material/Collapse";
import TableBody from "@mui/material/TableBody";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import TableContainer from "@mui/material/TableContainer";
import { styled, alpha, useTheme } from "@mui/material/styles";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TableCell from "@mui/material/TableCell";
import CardContent from "@mui/material/CardContent";
import AlertTitle from "@mui/material/AlertTitle";
import Alert from "@mui/material/Alert";

//** Draft Imports
import ReactDraftWysiwyg from "src/@core/components/react-draft-wysiwyg";
import "../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// ** Icon Imports
import Plus from "mdi-material-ui/Plus";
import Close from "mdi-material-ui/Close";

// ** Third Party Imports
import DatePicker from "react-datepicker";

// ** Configs
import themeConfig from "src/configs/themeConfig";

// ** Custom Component Imports
import Repeater from "src/@core/components/repeater";

// ** Styles
import DatePickerWrapper from "src/@core/styles/libs/react-datepicker";
import SiteLogo from "src/pages/components/logo";
import {
	FormControl,
	FormGroup,
	FormControlLabel,
	Checkbox,
} from "@mui/material";
import PdfItem from "src/pages/components/pdf-item";
import { useRouter } from "next/router";
import { LabelText } from "../preview/PreviewCard";

export const RoundedTextField = styled(TextField)`
	.MuiOutlinedInput-root.MuiInputBase-root {
		border-radius: 1.125rem;
	}
`;

const CustomInput = forwardRef(({ ...props }, ref) => {
	return (
		<RoundedTextField
			size="medium"
			inputRef={ref}
			fullWidth={true}
			sx={{
				"& .MuiInputBase-input": { color: "text.secondary" },
			}}
			{...props}
		/>
	);
});

const MUITableCell = styled(TableCell)(({ theme }) => ({
	borderBottom: 0,
	padding: `${theme.spacing(1, 0)} !important`,
}));

const CalcWrapper = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	"&:not(:last-of-type)": {
		marginBottom: theme.spacing(2),
	},
}));

const RepeatingContent = styled(Grid)(({ theme }) => ({
	paddingRight: 0,
	display: "flex",
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	border: `1px solid ${theme.palette.divider}`,
	"& .col-title": {
		top: "-1.5rem",
		position: "absolute",
	},
	"& .MuiInputBase-input": {
		color: theme.palette.text.secondary,
	},
	[theme.breakpoints.down("lg")]: {
		"& .col-title": {
			top: "0",
			position: "relative",
		},
	},
}));

const RepeaterWrapper = styled(CardContent)(({ theme }) => ({
	paddingTop: theme.spacing(12),
	paddingBottom: theme.spacing(5.5),
	"& .repeater-wrapper + .repeater-wrapper": {
		marginTop: theme.spacing(12),
	},
}));

const InvoiceAction = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "flex-start",
	padding: theme.spacing(2, 1),
	borderLeft: `1px solid ${theme.palette.divider}`,
}));

const CustomSelectItem = styled(MenuItem)(({ theme }) => ({
	backgroundColor: "transparent !important",
	"&:hover": {
		backgroundColor: `${alpha(theme.palette.success.main, 0.1)} !important`,
	},
}));
const now = new Date();
const tomorrowDate = now.setDate(now.getDate() + 7);

const options = {
	highTech: {
		numerNIP: "123-456-78-90",
		numerRegon: "123456789",
		adresFirmy: "ul.Mickiewicza 3/2",
		miasto: "Warzawa",
		kodPocztowy: "03-288",
		numerTelefonu: "+48 501 456 890",
		adresEmail: "biuro@fifth-factor.pl",
		adresStrony: "https://fifth-factor.pl",
		nazwaBanku: "Bank Milennium",
		swift: "BIGB_PLPW",
		numerKonta: "2011 6022 0200 0000 0540 6157 82",
	},
};

const EditApplication = (props) => {
	// ** Props
	const {
		clients,
		invoiceNumber,
		selectedClient,
		setSelectedClient,
		toggleAddCustomerDrawer,
	} = props;

	// ** States
	const [count, setCount] = useState(1);
	const [selected, setSelected] = useState("");
	const [issueDate, setIssueDate] = useState("");
	const [dueDate, setDueDate] = useState(new Date(tomorrowDate));

	// ** Checkbox : Making them behave as radio box
	const [leftHandSideCheckBox, setLeftHandSideCheckbox] = useState({
		left: false,
		right: false,
	});
	const [rightHandSideCheckBox, setRightHandSideCheckbox] = useState({
		left: false,
		right: false,
	});
	const [agreements, setAgreements] = useState({
		first: false,
		second: false,
		third: false,
		fourth: false,
		fifth: false,
	});
	const [daneFirmy, setDaneFirmy] = useState({
		numerNIP: "",
		numerRegon: "",
		adresFirmy: "",
		miasto: "",
		kodPocztowy: "",
		numerTelefonu: "",
		adresEmail: "",
		adresStrony: "",
		nazwaBanku: "",
		swift: "",
		numerKonta: "",
	});

	const handleCheckBoxSelection = (event) => {
		const otherInput = event.target.dataset.other;
		if (event.target.dataset.group === "left") {
			setLeftHandSideCheckbox({
				[event.target.name]: event.target.checked,
				otherInput: !event.target.checked,
			});
		} else if (event.target.dataset.group === "right") {
			setRightHandSideCheckbox({
				[event.target.name]: event.target.checked,
				otherInput: !event.target.checked,
			});
		} else if (event.target.dataset.group === "agreements") {
			const newAgreements = {
				first: agreements.first,
				second: agreements.second,
				third: agreements.third,
				fourth: agreements.fourth,
				fifth: agreements.fifth,
			};
			newAgreements[event.target.name] = event.target.checked;
			setAgreements(newAgreements);
		}
	};

	const [selectedFiles, setSelectedFiles] = useState(null);

	// ** Hook
	const theme = useTheme();

	// ** Deletes form
	const deleteForm = (e) => {
		e.preventDefault();

		// @ts-ignore
		e.target.closest(".repeater-wrapper").remove();
	};

	// ** Handle Invoice To Change
	const handleInvoiceChange = (event) => {
		setSelected(event.target.value);
		if (clients !== undefined) {
			setSelectedClient(
				clients.filter((i) => i.name === event.target.value)[0]
			);
		}
	};

	// ** Handle File Change
	const handleFileInputChange = (event) => {
		console.log(event);
		setSelectedFiles(Array.from(event.target.files));
	};

	const handleAddNewCustomer = () => {
		toggleAddCustomerDrawer();
	};

	const router = useRouter();

	const removeFileFromFileList = (event, name) => {
		if (selectedFiles.find((el) => el.name !== name) === -1) return;
		Array.from(document.getElementById("pdf-files-input").files).filter(
			(el) => el.name !== name
		);

		setSelectedFiles(selectedFiles.filter((el) => el.name !== name));
	};

	const handleSelectChange = (event) => {
		if (options[event.target.value]) setDaneFirmy(options[event.target.value]);
	};

	return (
		<>
			<Card sx={{ overflow: "visible" }}>
				<CardHeader title="Dane Firmy" />
				<CardContent>
					<Grid container spacing={4}>
						<Grid item xs={12} sm={3}>
							<FormControl fullWidth>
								<InputLabel id="controlled-select-label">
									Wybierz Firmę
								</InputLabel>
								<Select
									label="Hight Tech Sp. z o. o."
									id="controlled-select"
									labelId="controlled-select-label"
									sx={{ borderRadius: "1.125rem" }}
									onChange={handleSelectChange}
								>
									<MenuItem value={"highTech"}>High Tech Sp. z o. o.</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid item xs={12} sm={3}>
							<FormControl fullWidth={true}>
								<RoundedTextField
									id="outlined-basic"
									size="medium"
									label="Stanowisko"
									variant="outlined"
								/>
							</FormControl>
						</Grid>
						<Grid item xs={12} sm={3}>
							<FormControl fullWidth={true}>
								<RoundedTextField
									id="outlined-basic"
									size="medium"
									label="Numer NIP"
									value={daneFirmy.numerNIP}
									disabled
									readOnly
								/>
							</FormControl>
						</Grid>
						<Grid item xs={12} sm={3}>
							<FormControl fullWidth={true}>
								<RoundedTextField
									id="outlined-basic"
									size="medium"
									label="Numer REGON"
									value={daneFirmy.numerRegon}
									disabled
									readOnly
								/>
							</FormControl>
						</Grid>
						<Grid item xs={12} sm={6}>
							<FormControl fullWidth={true}>
								<RoundedTextField
									id="outlined-basic"
									size="medium"
									label="Adres Firmy"
									value={daneFirmy.adresFirmy}
									disabled
									readOnly
								/>
							</FormControl>
						</Grid>
						<Grid item xs={12} sm={3}>
							<FormControl fullWidth={true}>
								<RoundedTextField
									id="outlined-basic"
									size="medium"
									label="Miasto"
									value={daneFirmy.miasto}
									disabled
									readOnly
								/>
							</FormControl>
						</Grid>
						<Grid item xs={12} sm={3}>
							<FormControl fullWidth={true}>
								<RoundedTextField
									id="outlined-basic"
									size="medium"
									label="Kod Pocztowy"
									value={daneFirmy.kodPocztowy}
									disabled
									readOnly
								/>
							</FormControl>
						</Grid>
						<Grid item xs={12} sm={4}>
							<FormControl fullWidth={true}>
								<RoundedTextField
									id="outlined-basic"
									size="medium"
									label="Numer Telefou do Firmy"
									value={daneFirmy.numerTelefonu}
									disabled
									readOnly
								/>
							</FormControl>
						</Grid>
						<Grid item xs={12} sm={4}>
							<FormControl fullWidth={true}>
								<RoundedTextField
									id="outlined-basic"
									size="medium"
									label="Adres Email do Firmy"
									value={daneFirmy.adresEmail}
									disabled
									readOnly
								/>
							</FormControl>
						</Grid>
						<Grid item xs={12} sm={4}>
							<FormControl fullWidth={true}>
								<RoundedTextField
									id="outlined-basic"
									size="medium"
									label="Adres Strony Internetowei"
									value={daneFirmy.adresStrony}
									disabled
									readOnly
								/>
							</FormControl>
						</Grid>
						<Grid item xs={12} sm={3}>
							<FormControl fullWidth={true}>
								<RoundedTextField
									id="outlined-basic"
									size="medium"
									label="Nazwa Banku"
									value={daneFirmy.nazwaBanku}
									disabled
									readOnly
								/>
							</FormControl>
						</Grid>
						<Grid item xs={12} sm={3}>
							<FormControl fullWidth={true}>
								<RoundedTextField
									id="outlined-basic"
									size="medium"
									label="BIC/SWIFT"
									value={daneFirmy.swift}
									disabled
									readOnly
								/>
							</FormControl>
						</Grid>
						<Grid item xs={12} sm={6}>
							<FormControl fullWidth={true}>
								<RoundedTextField
									id="outlined-basic"
									size="medium"
									label="Numer Konta Bankowego do wplat"
									value={daneFirmy.numerKonta}
									disabled
									readOnly
								/>
							</FormControl>
						</Grid>
					</Grid>

					<Grid item xs={12} sm={4} sx={{ ml: "auto" }}></Grid>
				</CardContent>
			</Card>
			<Grid container spacing={4} sx={{ mt: "2rem" }}>
				<Grid item xs={12}>
					<Card>
						<CardHeader title="Dane Kontrahenta" />
						<CardContent>
							<Grid
								container
								spacing={4}
								sx={{
									display: "flex",
									justifyContent: "space-between",
									flexWrap: "wrap",
								}}
							>
								<Grid item xs={12} sm={4}>
									<FormControl fullWidth={true}>
										<RoundedTextField
											id="outlined-basic"
											size="medium"
											label="Nazwa Kontrahenta"
											variant="outlined"
										/>
									</FormControl>
								</Grid>
								<Grid item xs={12} sm={4}>
									<FormControl fullWidth={true}>
										<RoundedTextField
											id="outlined-basic"
											size="medium"
											label="Numer NIP Kontrahenta"
											variant="outlined"
										/>
									</FormControl>
								</Grid>
								<Grid item xs={12} sm={4}>
									<FormControl fullWidth={true}>
										<RoundedTextField
											id="outlined-basic"
											size="medium"
											label="Numer REGON Kontrahenta"
											variant="outlined"
										/>
									</FormControl>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
			<Grid container spacing={4} sx={{ mt: "2rem" }}>
				<Grid item xs={12}>
					<Card>
						<CardHeader title="Parametry Faktoringu" />
						<CardContent>
							<Grid
								container
								spacing={4}
								sx={{ display: "flex", alignItems: "flex-end" }}
							>
								<Grid item xs={12} sm={4}>
									<FormControl sx={{ mb: "1rem" }} fullWidth={true}>
										<RoundedTextField
											id="outlined-basic"
											size="medium"
											label="Numer Faktury"
											variant="outlined"
										/>
									</FormControl>
								</Grid>

								<Grid item xs={12} sm={4}>
									<FormControl fullWidth={true} sx={{ mb: "1rem" }}>
										<DatePickerWrapper
											sx={{
												"& .react-datepicker-wrapper": { width: "100%" },
											}}
										>
											<DatePicker
												id="issue-date"
												selected={issueDate}
                        label="Numer Faktury"
											  variant="outlined"
												placeholderText="Data Wystawienia Faktury"
												customInputRef="ad"
												customInput={
													<CustomInput
														InputProps={{
															startAdornment: (
																<InputAdornment position="start"></InputAdornment>
															),
														}}
													/>
												}
												onChange={(date) => setIssueDate(date)}
											/>
										</DatePickerWrapper>
									</FormControl>
								</Grid>
								<Grid item xs={12} sm={4}>
									<FormControl fullWidth={true} sx={{ mb: "1rem" }}>
										<DatePickerWrapper
											sx={{ "& .react-datepicker-wrapper": { width: "100%" } }}
										>
											<DatePicker
												id="issue-date"
												selected={dueDate}
												placeholderText="Data Płatności"
                        customInputRef="ad"
												customInput={
													<CustomInput
														InputProps={{
															startAdornment: (
																<InputAdornment position="start"></InputAdornment>
															),
														}}
													/>
												}
												onChange={(date) => setDueDate(date)}
											/>
										</DatePickerWrapper>
									</FormControl>
								</Grid>
							</Grid>
							<Grid
								container
								spacing={4}
								sx={{
									mt: "1rem",
									display: "flex",
									justifyContent: "space-between",
								}}
							>
								<Grid item xs={12} sm={6}>
									<FormGroup>
										<Typography variant="p">Metoda Płatności</Typography>
										<Box sx={{ display: "flex" }}>
											<FormControlLabel
												control={
													<Checkbox
														checked={leftHandSideCheckBox.left}
														onChange={handleCheckBoxSelection}
														inputProps={{
															name: "left",
															"data-other": "right",
															"data-group": "left",
														}}
													/>
												}
												label="Przelew Ekspresowy"
											/>
											<FormControlLabel
												control={
													<Checkbox
														checked={leftHandSideCheckBox.right}
														onChange={handleCheckBoxSelection}
														inputProps={{
															name: "right",
															"data-other": "left",
															"data-group": "left",
														}}
													/>
												}
												label="Przelew Tradycyny"
											/>
										</Box>
									</FormGroup>
									<FormGroup>
										<Typography variant="p">Ubezpieczenie</Typography>
										<Box sx={{ display: "flex" }}>
											<FormControlLabel
												control={
													<Checkbox
														checked={rightHandSideCheckBox.left}
														onChange={handleCheckBoxSelection}
														inputProps={{
															name: "left",
															"data-other": "right",
															"data-group": "right",
														}}
													/>
												}
												label="Ubezpieczenie"
											/>
											<FormControlLabel
												control={
													<Checkbox
														checked={rightHandSideCheckBox.right}
														onChange={handleCheckBoxSelection}
														inputProps={{
															name: "right",
															"data-other": "left",
															"data-group": "right",
														}}
													/>
												}
												label="Bez Ubezpieczenia"
											/>
										</Box>
									</FormGroup>
								</Grid>
								<Grid item xs={12} sm={6}>
									<FormGroup>
										<Box
											sx={{
												display: "flex",
												justifyContent: "space-between",
												alignItems: "flex-end",
												gap: "2rem",
											}}
										>
											<FormControl>
												<LabelText>Procent Finansowania</LabelText>
												<Select
													sx={{
														borderRadius: "1.125rem",
														mt: "0.5rem",
													}}
												>
													<MenuItem value={50}>50%</MenuItem>
													<MenuItem value={75}>75%</MenuItem>
													<MenuItem value={100}>100%</MenuItem>
												</Select>
											</FormControl>

											<FormControl>
												<LabelText>Termin Finansowania</LabelText>
												<Select sx={{ borderRadius: "1.125rem", mt: "0.5rem" }}>
													<MenuItem value={21}>21 dni</MenuItem>
													<MenuItem value={28}>28 dni</MenuItem>
													<MenuItem value={35}>35 dni</MenuItem>
												</Select>
											</FormControl>

											<FormControl>
												<RoundedTextField
													id="outlined-basic"
													label="Kwota Faktury"
													variant="outlined"
													size="medium"
												/>
											</FormControl>
										</Box>
									</FormGroup>
									<FormGroup sx={{ mt: "1rem" }}>
										<Typography
											sx={{ mb: "1rem", display: "block", textAlign: "left" }}
											variant="p"
										>
											Kwota płatności dla wybranych parametrów
											<Typography
												sx={{
													ml: "1rem",
													fontWeight: "bold",
													textAlign: "left",
												}}
												variant="p"
											>
												0,00 zł
											</Typography>
										</Typography>
									</FormGroup>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
			<Grid container spacing={4} sx={{ mt: "2rem" }}>
				<Grid item xs={12}>
					<Card>
						<CardHeader title="Załączniki" />
						<CardContent>
							<Box sx={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
								{selectedFiles === null && (
									<Typography>Brak wybranych plików.</Typography>
								)}
								{selectedFiles !== null &&
									selectedFiles.length > 0 &&
									selectedFiles.map((el) => (
										<PdfItem
											key={el.name}
											name={el.name}
											fileType={el.type}
											removeFileFromFileList={removeFileFromFileList}
										/>
									))}
							</Box>
							<Box sx={{ mt: "1rem", textAlign: "end" }}>
								<Button
									variant="contained"
									sx={{ borderRadius: "1.125rem" }}
									component="label"
								>
									Załącz pliki
									<input
										accept="application/pdf"
										style={{ display: "none" }}
										id="pdf-files-input"
										multiple
										type="file"
										onInput={handleFileInputChange}
									/>
								</Button>
							</Box>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
			<Grid container spacing={4} sx={{ mt: "2rem" }}>
				<Grid item xs={12}>
					<Card>
						<CardHeader title="Zgody" />
						<CardContent>
							<Box>
								<FormControlLabel
									control={
										<Checkbox 
											checked={agreements.first}
											onChange={handleCheckBoxSelection}
											inputProps={{
												name: "first",
												"data-group": "agreements",
											}}
										/>
									}
									label="Wyrażam zgodę na kontakt telefoniczny ze strony Fifth Factor Sp. z o. o. oraz otrzymywanie wiadomości drogą SMS lub poprzez e-mail w celu udzielenia mi wsparcia przy dokończeniu procesu składania niniejszego wniosku, w przypadku braku jego finalizacji."
								/>
							</Box>
							<Box>
								<FormControlLabel sx={{ mt: "1rem" }}
									control={
										<Checkbox 
											checked={agreements.second}
											onChange={handleCheckBoxSelection}
											inputProps={{
												name: "second",
												"data-group": "agreements",
											}}
										/>
									}
									label="Wyrażam zgodę na przetwarzanie moich danych osobowych przez Fifth Factor Sp. z o. o., KRS: 000030330 w celu marketingu własnych produktów i usług własnych Fifth Factor Sp. z o. o. Działania marketingowe będzie prowadził Fifth Factor Sp. z o. o. lub w jego imieniu będzie prowadziła Fifth Factor Sp. z o. o. Niniejsza zgoda może zostać odwołana w każdej chwili bez podania przyczyny, co nie wpływa na zgodność z prawem przetwarzania danych przed jej odwołaniem. Zgadzam się, aby Fifth Factor Sp. z o. o. lub Fifth Factor Sp. z o. o. dostarczały mi informacje promujące usługi lub produkty Nest Bank S.A:"
								/>
							</Box>
							<Box>
								<FormControlLabel sx={{ mt: "1rem" }}
									control={
										<Checkbox
											checked={agreements.third}
											onChange={handleCheckBoxSelection}
											inputProps={{
												name: "third",
												"data-group": "agreements",
											}}
										/>
									}
									label="Upoważniam Fifth Factor sp. z o.o. do przekazania do Biura Informacji Kredytowej S.A. oraz Krajowego Rejestru Długów BIG S.A. danych spółki, którą reprezentuję, celem pozyskania informacji dotyczących spółki, w tym stanowiących tajemnicę bankową, w celu dokonania oceny wiarygodności płatniczej i oceny ryzyka kredytowego, również w trakcie obowiązywania pomiędzy nami umowy, a także przekazania informacji dotyczących zobowiązania spółki wynikającego z umowy z Fifth Factor sp. z o.o. Wyrażam zgodę na przetwarzanie przez Biuro Informacji Kredytowej S.A. danych przekazanych w zapytaniu nie dłużej niż 2 lata, a danych na temat zobowiązania do odwołania zgody, nie dłużej niż 5 lat od jego wygaśnięcia, oraz na ich udostępnianie podmiotom udzielającym kredytów i innym, którym udzieliłem zgody. Zostałem poinformowany o prawie odwołania zgód."
								/>
							</Box>
							<Box>
								<FormControlLabel sx={{ mt: "1rem" }}
									control={
										<Checkbox
											checked={agreements.fourth}
											onChange={handleCheckBoxSelection}
											inputProps={{
												name: "fourth",
												"data-group": "agreements",
											}}
										/>
									}
									label="Działając na podstawie art. 104 ust. 3 ustawy z dnia 29 sierpnia 1997 r. Prawo bankowe, niniejszym upoważniam Fifth Factor sp. z o.o. z siedzibą w Warszawie (dalej Bank) do przekazywania Fifth Factor sp. z o.o. z siedzibą w Warszawie, KRS 0000656462, wszelkich informacji objętych tajemnicą bankową dotyczących umowy zawartej z Bankiem. Upoważnienie udzielone jest na czas nieokreślony i może być w każdej chwili odwołanie."
								/>
							</Box>
							<Box>
								<FormControlLabel sx={{ mt: "1rem" }}
									control={
										<Checkbox
											checked={agreements.fifth}
											onChange={handleCheckBoxSelection}
											inputProps={{
												name: "fifth",
												"data-group": "agreements",
											}}
										/>
									}
									label="Oświadczam, że nie jestem PEP*, tj.: osobą zajmującą eksponowane stanowisko polityczne (PEP), członkiem rodziny PEP lub osobą znaną jako bliski współpracownik PEP i zobowiązuję się do niezwłocznego poinformowania Fifth Factor sp. z o.o. o wszelkich zmianach danych objętych oświadczeniem (adres mailowy: kontakt@faktoria.pl). Jestem świadomy/a odpowiedzialności karnej za złożenie fałszywych oświadczeń. Przez PEP rozumie się w szczególności: szefów państw, członków rządu, parlamentu i zarządów partii, członków sądów najwyższych, trybunałów, zarządów banków centralnych, ambasadorów, oficerów sił zbrojnych, członków organów przedsiębiorstw państwowych i z udziałem Skarbu Państwa, członków organów organizacji międzynarodowych oraz urzędów naczelnych, centralnych i wojewódzkich, oraz inne osoby zajmujące stanowiska lub funkcje publiczne w organach państwa lub administracji rządowej. Szczegółowa lista osób będących PEP, członkiem rodziny PEP lub osobą znaną jako bliski współpracownik PEP znajduje się pod adresem https://fifth-factor.pl/PEP-definicja.pdf."
								/>
							</Box>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
			<Grid container spacing={4} sx={{ mt: "2rem" }}>
				<Grid item xs={12}>
					<Card>
						<CardHeader title="Dodotkowe Informacje" />
						<CardContent>
							<Typography variant="p">
								Miejsce na dodatkową treść, bądź informacje,
							</Typography>
							<Box
								sx={{
									mt: "1rem",
									borderRadius: "5px",
									border: "1px solid #4c4e641f",
								}}
							>
								<ReactDraftWysiwyg />
							</Box>
							<Box sx={{ mt: "1rem", textAlign: "end" }}></Box>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
			<Box sx={{ mt: "2rem", textAlign: "end" }}>
				<Button
					sx={{
						p: "0.75rem 3rem",
						borderRadius: "1.125rem",
						mr: "1rem",
					}}
					variant="contained"
					onClick={() => router.push("/dashboards/crm/success")}
				>
					Zapisz
				</Button>
				<Button
					sx={{
						p: "0.75rem 3rem",
						borderRadius: "1.125rem",
						background:
							"linear-gradient( 125deg, rgba(97, 73, 205, 1) 0%, rgba(231, 94, 140, 1) 100%)",
					}}
					variant="contained"
					onClick={() => router.push("/dashboards/crm/success")}
				>
					Wyślij Wniosek
				</Button>
			</Box>
		</>
	);
};

export default EditApplication;
