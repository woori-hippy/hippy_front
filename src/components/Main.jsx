import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import PaletteIcon from "@material-ui/icons/Palette";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost.jsx";
import Footer from "./Footer.jsx";
import {
  Box,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
  makeStyles,
  Paper,
  Stack,
  Tabs,
  Typography,
} from "@material-ui/core";
import { fontSize } from "@material-ui/system";
import ProductThumb from "./ProductThumb";

const mainFeaturedPost = {
  title: "share your piece",
  description: "희귀한 디지털 아이템을 거래 또는 탐색해보세요",
  image:
    "https://www.christies.com/img/LotImages/2021/NYR/2021_NYR_20447_0001_001(beeple_everydays_the_first_5000_days034733).jpg?mode=max",
  imageText: "main image description",
};

const featuredPosts = [
  {
    title: "METAPUNKS",
    description: "Collect 1/1s from Panagiotis Archontis.",
    image:
      "https://storage.opensea.io/static/promocards/metapunks-promocard.png",
  },
  {
    title: "Golden State Warriors NFT",
    description:
      "Commemorating the Warriors NBA championships & most iconic games.",
    image:
      "https://storage.opensea.io/static/promocards/goldenstate-promocards.jpeg",
  },
];

export default function Main({ products, onCreate, onDelete }) {
  return (
    <React.Fragment>
      <Header title="Hippy" />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          {["Digital Art", "Animation", "Virtual Reality"].map((tag) => (
            <Box>
              <Grid
                container
                sx={{ borderBottom: "1px solid #E6E6E6", margin: "1.5rem 0" }}
              >
                <Grid item xs={8}>
                  <Typography component="h2" sx={{ fontSize: "1.5rem" }}>
                    {tag}
                  </Typography>
                </Grid>
                <Grid
                  container
                  item
                  xs={4}
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  <Typography sx={{ fontSize: "1.1rem" }}>모두 보기</Typography>
                  <ArrowForwardIosIcon color="primary" fontSize="small" />
                </Grid>
              </Grid>

              <ImageList
                gap={18}
                sx={{
                  display: "flex",
                  flexWrap: "nowrap",
                  overflowX: "auto",
                  overflowY: "hidden",
                  height: "420px",
                  padding: "0.5rem 0 0 0.5rem",
                }}
              >
                {products.map((product) =>
                  product.tag === tag ? (
                    <ImageListItem
                      key={product.id}
                      sx={{
                        flex: "0 0 auto",
                      }}
                    >
                      <ProductThumb product={product} />
                    </ImageListItem>
                  ) : null
                )}
              </ImageList>
            </Box>
          ))}
        </main>
      </Container>
      <Footer title="Hippy" description="Hippy" />
    </React.Fragment>
  );
}
