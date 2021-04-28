import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost.jsx";
import Sidebar from "./Sidebar";
import Footer from "./Footer.jsx";
import { useDispatch, useSelector } from "react-redux";
import { create_nft, delete_nft } from "../modules/nftItems";
import Carousel from "react-material-ui-carousel";
import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
  makeStyles,
  Stack,
  Tabs,
} from "@material-ui/core";
import NftThumb from "./NftThumb";
import { Tab } from "@material-ui/icons";
import InfoIcon from "@material-ui/icons/Info";

const sections = [
  { title: "Market", url: "Market" },
  { title: "Events", url: "#" },
  { title: "Community", url: "#" },
  { title: "FAQ", url: "#" },
  { title: "About", url: "About" },
];

const mainFeaturedPost = {
  title: "share your piece",
  description: "희귀한 디지털 아이템을 거래 또는 탐색해보세요",
  image: "https://source.unsplash.com/800x600/?block",
  imageText: "main image description",
};

const featuredPosts = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
];

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

export default function Main({ nftItems, onCreate, onDelete }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Hippy" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <div className={classes.root}>
            <ImageList
              className={classes.gridList}
              sx={{
                display: "flex",
                flexWrap: "nowrap",
                overflowX: "auto",
                width: "100%",
                height: 200,
              }}
            >
              {nftItems.map((nft) => (
                <ImageListItem
                  key={nft.img}
                  sx={{
                    flex: "0 0 auto",
                  }}
                >
                  <img
                    srcSet={`${nft.img}?w=248&fit=crop&auto=format 1x,
                ${nft.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={nft.title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={nft.title}
                    subtitle={nft.author}
                    actionIcon={
                      <IconButton
                        sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                        aria-label={`info about ${nft.title}`}
                      >
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </main>
      </Container>
      <Footer title="Hippy" description="Hippy" />
    </React.Fragment>
  );
}
