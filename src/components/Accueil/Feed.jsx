import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import Masonry from "@mui/lab/Masonry";
import InfosPratiques from "./InfosPratiques";
import Garderie from "./Garderie";
import Chants from "./Chants";
const Feed = () => {
  return (
    <Masonry columns={{ xs: 1, sm: 2 }} spacing={2}>
      <InfosPratiques />
      <Card
        id="nuitAuChateau"
        sx={{
          borderRadius: 6,
          padding: 1,
          boxShadow:
            "0px 11px 15px -7px rgb(53 53 128 / 10%), 0px 24px 38px 3px rgb(53 53 128 / 7%), 0px 9px 46px 8px rgb(53 53 128 / 6%)",
        }}
      >
        <CardContent>
          <Typography variant="h6" fontWeight={"bold"} gutterBottom>
            🏰 Dormir au château.
          </Typography>
          <Typography color="text.secondary">
            <Typography>
              Pour ceux qui ont demandé à dormir sur place, notez le nom de
              votre gîte et réglez votre nuit dès à présent.
            </Typography>
          </Typography>
        </CardContent>
        <CardActions>
          <Link to="/dormir" style={{ textDecoration: "none" }}>
            <Button variant="contained">Régler ma nuit</Button>
          </Link>
        </CardActions>
      </Card>
      <Card
        id="faireUnCadeau"
        sx={{
          borderRadius: 6,
          padding: 1,
          boxShadow:
            "0px 11px 15px -7px rgb(53 53 128 / 10%), 0px 24px 38px 3px rgb(53 53 128 / 7%), 0px 9px 46px 8px rgb(53 53 128 / 6%)",
        }}
      >
        <CardContent>
          <Typography variant="h6" fontWeight={"bold"} gutterBottom>
            🎁 Faire un cadeau ?
          </Typography>
          <Typography color="text.secondary">
            <Typography>
              Votre présence compte déjà pour beaucoup ! Mais si vous insistez
              un emplacement sera prévu pour déposer vos attentions. Vous pouvez
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
      <Garderie />
      <Chants />
      {/* zf */}  
      {/** <Card
        id="faireUnCadeau"
        sx={{
          mt: 4,
          boxShadow:
            "0px 11px 15px -7px rgb(53 53 128 / 20%), 0px 24px 38px 3px rgb(53 53 128 / 14%), 0px 9px 46px 8px rgb(53 53 128 / 12%)",
        }}
      >
          <CardContent>
          <Typography variant="h6" fontWeight={"bold"} gutterBottom>
            💒 Répéter les chants.
          </Typography>
          <Typography color="text.secondary">
            <Typography>
              Nous n'avons pas prévu de chorale car c'est VOUS TOUS la chorale ! N'hésitez pas à répéter les chants de messe avant de venir :) 
            </Typography>
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            target="_blank"
            href="https://www.millemercismariage.com/louis-marianne/liste.html"
          >
            Répéter
          </Button>
        </CardActions>
      </Card> **/}
      <Card
        id="Covoiturage"
        sx={{
          borderRadius: 6,
          padding: 1,
          boxShadow:
            "0px 11px 15px -7px rgb(53 53 128 / 10%), 0px 24px 38px 3px rgb(53 53 128 / 7%), 0px 9px 46px 8px rgb(53 53 128 / 6%)",
        }}
      >
        <CardContent>
          <Typography variant="h6" fontWeight={"bold"} gutterBottom>
          🚗 Covoiturage
          </Typography>
          <Typography color="text.secondary">
            <Typography>
              Si vous avez une voiture, inscrivez-vous en onglet 1. Si vous cherchez une place, direction l'onglet 2.
            </Typography>
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            target="_blank"
            href="https://docs.google.com/spreadsheets/d/1YkMHGOGQ9ZjkTPHOAZh-beYD-FpkuAffXn9F92-t-Zw/edit?usp=sharing"
          >
            S'inscrire
          </Button>
        </CardActions>
      </Card>
    </Masonry>
  );
};

export default Feed;
