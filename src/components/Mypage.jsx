/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import Container from "@mui/material/Container";
import Header from "./Header";
import Footer from "./Footer.jsx";
import Grid from "@mui/material/Grid";
import {
  Avatar,
  Typography,
  Box,
  Button,
  Card,
  useMediaQuery,
} from "@mui/material";
import ProductThumb from "./ProductThumb";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Link } from "react-router-dom";
import React, { lazy, Suspense, useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SkeletonThumb from "./SkeletonThumb";

const LazyThumb = lazy(() => import("./NFTThumb"));

const nftComponents = (nft) => (
  <Box>
    <Card
      sx={{
        width: "15rem",
        boxShadow: "2px 3px 10px 0px rgba(117,117,117,0.5)",
      }}
    >
      <Suspense fallback={<SkeletonThumb />}>
        <LazyThumb nft={nft} />
      </Suspense>
    </Card>
  </Box>
);

const activeTypo = (nft, state, title) => {
  return nft === state ? (
    <Typography
      sx={{
        fontWeight: "bold",
        width: "100%",
        height: "100%",
        color: "inherit",
        backgroundColor: "white",
        padding: "auto 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {title}
    </Typography>
  ) : (
    <Typography sx={{}}>{title}</Typography>
  );
};

export default function Mypage({ products, nftProfile, user }) {
  const [show, setShow] = useState("all");

  const isMobile = useMediaQuery("(max-width: 568px)");
  return (
    <React.Fragment>
      <Header user={user} />
      <Container
        maxWidth="lg"
        css={
          isMobile &&
          css`
            padding: 0;
          `
        }
      >
        <Grid container>
          <Grid
            container
            xs={12}
            item
            spacing={isMobile ? 4 : 8}
            sx={{
              width: "100%",
              margin: "1rem 0 0 0",
              paddingBottom: "4rem",
              backgroundColor: "#EBF1F2",
              justifyContent: "center",
            }}
          >
            <Grid
              container
              item
              xs={4}
              alignContent="center"
              justifyContent="flex-end"
            >
              <Avatar
                alt="profile image"
                src="https://i.postimg.cc/0Q9zzjvH/AppleJam.png"
                sx={
                  isMobile
                    ? {
                        width: "9rem",
                        height: "9rem",
                        border: "0.5px solid #16669A",
                      }
                    : {
                        width: "12rem",
                        height: "12rem",
                        border: "0.5px solid #16669A",
                      }
                }
              ></Avatar>
            </Grid>
            <Grid
              container
              item
              xs={8}
              flexDirection="column"
              justifyContent="center"
              alignItems="flex-start"
              spacing={2}
            >
              <Grid item>
                <Typography variant="h3">{user.data.name}</Typography>
              </Grid>
              <Grid item container alignItems="center">
                <MailOutlineIcon fontSize="large" />
                <Typography sx={{ fontSize: "1.2rem", marginLeft: "0.5rem" }}>
                  {user.data.email}
                </Typography>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item>
                  <Link to="/register">
                    <Button
                      size="small"
                      variant="contained"
                      disableElevation
                      sx={{
                        backgroundColor: "#1B7EA6",
                      }}
                    >
                      은행 계좌 등록
                    </Button>
                  </Link>
                </Grid>
                {user.data.isArtist && (
                  <Grid item>
                    <Link to="/createnft">
                      <Button
                        size="small"
                        variant="contained"
                        disableElevation
                        sx={{
                          backgroundColor: "#1B7EA6",
                        }}
                      >
                        NFT 생성하기
                      </Button>
                    </Link>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            xs={12}
            justifyContent="center"
            sx={{ backgroundColor: "#EBF1F2" }}
          >
            <Button
              color="inherit"
              onClick={() => setShow("all")}
              sx={{
                height: "3rem",
                width: " 10rem",
                padding: "0",
                ".MuiButton-label": { width: "100%", height: "100%" },
              }}
            >
              {activeTypo(show, "all", "모든 NFT")}
            </Button>
            <Button
              color="inherit"
              onClick={() => setShow("product")}
              sx={{
                width: " 10rem",
                padding: "0",
                height: "100%",
                ".MuiButton-label": { width: "100%", height: "100%" },
              }}
            >
              {activeTypo(show, "product", "판매중인 NFT")}
            </Button>
            <Button
              color="inherit"
              onClick={() => setShow("nonproduct")}
              sx={{
                width: " 10rem",
                padding: "0",
                height: "100%",
                ".MuiButton-label": { width: "100%", height: "100%" },
              }}
            >
              {activeTypo(show, "nonproduct", "소장중인 NFT")}
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              padding: "1rem",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(15rem, max-content))",
                gridGap: "16px",
                justifyContent: "center",
                padding: "initial",
              }}
            >
              {nftProfile.map((nft) => {
                switch (show) {
                  case "product":
                    return nft.productId && nftComponents(nft);
                  case "nonproduct":
                    return !nft.productId && nftComponents(nft);
                  default:
                    return nftComponents(nft);
                }
              })}
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer title="Hippy" description="Hippy" />
    </React.Fragment>
  );
}
