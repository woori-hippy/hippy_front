import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Skeleton,
} from "@material-ui/core";
import React from "react";

const SkeletonThumb = () => {
  return (
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
          <Skeleton
            variant="circular"
            animation="wave"
            width="1.5rem"
            height="1.5rem"
          />
        </Grid>
        <Skeleton variant="rectangular" animation="wave" sx={{ height: 250 }} />
        <CardContent>
          <Grid container>
            <Grid container item alignItems="flex-end">
              <Grid item xs={12}>
                <Skeleton variant="text" animation="wave" />
              </Grid>
            </Grid>
            <Grid container item>
              <Grid item xs={12}>
                <Skeleton variant="text" animation="wave" />
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default React.memo(SkeletonThumb);
