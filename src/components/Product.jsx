import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Product = ({ product }) => {
  return (
    <React.Fragment>
      <Header />
      <Container maxWidth="lg">
        <Grid container spacing={4} pt={2} sx={{ height: "30rem" }}>
          <Grid
            item
            xs={12}
            md={4}
            alignItems="center"
            justifyContent="center"
            sx={{
              width: "25rem",
              height: "25rem",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${product.src})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
          </Grid>
          <Grid item container xs={12} md={8} direction="column" spacing={4}>
            <Grid item container spacing={2} sx={{ marginTop: "1rem" }}>
              <Grid item container direction="column" xs={10}>
                <Grid item>
                  <Typography variant="h2">{product.name}</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="p">{product.owner_id}</Typography>
                </Grid>
              </Grid>
              <Grid container item xs={1} alignItems="center">
                <FavoriteBorderIcon
                  fontSize="large"
                  sx={{
                    cursor: "pointer",
                    "&: hover": {
                      transition: "all 0.1s",
                      color: "#F7209E",
                    },
                  }}
                />
              </Grid>
              <Grid container item xs={1} alignItems="center">
                <ShareIcon fontSize="large" />
              </Grid>
            </Grid>
            <Grid item spacing={2}>
              <Typography variant="h3">{product.price}</Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" disableElevation>
                구매
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default Product;
