import { Check, Payment, Smartphone } from "@mui/icons-material";
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
  Button,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Alert from "@mui/material/Alert";

export default function Dormir() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Typography gutterBottom mb={2}>
        Pour ceux qui ont demandé à dormir sur place, notez le nom de votre gite
        et réglez votre nuit dès à présent.
      </Typography>
      {/* /////////////////////////// */}
      {/* // START Table */}
      {/* /////////////////////////// */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Vos prénoms</TableCell>
              <TableCell>Votre gite</TableCell>
              <TableCell>Votre lit</TableCell>
              <TableCell align="right">Prix</TableCell>
              <TableCell>Règlement</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Louis & Marianne</TableCell>
              <TableCell>Gîte du chasseur</TableCell>
              <TableCell>Chambre 1</TableCell>
              <TableCell align="right">24€</TableCell>
              <TableCell>
                <Chip label="Réglé" icon={<Check />} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Maëlle & Elvire</TableCell>
              <TableCell>Gîte du chasseur</TableCell>
              <TableCell>Chambre 1</TableCell>
              <TableCell align="right">24€</TableCell>
              <TableCell>
                <Chip
                  label="Payer maintenant"
                  onClick={handleClick}
                  color="primary"
                  icon={<Payment />}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      {/* /////////////////////////// */}
      {/* // END Table */}
      {/* /////////////////////////// */}
      {/* /////////////////////////// */}
      {/* // START Dialog Modal OnClick */}
      {/* /////////////////////////// */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"🏰 Régler votre nuit au château"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" gutterBottom>
            M. de Cambray, propriétaire des lieux, nous a demandé de payer le
            logement pour tout le monde, par simplicité. Merci d'adresser le
            prix de votre lit à Louis Viallet en choissant un mode de paiement
            ci-dessous.
          </DialogContentText>
          <Alert severity="info">
            N'oubliez pas de m'envoyer un SMS (06 25 10 09 32) ou{" "}
            <a href="mailto:viallet.javelot@gmail.com">email</a> une fois le
            règlement effectué pour que nous mettions à jour le status de
            paiement.
          </Alert>
          {/* // START Accordion */}
          <Box mt={2}>
            <Accordion sx={{boxShadow:
            "0px 11px 15px -7px rgb(53 53 128 / 20%), 0px 24px 38px 3px rgb(53 53 128 / 14%), 0px 9px 46px 8px rgb(53 53 128 / 12%)",}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography fontWeight={"bold"}>Payer par virement</Typography>
              </AccordionSummary>
              <AccordionDetails>
              <Typography mb={2}>
                  Rien de plus classique ! Voici les informations de paiement:
                </Typography>
                <Typography fontWeight={"bold"} fontSize={13}>
                  Titulaire du compte
                </Typography>
                <Typography fontSize={13}>M. VIALLET Louis</Typography>
                <Typography fontSize={13}>14 RUE DE STRASBOURG</Typography>
                <Typography fontSize={13}>92600 ASNIERES SUR SEINE</Typography>
                <Typography fontWeight={"bold"} mt={2} fontSize={13}>
                  IBAN
                </Typography>
                <Typography fontSize={13}>FR76 4061 8802 9700 0400 0776 919</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{boxShadow:
            "0px 11px 15px -7px rgb(53 53 128 / 20%), 0px 24px 38px 3px rgb(53 53 128 / 14%), 0px 9px 46px 8px rgb(53 53 128 / 12%)",}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography fontWeight={"bold"}>Payer par Paypal </Typography>
                <Box pl={1}>
                  <img
                    src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg"
                    border="0"
                    alt="PayPal Logo"
                    height="18px"
                  />
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography mb={2}>
                  Cliquez sur "Ouvrir Paypal" puis cliquez sur "Envoyer".
                  Saisissez le montant de votre chambre, et voilà !
                </Typography>
                <Button
                  href="https://paypal.me/vialletlouis"
                  variant="contained"
                  target="_blank"
                >
                  Ouvrir Paypal
                </Button>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{boxShadow:
            "0px 11px 15px -7px rgb(53 53 128 / 20%), 0px 24px 38px 3px rgb(53 53 128 / 14%), 0px 9px 46px 8px rgb(53 53 128 / 12%)",}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography fontWeight={"bold"}>Payer par Lydia</Typography>
                <Smartphone ml={2} />
              </AccordionSummary>
              <AccordionDetails>
              <Typography mb={2}>
              Si vous avez Lydia, vous n’avez qu’à taper le numéro de Louis (06 25 10 09 32), ainsi que le montant à envoyer. C’est tout ! 
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
          {/* // END Accordion */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Terminé !
          </Button>
        </DialogActions>
      </Dialog>
      {/* /////////////////////////// */}
      {/* // END Dialog Modal OnClick */}
      {/* /////////////////////////// */}
      
    </div>
  );
}
