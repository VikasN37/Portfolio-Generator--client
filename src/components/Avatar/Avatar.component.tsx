import { Avatar as MuiAvatar } from '@mui/material'
import { useStyles } from './style'
import clsx from 'clsx'

interface AvatarType {
  width: 'string'
  height: 'string'
}

export function Avatar({ className }: AvatarType) {
  const { classes } = useStyles()
  return (
    <MuiAvatar
      alt='Remy Sharp'
      src='https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      className={clsx(classes.avatar, className)}
    />
  )
}
