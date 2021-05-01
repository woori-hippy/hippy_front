import * as React from "react";
import Container from "@material-ui/core/Container";
import Header from "./Header";
import Footer from "./Footer.jsx";
import Grid from "@material-ui/core/Grid";
import {
  Avatar,
  Typography,
  Box,
  Button
} from "@material-ui/core";
import ProductThumb from "./ProductThumb";
import PhoneIcon from "@material-ui/icons/Phone";
import CheckIcon from '@material-ui/icons/Check';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Link as LinkRouter } from "react-router-dom";

export default function Mypage({ products }) {
  return (
    <React.Fragment>
          <Header title="Hippy" />
          <Container maxWidth="md">
            <mypage>
              <Box>
                <Grid
                  container
                  spacing={2}
                  sx={{ display: "flex", flexDirection: "row" }}
                >
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
                    <LinkRouter to="/register">
                      <Button
                        variant="contained"
                        disableElevation
                        sx={{
                          width: "13rem",
                          backgroundColor: "#16669A",
                          marginTop: "1rem",
                          marginLeft: "2rem",
                          borderRadius: "50px",
                          padding: "0.5rem 3rem",
                          fontWeight: "bold",
                          backgroundColor: "#3887A6"
                        }}
                        endIcon={<CheckIcon />}
                      >
                        은행 계좌 등록
                      </Button>
                    </LinkRouter>
                    <LinkRouter to="/create">
                      <Button
                        variant="contained"
                        disableElevation
                        sx={{
                          width: "13rem",
                          backgroundColor: "#16669A",
                          marginTop: "1rem",
                          marginLeft: "2rem",
                          borderRadius: "50px",
                          padding: "0.5rem 3rem",
                          fontWeight: "bold",
                          backgroundColor: "#3887A6",
                          marginTop: "1rem",
                          marginLeft: "2rem",
                        }}
                        endIcon={<AddCircleOutlineIcon />}
                      >
                        NFT 생성하기
                      </Button>
                    </LinkRouter>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{ backgroundColor: "#e2e2e2", marginTop: "3rem", padding: "1rem" }}
                  >
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
                        {products.map((product) => (
                          <Box>
                            <ProductThumb product={product} />
                          </Box>
                        ))}
                      </Box>
                  </Grid>
                </Grid>
              </Box>
            </mypage>
          </Container>
          <Footer title="Hippy" description="Hippy" />
        </React.Fragment>
  );
}
