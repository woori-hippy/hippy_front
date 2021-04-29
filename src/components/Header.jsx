/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import * as React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import Typography from "@material-ui/core/Typography";
import { Avatar, Container, Link, TextField } from "@material-ui/core";
import { Link as LinkRouter } from "react-router-dom";

const sections = [
  { title: "Market", url: "market" },
  { title: "Events", url: "#" },
  { title: "Community", url: "#" },
  { title: "FAQ", url: "#" },
  { title: "About", url: "About" },
];

function Header() {
  return (
    <div
      css={{
        width: "100%",
        boxShadow: "0px 5px 11px 0px #E5E5E5",
        marginBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar>
          <LinkRouter to="/">
            <Avatar src="https://i.postimg.cc/QdNLR1CX/logo-fullsize.png" />
          </LinkRouter>
          <Typography
            component="h2"
            variant="h5"
            color="#1B7EA6"
            align="left"
            noWrap
            sx={{ flex: 1 }}
          >
            Hippy
          </Typography>
          <TextField label="아이템 검색하기" size="small" sx={{ flex: 3 }} />
          <IconButton>
            <SearchIcon />
          </IconButton>
          <LinkRouter to="/login">
            <IconButton>
              <PersonIcon />
            </IconButton>
          </LinkRouter>
          <LinkRouter to="/signup">
            <Button
              variant="outlined"
              size="small"
              sx={{ textDecoration: "none" }}
            >
              Sign up
            </Button>
          </LinkRouter>
        </Toolbar>
        <Toolbar
          component="nav"
          variant="dense"
          sx={{ justifyContent: "space-between", overflowX: "auto" }}
        >
          {sections.map((section) => (
            <LinkRouter to={section.url}>
              <Link
                color="inherit"
                noWrap
                key={section.title}
                variant="body2"
                sx={{ p: 1, flexShrink: 0 }}
              >
                {section.title}
              </Link>
            </LinkRouter>
          ))}
        </Toolbar>
      </Container>
    </div>
  );
}

export default Header;
