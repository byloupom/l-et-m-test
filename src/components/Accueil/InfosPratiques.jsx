import React from 'react'
import {
    Card,
    CardContent,
    Grid,
    Typography,
  } from "@mui/material";
  import { Link as MuiLink } from "@mui/material";


export default function InfosPratiques() {
  return (
    <div><Card
    id="etreALHeure"
    sx={{
      borderRadius: 6,
      padding: 1,
      boxShadow:
        "0px 11px 15px -7px rgb(53 53 128 / 10%), 0px 24px 38px 3px rgb(53 53 128 / 7%), 0px 9px 46px 8px rgb(53 53 128 / 6%)",
    }}
  >
    <CardContent>
      <Typography variant="h6" fontWeight={"bold"} gutterBottom>
        🕦 Infos pratiques
      </Typography>
      <Typography color="text.secondary">
        <Grid container xs={12} rowSpacing={2} columnSpacing={1} mt={1}>
          <Grid item xs={2}>
            <Typography>15h30</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>Début de la messe</Typography>
          </Grid>
          <Grid item xs={6}>
            <MuiLink
              href="https://goo.gl/maps/ptxArSGZE49tfAR7A"
              color="text.secondary"
              underline="hover"
              target="_blank"
              rel="noopener"
            >
              <Typography>Eglise de Germignonville,</Typography>
              <Typography>Place de la Herse,</Typography>
              <Typography>28140 Eole-en-Beauce</Typography>
            </MuiLink>
            <Typography>🚗 Se garer dans la rue</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>18h00</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>Début du cocktail</Typography>
          </Grid>
          <Grid item xs={6}>
            <MuiLink
              href="https://goo.gl/maps/H8YL4ExSUXXLQnZC8"
              color="text.secondary"
              underline="hover"
              target="_blank"
              rel="noopener"
            >
              <Typography>Orangerie de Cambray,</Typography>{" "}
              <Typography>28140 Eole-en-Beauce</Typography>
            </MuiLink>
            <Typography>🚗 Parking réservé au mariage</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>10h30 /13h00</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>Brunch</Typography>
          </Grid>
          <Grid item xs={6}>
            <MuiLink
              href="https://goo.gl/maps/H8YL4ExSUXXLQnZC8"
              color="text.secondary"
              underline="hover"
              target="_blank"
              rel="noopener"
            >
              <Typography>Pour ceux qui dorment sur place.</Typography>

            </MuiLink>

          </Grid>
        </Grid>
      </Typography>
    </CardContent>
  </Card></div>
  )
}
