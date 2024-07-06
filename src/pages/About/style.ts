import { Tss } from 'tss-react'
import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()((theme) => ({
  mainContainer: {
    height: '100%',
    width: '65%',
    flexDirection: 'row',
    [theme.breakpoints.down(950)]: {
      width: '95%',
    },
    [theme.breakpoints.down(700)]: {
      display: 'flex',
      flexDirection: 'column',
      gap: '14px',
    },
  },
  avatarContainer: {
    width: '45%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItem: 'center',
    height: '100%',
    [theme.breakpoints.down(700)]: {
      flexDirection: 'row',
      width: '100%',
      height: 'auto',
    },
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '28px',
    width: '55%',
    height: '100%',
    [theme.breakpoints.down(700)]: {
      width: '100%',
      height: '50%',
    },
  },
  heading: {
    fontSize: 'clamp(17px, 13px + 2vw, 38px)',
    color: 'white',
    textAlign: 'center',
  },
  txt: {
    fontSize: 'clamp(12px, 10px + 1vw, 21px)',
    color: 'white',
    textAlign: 'center',
  },
  avatar: {
    width: 'clamp(170px, 150px + 5vw + 5vh, 300px)',
    height: 'clamp(170px, 150px + 5vw + 5vh, 300px)',
  },
  btn: {
    width: '100%',
    height: '40px',
    fontSize: '22px',
    color: 'white',
  },
  btnText: {},
}))
