import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import Masonry from "@mui/lab/Masonry";

const Feed = () => {
  return (
    <Masonry columns={{ xs: 1, sm: 2 }} spacing={2}>
      <Card
        id="etreALHeure"
        sx={{
          mt: 6,
          boxShadow:
            "0px 11px 15px -7px rgb(53 53 128 / 20%), 0px 24px 38px 3px rgb(53 53 128 / 14%), 0px 9px 46px 8px rgb(53 53 128 / 12%)",
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
      <Card
        id="nuitAuChateau"
        sx={{
          boxShadow:
            "0px 11px 15px -7px rgb(53 53 128 / 20%), 0px 24px 38px 3px rgb(53 53 128 / 14%), 0px 9px 46px 8px rgb(53 53 128 / 12%)",
        }}
      >
        <CardContent>
          <Typography variant="h6" fontWeight={"bold"} gutterBottom>
            🏰 Dormir au château.
          </Typography>
          <Typography color="text.secondary">
            <Typography>Pour ceux qui ont demandé à dormir sur place, notez le nom de votre gite et réglez votre nuit dès à présent.</Typography>
          </Typography>
        </CardContent>
        <CardActions>
          <Link to="/l-et-m/dormir" style={{ textDecoration: "none" }}>
            <Button variant="contained">Régler ma nuit</Button>
          </Link>
        </CardActions>
      </Card>
      <Card
        id="faireUnCadeau"
        sx={{
          mt: 4,
          boxShadow:
            "0px 11px 15px -7px rgb(53 53 128 / 20%), 0px 24px 38px 3px rgb(53 53 128 / 14%), 0px 9px 46px 8px rgb(53 53 128 / 12%)",
        }}
      >
        <CardContent>
          <Typography variant="h6" fontWeight={"bold"} gutterBottom>
            🎁 Faire un cadeau ?
          </Typography>
          <Typography color="text.secondary">
            <Typography>
              Vote présence compte déjà pour beaucoup ! Mais si vous insistez un
              emplacement sera prévu pour déposer vos attentions. Vous pouvez
              également parcourir notre liste de mariage.
            </Typography>
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            target="_blank"
            href="https://www.millemercismariage.com/louis-marianne/liste.html"
          >
            Voir la liste
          </Button>
        </CardActions>
      </Card>
    </Masonry>
  );
};

export default Feed;
