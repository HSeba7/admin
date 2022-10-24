// ** MUI Imports
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/system";

import PdfItem from "src/pages/components/pdf-item";

// ** Configs
import themeConfig from "src/configs/themeConfig";

import { invoiceStatusObj, renderClient } from "src/pages/dashboards/crm/list";

import { Select, MenuItem, InputLabel, Button } from "@mui/material";
import { RoundedTextField } from "../add/AddCard";

import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

export const ResultText = ({ children, sx }) => (
  <Typography
    fontWeight={500}
    sx={{ ml: "1rem", color: "#000", ...sx }}
    variant="body"
  >
    {children}
  </Typography>
);

export const LabelText = ({ children }) => (
  <Typography variant="body2">{children}</Typography>
);

const PreviewCard = ({ data }) => {
  if (data) {
    return (
      <>
        <Card sx={{ overflow: "visible", mt: "2rem" }}>
          <CardHeader title="Dane Firmy" />
          <CardContent>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={3}>
                <Box>
                  <LabelText>Hight Tech Sp. z o. o.</LabelText>
                  <ResultText>Hight Tech Sp. z o. o.</ResultText>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box>
                  <LabelText>Stanowisko</LabelText>
                  <ResultText>Fifth Factor</ResultText>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box>
                  <LabelText>Numer NIP</LabelText>
                  <ResultText>123-456-78-90</ResultText>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box>
                  <LabelText>Numer REGON</LabelText>
                  <ResultText>123456789</ResultText>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box>
                  <LabelText>Adres Firmy</LabelText>
                  <ResultText>ul.Mickiewicza 3/2</ResultText>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box>
                  <LabelText>Miasto</LabelText>
                  <ResultText>Warzawa</ResultText>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box>
                  <LabelText>Kod Pocztowy</LabelText>
                  <ResultText>03-288</ResultText>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box>
                  <LabelText>Numer Telefou do Firmy</LabelText>
                  <ResultText>+48 501 456 890</ResultText>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box>
                  <LabelText>Adres Email do Firmy</LabelText>
                  <ResultText>biuro@fifth-factor.pl</ResultText>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box>
                  <LabelText>Adres Strony Internetowei</LabelText>
                  <ResultText>https://fifth-factor.pl</ResultText>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box>
                  <LabelText>Nazwa Banku</LabelText>
                  <ResultText>Bank Milennium</ResultText>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box>
                  <LabelText>BIC/SWIFT</LabelText>
                  <ResultText>BIGB_PLPW</ResultText>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box>
                  <LabelText>Numer Konta Bankowego do wplat</LabelText>
                  <ResultText>2011 6022 0200 0000 0540 6157 82</ResultText>
                </Box>
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
                    <Box>
                      <LabelText>Nazwa Kontrahenta</LabelText>
                      <ResultText>Primavera Sp. z o. o.</ResultText>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Box>
                      <LabelText>Numer NIP Kontrahenta</LabelText>
                      <ResultText>5851445985</ResultText>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Box>
                      <LabelText>Numer REGON Kontrahenta</LabelText>
                      <ResultText>123456789</ResultText>
                    </Box>
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
                    <Box>
                      <LabelText>Numer Faktury</LabelText>
                      <ResultText>FVS/12/1056</ResultText>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <Box>
                      <LabelText>Data Wystawienia Faktory:</LabelText>
                      <ResultText>10/03/2022</ResultText>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Box>
                      <LabelText>Data Płatności Faktory:</LabelText>
                      <ResultText>10/22/2022</ResultText>
                    </Box>
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
                          control={<Checkbox checked={true} />}
                          label="Przelew Ekspresowy"
                        />
                        <FormControlLabel
                          control={<Checkbox checked={false} />}
                          label="Przelew Tradycyjny"
                        />
                      </Box>
                    </FormGroup>
                    <FormGroup>
                      <Typography variant="p">Ubezpieczenie</Typography>
                      <Box sx={{ display: "flex" }}>
                        <FormControlLabel
                          control={<Checkbox checked={false} />}
                          label="Ubezpieczenie"
                        />
                        <FormControlLabel
                          control={<Checkbox checked={true} />}
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
                          <LabelText>Termin Finansowania</LabelText>
                          <ResultText>21 dni</ResultText>
                        </FormControl>

                        <FormControl>
                          <LabelText>Procent Finansowania</LabelText>
                          <ResultText>100 %</ResultText>
                        </FormControl>

                        <FormControl>
                          <LabelText>Kwota Faktury</LabelText>
                          <ResultText>12 300 zł</ResultText>
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
                        >
                          1230,00 zł
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
              <CardHeader title="Załączone Pliki" />
              <CardContent>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                  {1 === null && <Typography>No file selected.</Typography>}
                  {[1, 2].map((el) => (
                    <PdfItem
                      key={el}
                      name={"el.name"}
                      fileType={"el.type"}
                      removeFileFromFileList={() => {
                        return;
                      }}
                      disabled={true}
                    />
                  ))}
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
                    control={<Checkbox checked={true} />}
                    label="Wyrażam zgodę na kontakt telefoniczny ze strony Fifth Factor Sp. z o. o. oraz otrzymywanie wiadomości drogą SMS lub poprzez e-mail w celu udzielenia mi wsparcia przy dokończeniu procesu składania niniejszego wniosku, w przypadku braku jego finalizacji."
                  />
                </Box>
                <Box>
                  <FormControlLabel
                    control={<Checkbox checked={true} />}
                    label="Wyrażam zgodę na przetwarzanie moich danych osobowych przez Fifth Factor Sp. z o. o., KRS: 000030330 w celu marketingu własnych produktów i usług własnych Fifth Factor Sp. z o. o. Działania marketingowe będzie prowadził Fifth Factor Sp. z o. o. lub w jego imieniu będzie prowadziła Fifth Factor Sp. z o. o. Niniejsza zgoda może zostać odwołana w każdej chwili bez podania przyczyny, co nie wpływa na zgodność z prawem przetwarzania danych przed jej odwołaniem. Zgadzam się, aby Fifth Factor Sp. z o. o. lub Fifth Factor Sp. z o. o. dostarczały mi informacje promujące usługi lub produkty Nest Bank S.A:"
                  />
                </Box>
                <Box>
                  <FormControlLabel
                    control={<Checkbox checked={true} />}
                    label="Upoważniam Fifth Factor sp. z o.o. do przekazania do Biura Informacji Kredytowej S.A. oraz Krajowego Rejestru Długów BIG S.A. danych spółki, którą reprezentuję, celem pozyskania informacji dotyczących spółki, w tym stanowiących tajemnicę bankową, w celu dokonania oceny wiarygodności płatniczej i oceny ryzyka kredytowego, również w trakcie obowiązywania pomiędzy nami umowy, a także przekazania informacji dotyczących zobowiązania spółki wynikającego z umowy z Fifth Factor sp. z o.o. Wyrażam zgodę na przetwarzanie przez Biuro Informacji Kredytowej S.A. danych przekazanych w zapytaniu nie dłużej niż 2 lata, a danych na temat zobowiązania do odwołania zgody, nie dłużej niż 5 lat od jego wygaśnięcia, oraz na ich udostępnianie podmiotom udzielającym kredytów i innym, którym udzieliłem zgody. Zostałem poinformowany o prawie odwołania zgód."
                  />
                </Box>
                <Box>
                  <FormControlLabel
                    control={<Checkbox checked={true} />}
                    label="Działając na podstawie art. 104 ust. 3 ustawy z dnia 29 sierpnia 1997 r. Prawo bankowe, niniejszym upoważniam Fifth Factor sp. z o.o. z siedzibą w Warszawie (dalej Bank) do przekazywania Fifth Factor sp. z o.o. z siedzibą w Warszawie, KRS 0000656462, wszelkich informacji objętych tajemnicą bankową dotyczących umowy zawartej z Bankiem. Upoważnienie udzielone jest na czas nieokreślony i może być w każdej chwili odwołanie."
                  />
                </Box>
                <Box>
                  <FormControlLabel
                    control={<Checkbox checked={true} />}
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
                <Box
                  sx={{
                    mt: "1rem",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: "<p>Proszę o pieniądze, mam hory kod</p>",
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mt: "2rem" }}>
          <Grid item xs={12}>
            <Button variant="contained" color="success" sx={{ mr: 4, mb:2 }}>
              Zaakceptuj
            </Button>
            <Button variant="contained" color="error" sx={{ mr: 4 }}>
              Odrzuć
            </Button>
          </Grid>
        </Grid>
      </>
    );
  } else {
    return null;
  }
};
export default PreviewCard;
