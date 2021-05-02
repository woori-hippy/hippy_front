import * as React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Grid, Toolbar } from "@material-ui/core";

const sections = [
  { title: "회사소개", url: "#" },
  { title: "공지사항", url: "#" },
  { title: "개인정보 처리방침", url: "#" },
  { title: "이용약관", url: "About" },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        marginTop: "1rem",
        borderTop: "1.5px solid #ADB2B3",
        color: "#6F7273",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          component="nav"
          variant="dense"
          sx={{ justifyContent: "center", overflowX: "auto" }}
        >
          {sections.map((section) => (
            <Link
              color="inherit"
              noWrap
              key={section.title}
              variant="body2"
              sx={{ p: 1, flexShrink: 0, margin: "0 1rem" }}
            >
              {section.title}
            </Link>
          ))}
        </Toolbar>
        <Grid container justifyContent="center" sx={{ margin: "2rem 0" }}>
          <Grid container item xs={12} md={1} justifyContent="center">
            <img
              src="https://i.postimg.cc/g0Hz53j3/2021-05-01-10-35-36.png"
              alt="logo"
              style={{ width: "10rem", height: "10rem" }}
            />
          </Grid>
          <Grid
            container
            item
            xs={12}
            md={4}
            flexDirection="column"
            justifyContent="center"
            mr={5}
            ml={5}
          >
            <Typography>
              Hippy는  non-fungible tokens (NFT)을 이용한 디지털 예술가들이
              안전하게 창작물을 거래할 수 있는 플랫폼입니다. 디지털 작품들을
              안전하게 사고 팔고 소유하세요
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://material-ui.com/">
            Hippy
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
