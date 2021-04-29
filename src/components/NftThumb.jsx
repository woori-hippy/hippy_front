/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import {
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
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
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
