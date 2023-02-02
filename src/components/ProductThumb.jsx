import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ProductThumb = ({ product }) => {
  const price =
    product.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") +
    "원";
  return (
    <Link to={`/product/${product.id}`}>
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
              0
            </Typography>
          </Grid>
          <CardMedia
            sx={{ height: 250, backgroundSize: "contain" }}
            image={product.src}
            title={product.name}
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
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    {product.userId}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography component="p" align="right">
                    {price}
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
