/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";

const NftThumb = ({ product }) => {
  return (
    <Card
      sx={{
        margin: "0.5rem 0 0 0.5rem",
        maxWidth: 345,
        "&:hover": {
          transition: "all 0.5s",
          boxShadow: "5px 5px 15px 3px rgba(201,201,201,0.5)",
        },
      }}
    >
      <CardActionArea>
        <Grid container justifyContent="flex-end" alignItems="center">
          <FavoriteBorderIcon />
          <Typography sx={{ margin: "0.5rem 1rem 0.5rem 0.5rem" }}>
            {product.star}
          </Typography>
        </Grid>
        <CardMedia
          sx={{ height: 250, backgroundSize: "contain" }}
          image={product.src}
          title={product.title}
        />
        <CardContent>
          <Grid container>
            <Grid container item>
              <Grid item xs={8}>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography component="p" align="right">
                  가격
                </Typography>
              </Grid>
            </Grid>
            <Grid container item>
              <Grid item xs={8}>
                <Typography variant="body2" color="text.secondary">
                  {product.author}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography component="p" align="right">
                  {`${product.price}원`}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default React.memo(NftThumb);
