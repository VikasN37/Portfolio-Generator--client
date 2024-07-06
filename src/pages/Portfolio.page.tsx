import { Grid } from '@mui/material'
import { AuthNavBar } from '../containers/AuthNavBar'
import { Outlet } from 'react-router-dom'

export function Portfolio() {
  return (
    <Grid container width={'100vw'} height={'100vh'}>
      <AuthNavBar />
      <Grid container height={'80%'} justifyContent={'center'} minHeight={'500px'}>
        <Outlet />
      </Grid>
    </Grid>
  )
}
