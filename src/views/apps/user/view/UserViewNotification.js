// ** MUI Imports
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import TableRow from '@mui/material/TableRow'
import Checkbox from '@mui/material/Checkbox'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import TableContainer from '@mui/material/TableContainer'

const UserViewNotification = () => {
  return (
    <Card>
      <CardHeader title='Powiadomienia' titleTypographyProps={{ variant: 'h6' }} />

      <Divider sx={{ m: 0 }} />

      <CardContent>
        <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary' }}>
         Będziesz otrzymywać powiadomienia w przypadku następujących zdarzeń:
        </Typography>
      </CardContent>

      <Divider sx={{ m: 0 }} />

      <TableContainer>
        <Table sx={{ minWidth: 500 }}>
          <TableHead
            sx={{ backgroundColor: theme => (theme.palette.mode === 'light' ? 'grey.50' : 'background.default') }}
          >
            <TableRow>
              <TableCell sx={{ py: 3 }}>Rodzaj Powiadomienia</TableCell>
              <TableCell sx={{ py: 3 }} align='center'>
                Powiadomienie Email
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow hover>
              <TableCell>Wysyłaj powiadomienia o aktualizacji statusu wniosków</TableCell>
              <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                <Checkbox defaultChecked />
              </TableCell>
              
            </TableRow>
            <TableRow hover>
              <TableCell>Wysyłaj informacje o nowościach, i aktualizacjach systemu</TableCell>
              <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                <Checkbox />
              </TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>Wyrażam zgode na przesyłanie ofert marketingowych</TableCell>
              <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                <Checkbox defaultChecked />
              </TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>Wysyłaj powiadomienie gdy otrzymam wiadomość poprzez chat</TableCell>
              <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                <Checkbox />
              </TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>Wysyłaj powiadomienie gdy otrzymam wiadomość na skrzynkę odbiorczą</TableCell>
              <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                <Checkbox />
              </TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>Wysyłaj powiadomienia o wydarzeniach z kalendarza</TableCell>
              <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                <Checkbox />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <CardActions>
        <Button variant='contained' sx={{ mr: 2 }}>
          Zapisz Zmiany
        </Button>
      </CardActions>
    </Card>
  )
}

export default UserViewNotification
