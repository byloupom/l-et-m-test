import { Alert, Box } from '@mui/material'
import React from 'react'

export default function AlertNotifyLouis() {
  return (
    <Box mt={2}><Alert severity="info">
    N'oubliez pas de m'envoyer un SMS (06 25 10 09 32) ou{" "}
    <a href="mailto:viallet.javelot@gmail.com">email</a> une fois le
    règlement effectué pour que nous mettions à jour le status de
    paiement.
  </Alert></Box>
  )
}

