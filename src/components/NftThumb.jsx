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

const NftThumb = ({ nft }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia sx={{ height: 200 }} image={nft.img} title={nft.title} />
        <CardContent>
          <Grid container>
            <Grid container item>
              <Grid item xs={8}>
                <Typography gutterBottom variant="h5" component="div">
                  {nft.title}
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
                  Amazing Burger
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography component="p" align="right">
                  1000원
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NftThumb;
