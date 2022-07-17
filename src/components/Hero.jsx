import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import betise from "../images/betise.png";
const Hero = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} mt={6} mb={8}>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Box>
              <img src={betise} alt="Bétise de Cambray" />
            <Typography
              variant="h3"
              color= "text.primary"
              sx={{
                fontFamily: "Berkshire Swash",
                fontWeight: "bold",
                mt: 3,
              }}
            >
              Les Bétises de Cambray
            </Typography>
          </Box>
          <Typography color="text.secondary" sx={{ mt: 1, fontFamily: "Monospace" }}>
            Mariage de Marianne et Louis - 10 Sept. 2022
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
