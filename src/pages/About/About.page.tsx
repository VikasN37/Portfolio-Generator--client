import { Box, Button, ButtonBase, Grid, Typography } from '@mui/material'
import { useStyles } from './style'
import { Avatar } from '../../components/Avatar'

export function About() {
  const { classes } = useStyles()
  return (
    <Grid container className={classes.mainContainer}>
      <Grid container item className={classes.avatarContainer}>
        <Avatar className={classes.avatar} />
      </Grid>
      <Grid container item className={classes.textContainer}>
        <Box>
          <Typography className={classes.heading}>Hi, I'm Vikas Niranjan 👋</Typography>
        </Box>
        <Box>
          <Typography className={classes.txt}>
            I am a Frontend Developer from Karachi. I have a passion for creating seamless,
            beautiful and creative websites, I have experience with various programming languages
            and specifically web technologies. Life is a continuous learning process, so work makes
            me more rigorous. I am currently available to hire .
          </Typography>
        </Box>
        {/* <Box width={'100%'}>
          <Button className={classes.btn}>Get in touch</Button>
        </Box> */}
      </Grid>
    </Grid>
  )
}
