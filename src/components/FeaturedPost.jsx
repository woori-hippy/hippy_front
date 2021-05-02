import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    display: "flex",
    backgroundSize: "cover",
    height: "15rem",
    alignItems: "center",
  },
  cardDetails: {
    flex: 1,
    textShadow: "0px 0px 18px rgba(0, 0, 0, 1)",
    color: "white",
  },
  cardMedia: {
    width: 160,
  },
});

function FeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea>
        <Link to="/events">
          <Card
            className={classes.card}
            sx={{ backgroundImage: `url(${post.image})` }}
          >
            <div className={classes.cardDetails}>
              <CardContent>
                <Typography component="h2" variant="h5">
                  {post.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  paragraph
                  color="#8C8C8C"
                  fontSize="0.8rem"
                  pr={40}
                >
                  {post.description}
                </Typography>
                <Typography variant="subtitle1" color="white">
                  Go Event
                </Typography>
              </CardContent>
            </div>
            {/* <Hidden smDown>
              <CardMedia
                className={classes.cardMedia}
                image={post.image}
                title={post.imageText}
              />
            </Hidden> */}
          </Card>
        </Link>
      </CardActionArea>
    </Grid>
  );
}

export default FeaturedPost;
