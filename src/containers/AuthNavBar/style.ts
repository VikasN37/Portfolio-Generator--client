import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()({
  container: {
    width: '100%',
    padding: 'clamp(8px, 3px + 1vw, 15px)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightSection: {
    display: 'flex',
    gap: 'clamp(20px, 15px + 2vw, 45px)',
  },
  txt: {
    color: 'white',
    opacity: '0.7',
    fontSize: 'clamp(14px, 8px + 1vw, 22px)',
    ':hover': {
      opacity: '1',
      cursor: 'pointer',
    },
  },
  active: {
    opacity: '1',
    textDecoration: 'underline',
    textUnderlineOffset: '7px',
  },
  icon: {
    color: 'white',
  },
})
