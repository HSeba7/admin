// ** MUI Imports
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/system";

export const ResultText = ({ children, sx }) => (
  <Typography
    fontWeight={500}
    sx={{ ml: "1rem", color: "#000", display: "block",...sx }}
    variant="body"
  >
    {children}
  </Typography>
);

export const LabelText = ({ children }) => (
  <Typography variant="body2">{children}</Typography>
);

const StatusButton = styled(Button)({
  fontSize: 14,
  fontWeight: 400,
  color: "#2A9E6C",
  boxShadow: "none",
  padding: "4px 12px",
  borderColor: "#95efaf36",
  backgroundColor: "#95efaf36",
  borderRadius: "14px",
  "&:hover": {
    boxShadow: "none",
    borderColor: "#95efaf99",
    backgroundColor: "#95efaf99",
  },
  "&:active": {
    boxShadow: "none",
    borderColor: "#95efaf99",
    backgroundColor: "#95efaf99",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem #2A9E8C",
  },
});

const CustomizedButton = styled(Button)({
  fontSize: 16,
  fontWeight: 400,
  borderRadius: "20px",
  padding: "13px 38px",
});

const PreviewCard = ({ data }) => {
  if (data) {
    return (
      <>
        <Card sx={{ overflow: "visible", mt: "2rem" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <CardHeader title="Dane do wypłaty" />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LabelText>Status wnioski</LabelText>
              <StatusButton variant="contained" sx={{ ml: 2, mr:4}}>
                W trakcie weryfikacji
              </StatusButton>
            </Box>
          </Box>
          <CardContent>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={3}>
                <Box>
                  <LabelText>Dane spolki</LabelText>
                  <ResultText>
                    fifthFactor sp z 0.0 ui.Julisuaza Slowackiege 24 35-060
                    Rzeszow NIP 8292925652
                  </ResultText>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box>
                  <LabelText>Metoda platnosci</LabelText>
                  <ResultText>Pryzspiepszona</ResultText>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box>
                  <LabelText>Rachunek do platnosci</LabelText>
                  <ResultText>00 1515 6565 8989 6566 9898 6566</ResultText>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box>
                  <LabelText>Tytulem</LabelText>
                  <ResultText>refectoring fakturky vat 14/07/2022</ResultText>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box>
                  <LabelText>Kwota platnosci</LabelText>
                  <ResultText>136.000.69 zl</ResultText>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Grid container spacing={4} sx={{ mt: "2rem" }}>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "end" }}>
            <CustomizedButton variant="contained" sx={{ mr: 4, mb: 2 }}>
              Zrealizowany
            </CustomizedButton>
          </Grid>
        </Grid>
      </>
    );
  } else {
    return null;
  }
};
export default PreviewCard;
