/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import { Avatar, Container, TextField, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signout } from "../modules/user";
import useInternalRouter from "../pages/useInternalRouter";

const sections = [
  { title: "Market", url: "market" },
  { title: "Events", url: "#" },
  { title: "Community", url: "#" },
  { title: "FAQ", url: "#" },
  { title: "About", url: "#" },
];

function Header({ user }) {
  const dispatch = useDispatch();
  const router = useInternalRouter();
  const handlehistory = (e) => {
    user.data ? router.push("/mypage") : router.push("/login");
  };
  const isMobile = useMediaQuery("(max-width: 568px)");

  return (
    <div
      css={{
        width: "100%",
        boxShadow: "0px 5px 11px 0px #E5E5E5",
        marginBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ alignItems: "center" }}>
          <Link
            to="/"
            css={
              isMobile &&
              css`
                flex: 1;
              `
            }
          >
            <Avatar src="https://i.postimg.cc/QdNLR1CX/logo-fullsize.png" />
          </Link>
          {!isMobile && (
            <Link
              to="/"
              css={{
                display: "flex",
                flex: 1,
                alignItems: "center",
                marginTop: "0.5rem",
              }}
            >
              <img
                src="https://i.postimg.cc/zfDxr1p3/2021-05-01-10-05-53.png"
                alt="logo"
                style={{ width: "6rem" }}
              />
            </Link>
          )}

          <TextField label="아이템 검색하기" size="small" sx={{ flex: 3 }} />
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton onClick={handlehistory}>
            <PersonIcon />
          </IconButton>
          {user.data ? (
            <Button
              color="inherit"
              variant="outlined"
              size="small"
              sx={{ textDecoration: "none" }}
              onClick={() => {
                dispatch(signout());
                router.push("/");
              }}
            >
              LOG OUT
            </Button>
          ) : (
            <Link to="/signup">
              <Button
                variant="outlined"
                size="small"
                sx={{ textDecoration: "none" }}
              >
                Sign up
              </Button>
            </Link>
          )}
        </Toolbar>
        <Toolbar
          component="nav"
          variant="dense"
          sx={{ justifyContent: "space-between", overflowX: "auto" }}
        >
          {sections.map((section) => (
            <Link
              to={`/${section.url}`}
              key={section.title}
              style={{
                flex: 1,
                height: "3rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
              }}
            >
              {section.title}
            </Link>
          ))}
        </Toolbar>
      </Container>
    </div>
  );
}

export default React.memo(Header);
