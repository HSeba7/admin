// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const CardAppleWatch = () => {
  return (
    <Card>
      <CardMedia sx={{ height: 140 }} image='/images/cards/apple-watch.png' />
      <CardContent sx={{ p: theme => `${theme.spacing(4, 5)} !important` }}>
        <Typography variant='h6' sx={{ mb: 2 }}>
          Fifth Factor
        </Typography>
        <Typography sx={{ mb: 2 }}>Nowe Oblicze Faktoringu</Typography>
        <Typography variant='body2'>
          Mamy zaszczyc zaprezentować Państwu nową wersję serwisu do faktoringu. Dzięki naszemu systemowi.....
        </Typography>
      </CardContent>
      <Button size='large' variant='contained' sx={{ width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
        Czytaj Więcej
      </Button>
    </Card>
  )
}

export default CardAppleWatch
