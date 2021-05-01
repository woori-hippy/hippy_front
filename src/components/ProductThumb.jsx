import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const ProductThumb = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} css={{ width: "fit-content" }}>
      <Card
        sx={{
          width: "15rem",
          boxShadow: "2px 3px 10px 0px rgba(117,117,117,0.5)",
        }}
      >
        <CardActionArea>
          <Grid
            container
            justifyContent="flex-end"
            alignItems="center"
            sx={{ color: "gray" }}
          >
            <FavoriteBorderIcon
              sx={{
                "&: hover": {
                  transition: "all 0.1s",
                  color: "#F7209E",
                },
              }}
            />
            <Typography
              sx={{
                margin: "0.5rem 1rem 0.5rem 0.5rem",
              }}
            >
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
              <Grid container item alignItems="flex-end">
                <Grid item xs={9}>
                  <Typography
                    gutterBottom
                    sx={{
                      fontSize: "1.1rem",
                      margin: "0",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {product.name}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    component="p"
                    align="right"
                    sx={{ color: "gray" }}
                  >
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
                    {`${product.price}￦`}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default React.memo(ProductThumb);
