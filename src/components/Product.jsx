import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Product = ({ product, user, handleBuyProduct }) => {
  const price = product.price.toLocaleString("ko") + "원";

  const isMobile = useMediaQuery("(max-width: 568px)");
  return (
    <React.Fragment>
      <Header user={user} />
      <Container maxWidth="lg">
        <Grid container spacing={4} pt={2}>
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
          <Grid
            item
            container
            xs={10}
            md={7}
            direction="column"
            spacing={4}
            alignItems="flex-end"
            sx={{ margin: "0 auto", height: "25rem" }}
          >
            <Grid
              item
              container
              spacing={!isMobile && 2}
              sx={{ marginTop: "1rem" }}
            >
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
            <Grid item spacing={!isMobile && 2}>
              <Typography variant="h4">{price}</Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                disableElevation
                onClick={handleBuyProduct}
                sx={{ color: "white", backgroundColor: "#1B7EA6" }}
              >
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
