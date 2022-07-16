import { Check, Payment } from "@mui/icons-material";
import {
  TableContainer,
  Typography,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  Box,
  Stack,
  Card,
  CardContent,
} from "@mui/material";
import React from "react";

function createData(initiales, gite, lit, prix, reglement) {
  return { initiales, gite, lit, prix, reglement };
}

const rows = [
  createData(
    "LV & MJ",
    "Gite du chasseur",
    "Chambre 3",
    "24€",
    <Chip label="Réglé" icon={<Check fontSize="small" />} />
  ),
  createData(
    "AC & MC + VC",
    "Gite du chasseur",
    "Chambre 1",
    "36€",
    <Chip
      label="A payer"
      icon={<Payment fontSize="small" />}
      color="secondary"
    />
  ),
  createData(
    "AC & MC + VC",
    "Gite du chasseur",
    "Chambre 1",
    "36€",
    <Chip
      label="A payer"
      icon={<Payment fontSize="small" />}
      color="secondary"
    />
  ),
  createData(
    "AC & MC + VC",
    "Gite du chasseur",
    "Chambre 1",
    "36€",
    <Chip
      label="A payer"
      icon={<Payment fontSize="small" />}
      color="secondary"
    />
  ),
  createData(
    "AC & MC + VC",
    "Gite du chasseur",
    "Chambre 1",
    "36€",
    <Chip
      label="A payer"
      icon={<Payment fontSize="small" />}
      color="secondary"
    />
  ),
  createData(
    "AC & MC + VC",
    "Gite du chasseur",
    "Chambre 1",
    "36€",
    <Chip
      label="A payer"
      icon={<Payment fontSize="small" />}
      color="secondary"
    />
  ),
  createData(
    "AC & MC + VC",
    "Gite du chasseur",
    "Chambre 1",
    "36€",
    <Chip
      label="A payer"
      icon={<Payment fontSize="small" />}
      color="secondary"
    />
  ),
  createData(
    "AC & MC + VC",
    "Gite du chasseur",
    "Chambre 1",
    "36€",
    <Chip
      label="A payer"
      icon={<Payment fontSize="small" />}
      color="secondary"
    />
  ),
];

export default function Dormir() {
  return (
    <div>
      <Typography gutterBottom>
        Pour ceux qui ont demandé à dormir sur place, notez le nom de votre gite
        et réglez votre nuit dès à présent.
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Vos initiales</TableCell>
              <TableCell>Votre gite</TableCell>
              <TableCell>Votre lit</TableCell>
              <TableCell align="right">Prix</TableCell>
              <TableCell>Règlement</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.initiales}
                </TableCell>
                <TableCell>{row.gite}</TableCell>
                <TableCell>{row.lit}</TableCell>
                <TableCell align="right">{row.prix}</TableCell>
                <TableCell>{row.reglement}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box id="informations de paiement" mt={4}>
        <Typography variant="h4" gutterBottom>Informations de paiement</Typography>
        <Typography gutterBottom>
          Mr. de Cambray, propriétaire des lieux nous a demandé de payer le
          logement pour tout le monde, par simplicité. Merci d'adresser le prix
          de votre hébergement à Louis Viallet.
        </Typography>
        <Stack
          direction="row"
          alignItems="flexStart"
          justifyContent="space-evenly"
          spacing={2}
          mt={4}
          mb={15}
        >
          <Card
            id="virement"
            sx={{
              boxShadow:
                "0px 11px 15px -7px rgb(53 53 128 / 20%), 0px 24px 38px 3px rgb(53 53 128 / 14%), 0px 9px 46px 8px rgb(53 53 128 / 12%)",
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Par virement
              </Typography>
              <Typography gutterBottom>
          RIB: XXX
        </Typography>
            </CardContent>
          </Card>
          <Card
            id="paypal"
            sx={{
              boxShadow:
                "0px 11px 15px -7px rgb(53 53 128 / 20%), 0px 24px 38px 3px rgb(53 53 128 / 14%), 0px 9px 46px 8px rgb(53 53 128 / 12%)",
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Par PayPal
              </Typography>
              <Typography gutterBottom>
          Payer via Paypal
        </Typography>
            </CardContent>
          </Card>
          <Card
            id="lydia"
            sx={{
              boxShadow:
                "0px 11px 15px -7px rgb(53 53 128 / 20%), 0px 24px 38px 3px rgb(53 53 128 / 14%), 0px 9px 46px 8px rgb(53 53 128 / 12%)",
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Par Lydia
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </Box>
    </div>
  );
}
