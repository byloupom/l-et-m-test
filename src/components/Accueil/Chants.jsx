import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

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
            🎵 Répéter le chant de communion
          </Typography>
          <Typography color="text.secondary">
            <Typography gutterBottom>
              Le chant de communion n'est pas simple, n'hésitez pas à le
              travailler cet été !
            </Typography>
            <Typography sx={{}}>
              <Box
                sx={{
                  backgroundColor: "#f3f3ff",
                  borderRadius: "16px",
                  pl: 1.5,
                }}
              >
                "A Voz Do Meu Amado (La voix du bien-aimé)"
              </Box>
              <List>
                <ListItem>
                  <Link
                    target="_blank"
                    href="https://drive.google.com/file/d/1xC-1TwQioQi3cgSU0DUcLaBPtxcQ51J4/view?usp=sharing"
                  >
                    🎼 Partition
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    target="_blank"
                    href="https://www.youtube.com/watch?v=jlaJnaXQzEU&t=1s"
                  >
                    ▶️ Vidéo
                  </Link>
                </ListItem>
              </List>
            </Typography>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
