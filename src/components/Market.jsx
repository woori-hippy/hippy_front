import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ProductThumb from "./ProductThumb";
import SkeletonThumb from "./SkeletonThumb";

const activeTypo = (sort, state, title) => {
  return sort === state ? (
    <Typography sx={{ color: "#E1315A" }}>{title}</Typography>
  ) : (
    <Typography sx={{ color: "inherit" }}>{title}</Typography>
  );
};

const Market = ({ products, loading }) => {
  const [tag, setTag] = useState("All");
  const [sort, setSort] = useState("latest");

  useEffect(() => {
    console.log(loading);
  }, [loading]);
  const handleTagChange = (event) => {
    setTag(event.target.value);
    console.log(sort);
  };

  return (
    <React.Fragment>
      <Header />
      <Grid container>
        <Grid
          item
          xs={2}
          sx={{ borderRight: "1px solid #E0E0E0", paddingRight: "0.2rem" }}
        >
          <List component="nav" aria-label="main mailbox folders">
            <ListItem button>
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="My Product" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <FavoriteBorderIcon />
              </ListItemIcon>
              <ListItemText primary="Favorite" />
            </ListItem>
          </List>
          <Divider />
          <List component="nav" aria-label="main mailbox folders">
            <FormControl component="fieldset" sx={{ width: "100%" }}>
              <ListItem>
                <FormLabel component="legend">Tag</FormLabel>
              </ListItem>
              <RadioGroup
                aria-label="Tag"
                name="Tag"
                value={tag}
                onChange={handleTagChange}
              >
                <ListItem
                  button
                  justifyContent="center"
                  alignItems="center"
                  sx={{ padding: "0" }}
                >
                  <FormControlLabel
                    value="All"
                    control={<Radio />}
                    label="All"
                    sx={{ width: "100%", margin: "0", padding: "0.5rem" }}
                  />
                </ListItem>

                <ListItem
                  button
                  justifyContent="center"
                  alignItems="center"
                  sx={{ padding: "0" }}
                >
                  <FormControlLabel
                    value="Digital Art"
                    control={<Radio />}
                    label="Digital Art"
                    sx={{ width: "100%", margin: "0", padding: "0.5rem" }}
                  />
                </ListItem>

                <ListItem
                  button
                  justifyContent="center"
                  alignItems="center"
                  sx={{ padding: "0" }}
                >
                  <FormControlLabel
                    value="Animation"
                    control={<Radio />}
                    label="Animation"
                    sx={{ width: "100%", margin: "0", padding: "0.5rem" }}
                  />
                </ListItem>

                <ListItem
                  button
                  justifyContent="center"
                  alignItems="center"
                  sx={{ padding: "0" }}
                >
                  <FormControlLabel
                    value="Virtual Reality"
                    control={<Radio />}
                    label="Virtual Reality"
                    sx={{ width: "100%", margin: "0", padding: "0.5rem" }}
                  />
                </ListItem>
              </RadioGroup>
            </FormControl>
          </List>
        </Grid>
        <Grid container item xs={10} sx={{ padding: "0 1rem" }}>
          <Grid
            xs={12}
            sx={{ margin: "0.5rem 0 2rem 0", backgroundColor: "#F0F0F0" }}
          >
            <Button color="inherit" onClick={() => setSort("latest")}>
              {activeTypo(sort, "latest", "최근 업데이트 순")}
            </Button>
            <Button color="inherit" onClick={() => setSort("star")}>
              {activeTypo(sort, "star", "좋아요 순")}
            </Button>
            <Button color="inherit" onClick={() => setSort("lowPrice")}>
              {activeTypo(sort, "lowPrice", "낮은 가격 순")}
            </Button>
            <Button color="inherit" onClick={() => setSort("highPrice")}>
              {activeTypo(sort, "highPrice", "높은 가격 순")}
            </Button>
            <Button color="inherit" onClick={() => setSort("user")}>
              {activeTypo(sort, "user", "판매자 순")}
            </Button>
          </Grid>
          <Box
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(15rem, max-content))",
              gridGap: "1rem",
              justifyContent: "center",
              padding: "initial",
            }}
          >
            {loading
              ? [1, 2, 3, 4, 5, 6, 7, 8].map(() => <SkeletonThumb />)
              : products.map((product) =>
                  product.tag === tag ? (
                    <Box>
                      <ProductThumb product={product} />
                    </Box>
                  ) : tag === "All" ? (
                    <ProductThumb product={product} />
                  ) : null
                )}
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </React.Fragment>
  );
};

export default Market;
