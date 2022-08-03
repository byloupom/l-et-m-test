import React from "react";
import {
  Card,
  CardContent,
  List,
  ListItem,
  Typography,
} from "@mui/material";

export default function Garderie() {
  return (
    <div>
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
            🚼 Garderie
          </Typography>
          <Typography color="text.secondary">
            <Typography>
              4 babysitters vous aideront à garder vos enfants de 18h00 à 02h00
              du matin, ils restent néanmoins sous votre responsabilité :{" "}
              <List sx={{ listStyleType: "disc" }}>
                <ListItem sx={{ display: "list-item", ml: 2 }}>
                  Les 10 enfants auront un buffet dédié pendant le cocktail. Ils
                  ne sont pas prévus à table pour le dîner.
                  <Typography sx={{ fontSize: "14px", fontStyle: "italic" }}>
                    Inscrits: Emmanuel, Zita, Louis, Eleana, Lorik, Victoire, Philippe, Adèle, Faustine et Léon.
                  </Typography>
                </ListItem>
                <ListItem sx={{ display: "list-item", ml: 2 }}>
                  Pour les 6 bébés, il revient aux parents de les nourrir et
                  d'installer leur lit parapluie dans la garderie.
                  <Typography sx={{ fontSize: "14px", fontStyle: "italic" }}>
                    Inscrits: Victor, André, Alban, Félix, Evan et Séverin.
                  </Typography>
                </ListItem>
              </List>
            </Typography>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
