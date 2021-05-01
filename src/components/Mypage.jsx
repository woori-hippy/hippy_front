import Container from "@material-ui/core/Container";
import Header from "./Header";
import Footer from "./Footer.jsx";
import Grid from "@material-ui/core/Grid";
import { Avatar, Typography, Box, Button } from "@material-ui/core";
import ProductThumb from "./ProductThumb";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import CheckIcon from "@material-ui/icons/Check";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

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

export default function Mypage({ products, user }) {
  const [nft, setNft] = useState("all");

  return (
    <React.Fragment>
      <Header user={user} />
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid
            container
            xs={12}
            item
            spacing={8}
            sx={{
              margin: "1rem 0 0 0",
              paddingBottom: "4rem",
              backgroundColor: "#EBF1F2",
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
                sx={{
                  width: "12rem",
                  height: "12rem",
                  border: "0.5px solid #16669A",
                }}
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
                <Typography variant="h3">황인서</Typography>
              </Grid>
              <Grid item container alignItems="center">
                <MailOutlineIcon fontSize="large" />
                <Typography sx={{ fontSize: "1.2rem", marginLeft: "0.5rem" }}>
                  sjsjsj1246@gmail.com
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
                        backgroundColor: "#16669A",
                      }}
                    >
                      은행 계좌 등록
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/createnft">
                    <Button
                      size="small"
                      variant="contained"
                      disableElevation
                      sx={{
                        backgroundColor: "#16669A",
                      }}
                    >
                      NFT 생성하기
                    </Button>
                  </Link>
                </Grid>
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
              onClick={() => setNft("all")}
              sx={{
                height: "3rem",
                width: " 10rem",
                padding: "0",
                ".MuiButton-label": { width: "100%", height: "100%" },
              }}
            >
              {activeTypo(nft, "all", "모든 NFT")}
            </Button>
            <Button
              color="inherit"
              onClick={() => setNft("product")}
              sx={{
                width: " 10rem",
                padding: "0",
                height: "100%",
                ".MuiButton-label": { width: "100%", height: "100%" },
              }}
            >
              {activeTypo(nft, "product", "판매중인 NFT")}
            </Button>
            <Button
              color="inherit"
              onClick={() => setNft("nonproduct")}
              sx={{
                width: " 10rem",
                padding: "0",
                height: "100%",
                ".MuiButton-label": { width: "100%", height: "100%" },
              }}
            >
              {activeTypo(nft, "nonproduct", "소장중인 NFT")}
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
              {products.map((product) => (
                <Box>
                  <ProductThumb product={product} />
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer title="Hippy" description="Hippy" />
    </React.Fragment>
  );
}
