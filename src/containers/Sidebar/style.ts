import { Tss } from 'tss-react'
import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()((theme) => ({
  mainContainer: {
    width: '100vw',
    padding: '10px 25px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '15px',
  },
  profilePhoto: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 'clamp(100px, 60px + 10vw + 2vh, 300px)',
    height: 'clamp(100px, 60px + 10vw + 2vh, 300px)',
    border: '2px solid red',
  },
  divider: {
    color: 'white',
    backgroundColor: 'white',
    height: '1px',
    width: '95%',
  },
  name: {
    fontSize: 'clamp(15px, 12px + 2vw, 32px)',
    color: 'white',
  },
  linksSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12px',
  },
  links: {},
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 'clamp(16px, 11px + 1.5vw, 26px)',
    textDecoration: 'none',
  },
}))
