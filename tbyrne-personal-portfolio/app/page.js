import Image from 'next/image'
import styles from './page.module.css'
import { Button, Typography } from '@mui/material';

export default function Home() {
  return (
    <main>
      <Typography variant="h1">Welcome to Next.js with Material-UI!</Typography>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </main>
  )
}
