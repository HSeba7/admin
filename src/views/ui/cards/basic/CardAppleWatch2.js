// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const CardAppleWatch2 = () => {
  return (
    <Card>
      <CardMedia sx={{ height: 140 }} image='/images/cards/apple-watch2.png' />
      <CardContent sx={{ p: theme => `${theme.spacing(4, 5)} !important` }}>
        <Typography variant='h6' sx={{ mb: 2 }}>
          Oferta Specjalna
        </Typography>
        <Typography sx={{ mb: 2 }}>Dla pierwszych 100 klientów</Typography>
        <Typography variant='body2'>
          Wyjątkowa promocja. Dla pierwszych 100 klientów, specjalne preferencyjne warunki faktoringowe. Wystarczy złożyć.....
        </Typography>
      </CardContent>
      <Button size='large' variant='contained' sx={{ width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
        Czytaj Więcej
      </Button>
    </Card>
  )
}

export default CardAppleWatch2
