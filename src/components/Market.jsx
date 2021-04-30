import {
  Box,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ProductThumb from "./ProductThumb";

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const Market = ({ products }) => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (event) => {
    setTag(event.target.value);
  };

  return (
    <React.Fragment>
      <Header />
      <Grid container>
        <Grid item xs={2}>
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
        <Grid container item xs={10} sx={{ padding: "1rem" }}>
          <Box
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(210px, max-content))",
              gridGap: "16px",
              justifyContent: "center",
              padding: "initial",
            }}
          >
            {products.map((product) =>
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
