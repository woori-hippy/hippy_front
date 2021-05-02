import React, { lazy, Suspense } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost.jsx";
import Footer from "./Footer.jsx";
import { Box, ImageList, ImageListItem, Typography } from "@material-ui/core";
import ProductThumb from "./ProductThumb";
import SkeletonThumb from "./SkeletonThumb";

const LazyThumb = lazy(() => import("./ProductThumb"));

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

export default function Main({ products, loading, user }) {
  return (
    <React.Fragment>
      <Header user={user} />
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
                        width: "15rem",
                        flex: "0 0 auto",
                      }}
                    >
                      <Suspense fallback={<SkeletonThumb />}>
                        <LazyThumb product={product} />
                      </Suspense>
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
