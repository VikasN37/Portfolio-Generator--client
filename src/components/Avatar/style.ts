import { Tss } from 'tss-react'
import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()({
  avatar: {
    width: 'clamp(100px, 60px + 10vw + 2vh, 300px)',
    height: 'clamp(100px, 60px + 10vw + 2vh, 300px)',
    border: '2px solid red',
  },
})
