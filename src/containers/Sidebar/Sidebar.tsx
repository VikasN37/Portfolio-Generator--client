import { Divider, Grid, Typography } from '@mui/material'
import { useStyles } from './style'
import { NavLink } from 'react-router-dom'
import { Avatar } from '../../components/Avatar'

export function Sidebar() {
  const { classes } = useStyles()
  return (
    <Grid container className={classes.mainContainer}>
      <Grid container item className={classes.profilePhoto}>
        <Avatar className={classes.avatar} />
      </Grid>
      <Typography className={classes.name}>Vikas Niranjan</Typography>
      <Divider className={classes.divider} />
      <Grid container item className={classes.linksSection}>
        <NavLink to='/portfolio' style={{ textDecoration: 'none' }}>
          <Typography className={classes.btnText}>About</Typography>
        </NavLink>
        <NavLink to='/portfolio/skills' style={{ textDecoration: 'none' }}>
          <Typography className={classes.btnText}>Skills</Typography>
        </NavLink>
        <NavLink to='/portfolio/projects' style={{ textDecoration: 'none' }}>
          <Typography className={classes.btnText}>Projects</Typography>
        </NavLink>
        <NavLink to='/portfolio/contact' style={{ textDecoration: 'none' }}>
          <Typography className={classes.btnText}>Contact</Typography>
        </NavLink>
      </Grid>
    </Grid>
  )
}
