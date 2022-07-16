import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";

const Hero = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            sx={{ fontFamily: "Berkshire Swash", fontWeight: "bold", mt: 8 }}
          >
            Louis & Marianne
          </Typography>
          <Typography sx={{ mt: 1, color: "#B0B0BB" }}>
            10 Sept. 2022
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card
            sx={{
              boxShadow:
                "0px 11px 15px -7px rgb(53 53 128 / 20%), 0px 24px 38px 3px rgb(53 53 128 / 14%), 0px 9px 46px 8px rgb(53 53 128 / 12%)",
            }}
          >
            <CardContent>
              <Typography variant="h6" fontWeight={"bold"} gutterBottom>
                🏰 Dormir au château
              </Typography>
              <Typography color="text.secondary">
                <Typography>Veuillez vous acquitter du paiement</Typography>
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" href="./NuitAuChateau.js">Régler ma nuit</Button>
            </CardActions>
          </Card>
          <Card
            sx={{
              mt: 4,
              boxShadow:
                "0px 11px 15px -7px rgb(53 53 128 / 20%), 0px 24px 38px 3px rgb(53 53 128 / 14%), 0px 9px 46px 8px rgb(53 53 128 / 12%)",
            }}
          >
            <CardContent>
              <Typography variant="h6" fontWeight={"bold"} gutterBottom>
                🎁 Vous voulez faire un cadeau ?
              </Typography>
              <Typography color="text.secondary">
                <Typography>
                  Vote présence compte déjà pour beaucoup ! Mais si vous
                  insistez un emplacement sera prévu pour déposer vos
                  attentions. Vous pouvez également parcourir notre liste de
                  mariage.
                </Typography>
              </Typography>
            </CardContent>
            <CardActions>
              <Button>Voir la liste</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card
            sx={{
              mt: 6,
              boxShadow:
                "0px 11px 15px -7px rgb(53 53 128 / 20%), 0px 24px 38px 3px rgb(53 53 128 / 14%), 0px 9px 46px 8px rgb(53 53 128 / 12%)",
            }}
          >
            <CardContent>
              <Typography variant="h6" fontWeight={"bold"} gutterBottom>
                🕦 Déroulé de la journée
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
                    <Typography>Eglise de Gemignonville,</Typography>
                    <Typography>Place de la Herse,</Typography>
                    <Typography>28140 Eole-en-Beauce</Typography>
                    <Typography>🚗 Se garer dans la rue</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography>18h00</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography>Début du cocktail</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>Orangerie de Cambray,</Typography>{" "}
                    <Typography>28140 Eole-en-Beauce</Typography>
                    <Typography>🚗 Parking réservé au mariage</Typography>
                  </Grid>
                </Grid>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
