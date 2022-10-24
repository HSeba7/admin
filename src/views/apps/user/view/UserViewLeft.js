// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Select from '@mui/material/Select'
import Switch from '@mui/material/Switch'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import DialogTitle from '@mui/material/DialogTitle'
import FormControl from '@mui/material/FormControl'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import InputAdornment from '@mui/material/InputAdornment'
import LinearProgress from '@mui/material/LinearProgress'
import FormControlLabel from '@mui/material/FormControlLabel'
import DialogContentText from '@mui/material/DialogContentText'

// ** Icons Imports
import Check from 'mdi-material-ui/Check'
import Circle from 'mdi-material-ui/Circle'
import StarOutline from 'mdi-material-ui/StarOutline'

// ** Custom Components
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

// ** Styled <sup> component
const Sup = styled('sup')(({ theme }) => ({
  top: '0.2rem',
  left: '-0.6rem',
  position: 'absolute',
  color: theme.palette.primary.main
}))

// ** Styled <sub> component
const Sub = styled('sub')({
  fontWeight: 400,
  fontSize: '.875rem',
  lineHeight: '1.25rem',
  alignSelf: 'flex-end'
})

const roleColors = {
  admin: 'error',
  faktor: 'info',
  user: 'primary'
}

const statusColors = {
  active: 'success',
  pending: 'warning',
  inactive: 'secondary'
}

const UserViewLeft = ({ data }) => {
  // ** States
  const [openEdit, setOpenEdit] = useState(false)
  const [openPlans, setOpenPlans] = useState(false)

  // Handle Edit dialog
  const handleEditClickOpen = () => setOpenEdit(true)
  const handleEditClose = () => setOpenEdit(false)

  // Handle Upgrade Plan dialog
  const handlePlansClickOpen = () => setOpenPlans(true)
  const handlePlansClose = () => setOpenPlans(false)

  const renderUserAvatar = () => {
    if (data) {
      if (data.avatar.length) {
        return (
          <CustomAvatar alt='User Image' src={data.avatar} variant='rounded' sx={{ width: 120, height: 120, mb: 4 }} />
        )
      } else {
        return (
          <CustomAvatar
            skin='light'
            variant='rounded'
            color={data.avatarColor}
            sx={{ width: 120, height: 120, fontWeight: 600, mb: 4, fontSize: '3rem' }}
          >
            {getInitials(data.fullName)}
          </CustomAvatar>
        )
      }
    } else {
      return null
    }
  }
  if (data) {
    return (
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
            <CardContent sx={{ pt: 15, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
              {renderUserAvatar()}
              <Typography variant='h6' sx={{ mb: 4 }}>
                {data.fullName}
              </Typography>
              <CustomChip
                skin='light'
                size='small'
                label={data.role}
                color={roleColors[data.role]}
                sx={{
                  borderRadius: '4px',
                  fontSize: '0.875rem',
                  textTransform: 'capitalize',
                  '& .MuiChip-label': { mt: -0.25 }
                }}
              />
            </CardContent>


            <CardContent>
              <Typography variant='h6'>Dane Użytkownika</Typography>
              <Divider sx={{ mt: 4 }} />
              <Box sx={{ pt: 2, pb: 1 }}>
                <Box sx={{ display: 'flex', mb: 2.7 }}>
                  <Typography variant='subtitle2' sx={{ mr: 2, color: 'text.primary' }}>
                    Nazwa Użytkownika:
                  </Typography>
                  <Typography variant='body2'>@{data.username}</Typography>
                </Box>
                <Box sx={{ display: 'flex', mb: 2.7 }}>
                  <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Imię:</Typography>
                  <Typography variant='body2'>Jan</Typography>
                </Box>
                <Box sx={{ display: 'flex', mb: 2.7 }}>
                  <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Nazwisko:</Typography>
                  <Typography variant='body2'>Kowalski</Typography>
                </Box>
                <Box sx={{ display: 'flex', mb: 2.7 }}>
                  <Typography variant='subtitle2' sx={{ mr: 2, color: 'text.primary' }}>
                    Adres Email:
                  </Typography>
                  <Typography variant='body2'>{data.email}</Typography>
                </Box>
                <Box sx={{ display: 'flex', mb: 2.7 }}>
                  <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Numer Telefonu:</Typography>
                  <Typography variant='body2'>+1 {data.contact}</Typography>
                </Box>
                <Box sx={{ display: 'flex', mb: 2.7 }}>
                  <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Numer PESEL:</Typography>
                  <Typography variant='body2'>12345689</Typography>
                </Box>
                <Box sx={{ display: 'flex', mb: 2.7 }}>
                  <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Numer Dowodu:</Typography>
                  <Typography variant='body2'>CHA123321</Typography>
                </Box>
                
              </Box>
            </CardContent>

            <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button variant='contained' sx={{ mr: 2 }} onClick={handleEditClickOpen}>
                Edytuj
              </Button>
              <Button color='error' variant='outlined'>
                Usuń
              </Button>
            </CardActions>

            <Dialog
              open={openEdit}
              onClose={handleEditClose}
              aria-labelledby='user-view-edit'
              sx={{ '& .MuiPaper-root': { width: '100%', maxWidth: 650, p: [2, 10] } }}
              aria-describedby='user-view-edit-description'
            >
              <DialogTitle id='user-view-edit' sx={{ textAlign: 'center', fontSize: '1.5rem !important' }}>
                Edytuj Informacje
              </DialogTitle>
              <DialogContent>
                <DialogContentText variant='body2' id='user-view-edit-description' sx={{ textAlign: 'center', mb: 7 }}>
                  
                </DialogContentText>
                <form>
                  
                  <Grid container spacing={6}>
                  <Grid item xs={12} sm={6}>
                      <TextField fullWidth label='Imię' defaultValue='Jan' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label='Nazwisko' defaultValue='Kowalski' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth type='email' label='Adres Email' defaultValue={data.email} />
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label='Numer Telefonu' defaultValue={`+1 ${data.contact}`} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label='Numer PESEL' defaultValue='123456789' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label='Numer Dowodu' defaultValue='CHA123456' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel id='user-view-language-label'>Nadaj Rolę</InputLabel>
                        <Select
                          label='Nadaj Rolę'
                          defaultValue='Użytkownik'
                          id='user-view-language'
                          labelId='user-view-language-label'
                        >
                          <MenuItem value='English'>Użytkownik</MenuItem>
                          <MenuItem value='Spanish'>Faktor</MenuItem>
                          <MenuItem value='Portuguese'>Administrator</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                  
                </form>
              </DialogContent>
              <DialogActions sx={{ justifyContent: 'center' }}>
                <Button variant='contained' sx={{ mr: 1 }} onClick={handleEditClose}>
                  Zapisz
                </Button>
                <Button variant='outlined' color='secondary' onClick={handleEditClose}>
                  Anuluj
                </Button>
              </DialogActions>
            </Dialog>
          </Card>
        </Grid>

       
      </Grid>
    )
  } else {
    return null
  }
}

export default UserViewLeft
