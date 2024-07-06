import { Grid, IconButton, Typography, useMediaQuery } from '@mui/material'
import { useStyles } from './style'
import { useLocation } from 'react-router-dom'
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight'
import { useState } from 'react'
import clsx from 'clsx'
import { Sidebar } from '../Sidebar'
import { getActivePage } from '../../helper/ActivePage'

export function AuthNavBar() {
  const { classes } = useStyles()
  const activeTab = useLocation()
  console.log(activeTab.pathname)
  const isDown350 = useMediaQuery('(max-width:350px)')

  const [active, setActive] = useState(0)
  const [sidebar, setSidebar] = useState(false)

  getActivePage(setActive)

  console.log(isDown350)

  if (sidebar) {
    return <Sidebar />
  }

  return (
    <Grid container className={classes.container} flexDirection={'row'}>
      <Typography className={classes.txt}>Name</Typography>

      {isDown350 ? (
        <span onClick={() => setSidebar(true)}>
          <FormatAlignRightIcon className={classes.icon} />
        </span>
      ) : (
        <Grid item className={classes.rightSection}>
          <Typography className={clsx(classes.txt, active == 0 && classes.active)}>
            About
          </Typography>
          <Typography className={clsx(classes.txt, active == 1 && classes.active)}>
            Skills
          </Typography>
          <Typography className={clsx(classes.txt, active == 2 && classes.active)}>
            Projects
          </Typography>
          <Typography className={clsx(classes.txt, active == 3 && classes.active)}>
            Contact
          </Typography>
        </Grid>
      )}
    </Grid>
  )
}
