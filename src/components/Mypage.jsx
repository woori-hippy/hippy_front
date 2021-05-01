import * as React from "react";
import Container from "@material-ui/core/Container";
import Header from "./Header";
import Footer from "./Footer.jsx";
import Grid from "@material-ui/core/Grid";
import { Avatar, Typography, Box, Button } from "@material-ui/core";
import ProductThumb from "./ProductThumb";
import PhoneIcon from "@material-ui/icons/Phone";
import { Link } from "react-router-dom";

export default function Mypage({ products, user }) {
  return (
    <React.Fragment>
      <Header user={user} />
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Avatar
              alt="profile image"
              src="https://i.postimg.cc/QdNLR1CX/logo-fullsize.png"
              sx={{
                width: "200px",
                height: "200px",
                border: "0.5px solid #16669A",
                margin: "2rem auto",
              }}
            ></Avatar>
          </Grid>
          <Grid item xs={6}>
            <Typography
              component="h2"
              sx={{
                fontSize: "1.5rem",
                marginTop: "4rem",
                marginLeft: "2rem",
              }}
            >
              Hippy 님
            </Typography>
            <Typography sx={{ fontSize: "1rem", marginLeft: "2rem" }}>
              <PhoneIcon fontSize="1rem" /> 010-2352-0300
            </Typography>
            <Button
              size="small"
              variant="contained"
              disableElevation
              sx={{
                backgroundColor: "#16669A",
                marginTop: "1rem",
                marginLeft: "2rem",
              }}
            >
              은행 계좌 등록
            </Button>
            <Link to="/createnft">
              <Button
                size="small"
                variant="contained"
                disableElevation
                sx={{
                  backgroundColor: "#16669A",
                  marginTop: "1rem",
                  marginLeft: "2rem",
                }}
              >
                NFT 생성하기
              </Button>
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              backgroundColor: "#e2e2e2",
              marginTop: "3rem",
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
